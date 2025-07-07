import { Cxmsg } from "../../utils/cxmsg.js";

const serv = sessionStorage.getItem("servidor_nodered");
const token = sessionStorage.getItem('token');
const endpoint_token = `${serv}/verificatoken/${token}`;
fetch(endpoint_token)
    .then((res) => {
        if (!res.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return res.json();
    })
    .then((data) => {
        
        if (data.retorno === 200) {
            console.log("Token válido");
        } else {
            console.log("Token inválido");
            sessionStorage.removeItem('id_usuario');
            sessionStorage.removeItem('nome_usuario');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('id_token');
            window.top.location.href = "../index.html";
        }
    });

const dadosgrid = document.querySelector("#dadosgrid");
const dadosgridcontatosfornecedor = document.querySelector("#dadosgridcontatosfornecedor");
const dadosgridlistacontatosfornecedoradd = document.querySelector("#dadosgridlistacontatosfornecedoradd");
const dadosgridtelefonesfornecedor = document.querySelector("#dadosgridtelefonesfornecedor");
const popupnovofornecedor = document.querySelector("#popupnovofornecedor");
const popuppesquisa = document.querySelector("#popuppesquisa");
const popuplistacontatosfornecedor = document.querySelector("#popuplistacontatosfornecedor");
const popuplistatelefonesfornecedor = document.querySelector("#popuplistatelefonesfornecedor");
const img_foto = document.querySelector("#img_foto");

const btn_add = document.querySelector("#btn_add");
const btn_salvar = document.querySelector("#btn_salvar");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_pesq = document.querySelector("#btn_pesq");
const btn_listar = document.querySelector("#btn_listar");
const btn_listarcontatos = document.querySelector("#btn_listarcontatos");
const btn_cancelar = document.querySelector("#btn_cancelar");
const btn_cancelarpesq = document.querySelector("#btn_cancelarpesq");
const btn_fecharpopuplistacontatos = document.querySelector("#btn_fecharpopuplistacontatos");
const btn_fecharxpopupnovocolab = document.querySelector("#btn_fecharxpopupnovocolab");
const btn_fecharxpopuppesq = document.querySelector("#btn_fecharxpopuppesq");
const btn_fecharxpopuplistacontatos = document.querySelector("#btn_fecharxpopuplistacontatos");
const btn_fecharxpopuplistatelefonesfornecedor = document.querySelector("#btn_fecharxpopuplistatelefonesfornecedor");
const btn_fecharpopuplistatelefonesfornecedor = document.querySelector("#btn_fecharpopuplistatelefonesfornecedor");

const f_nome = document.querySelector("#f_nome");
const f_status = document.querySelector("#f_status");
const f_foto = document.querySelector("#f_foto");
const f_filtro = document.querySelector("#f_filtro");
const f_pesqId = document.querySelector("#f_pesqId");
const f_pesqNome = document.querySelector("#f_pesqNome");
const f_pesq = document.querySelector("#f_pesq");


/**Variaveis Globais */

//n = Novo colaboraodr | e = Editar fornecedor
let modojanela = "n";
let iddeletado = [];
let id = 0; // ID do fornecedor a ser editado


/**Funções */

//**Função Carregar a lista */

const carregarFornecedores = () => {
    const endpoint = `${serv}/todosfornecedores`;
    fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error("A resposta da rede não foi bem-sucedida");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Carregando Lista: /n", data);
            dadosgrid.innerHTML = "";
            //Cria a linha da lista
            data.forEach((fornecedor) => {
                criarlinha(fornecedor);
            });
        })
        .catch((erro) => {
            console.error("Erro ao carregar fornecedores:", erro);
        });
}

//**Função Limpar Inputs */

const limpar = () => {
    f_nome.value = "";
    f_status.selectedIndex = 0;
    f_nome.focus();
    img_foto.setAttribute("src", "../../img/defaut.svg");
    f_foto.value = ""; // Limpa o input de foto
    dadosgridlistacontatosfornecedoradd.innerHTML = ""; // Limpa a lista de contatos do fornecedor
    modojanela = "n"; // Reseta o modo da janela
    iddeletado = []; // Limpa o array de IDs deletados
}

//**Função Criar Linha Fornecedor */

const criarlinha = (fornecedor) => {
    const linhagrid = document.createElement("div");
    linhagrid.classList.add("linhagrid");
    dadosgrid.appendChild(linhagrid);

    const c1 = document.createElement("div");
    c1.classList.add("c1");
    c1.classList.add("colunalinhagrid");
    c1.innerHTML = fornecedor.n_fornecedor_fornecedor;
    linhagrid.appendChild(c1);

    const c2 = document.createElement("div");
    c2.classList.add("c2");
    c2.classList.add("colunalinhagrid");
    c2.innerHTML = fornecedor.s_desc_fornecedor;
    linhagrid.appendChild(c2);

    const c3 = document.createElement("div");
    c3.classList.add("c3");
    c3.classList.add("colunalinhagrid");
    c3.innerHTML = fornecedor.c_status_fornecedor;
    linhagrid.appendChild(c3);

    const c4 = document.createElement("div");
    c4.classList.add("c4");
    c4.classList.add("colunalinhagrid");
    linhagrid.appendChild(c4);

    //Botão de Ligado/Desligado Selecionar o Status
    const img_status = document.createElement("img");
    img_status.classList.add("icone_op");
    if (fornecedor.c_status_fornecedor == "A") {
        img_status.setAttribute("src", "../../img/ligado.svg");
    }
    if (fornecedor.c_status_fornecedor == "I") {
        img_status.setAttribute("src", "../../img/desligado.svg");
    }
    c4.appendChild(img_status);

    //Botão de Lapis Editar Contato

    const img_editar = document.createElement("img");
    img_editar.classList.add("icone_op");
    img_editar.setAttribute("src", "../../img/edit.svg");
    c4.appendChild(img_editar);

    //Botão de Lixeira Remover Contato
    const img_remover = document.createElement("img");
    img_remover.classList.add("icone_op");
    img_remover.setAttribute("src", "../../img/delete.svg");
    c4.appendChild(img_remover);

    //Botões Tratamento de evento da função

    //Botão Editar Contato

    img_editar.addEventListener("click", function () {
        modojanela = "e";
        document.querySelector("#titulopopup").innerHTML = "Editar fornecedor";
        popupnovofornecedor.classList.remove("ocultarpopup");
        id = fornecedor.n_fornecedor_fornecedor;
        f_nome.value = fornecedor.s_desc_fornecedor;
        f_status.value = fornecedor.c_status_fornecedor;
        let idpessoa = null
        console.log("id do fornecedor para editar: /n", id);


        let endpoint_fornecedor = `${serv}/mostrarfornecedor/${id}`;
        fetch(endpoint_fornecedor)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((response) => {
                console.log("Carregando o fornecedor para editar: /n", response);
                img_foto.src = response[0].s_logo_fornecedor;  //Como é um array, pego o primeiro elemento
            });

        // Buscar pessoas vinculadas a este fornecedor e mostrar na lista de contatos adicionados
        const endpoint_pessoas = `${serv}/mostrarcontatofornecedor/${id}`;
        fetch(endpoint_pessoas)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((response) => {

                // Limpa a lista antes de adicionar
                dadosgridlistacontatosfornecedoradd.innerHTML = "";
                const idContato = [];
                response.forEach((contato) => {
                    idContato.push(contato.n_pessoa_pessoa);
                });
                console.log("Retornando ID do Contato:", idContato);
                idContato.forEach((idContato) => {
                    const endpoint_nome = `${serv}/mostrarnomecontatofornecedor/${idContato}`;
                    fetch(endpoint_nome)
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Erro ao buscar nome na outra tabela");
                            }
                            return response.json();
                        })
                        .then((data) => {
                            console.log("Retornado", data);
                            criarlinhacontatosfornecedoradd(data[0], true); // true indica que é um contato existente

                        })
                        .catch((erro) => {
                            console.error("Erro ao buscar nome na outra tabela:", erro);
                        });
                });
            });
    });

    //Botão Remover Contato
    img_remover.addEventListener("click", function () {
        if (confirm(`Tem certeza que deseja remover fornecedor ${fornecedor.s_desc_fornecedor}?`)) {
            console.log("ID do fornecedor a ser deletado: ", fornecedor.n_fornecedor_fornecedor);
            const iddelete = {
                n_fornecedor_fornecedor: fornecedor.n_fornecedor_fornecedor,
            }

            const endpoint_removerfornecedor = `${serv}/deletefornecedor`;
            const options = {
                method: "POST",
                body: JSON.stringify(iddelete),
            };
            fetch(endpoint_removerfornecedor, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Erro ao remover fornecedor");
                    }
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Fornecedor Removido com sucesso!',
                        cor: 'green',
                        tipo: 'ok', //"sn" para Sim e Não ou "ok" para apenas OK
                        ok: function () {
                            console.log("OK");
                        }
                        , sim: function () {
                            console.log("Sim");
                        }
                        , nao: function () {
                            console.log("Não");
                        }

                    }
                    Cxmsg.mostrar(config);
                    //alert("fornecedor removido com sucesso!");
                    carregarFornecedores();
                })
                .catch((erro) => {
                    console.error("Erro ao remover fornecedor:", erro);
                    alert("Erro ao remover fornecedor!");
                });
            limpar();
            carregarFornecedores();
        }
    });


    //Botão de Status
    img_status.addEventListener("click", function () {
        if (fornecedor.c_status_fornecedor == "A") {
            img_status.setAttribute("src", "../../img/desligado.svg");
            fornecedor.c_status_fornecedor = "I";
            console.log(`fornecedor ${fornecedor.n_fornecedor_fornecedor} Desligado`);
        } else {
            img_status.setAttribute("src", "../../img/ligado.svg");
            fornecedor.c_status_fornecedor = "A";
            console.log(`fornecedor ${fornecedor.n_fornecedor_fornecedor} Ligado`);
        }
        const endpoint_status = `${serv}/editarstatusfornecedor/${fornecedor.n_fornecedor_fornecedor}/${fornecedor.c_status_fornecedor}`;
        fetch(endpoint_status)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao atualizar status");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Status atualizado com sucesso:", data);
                carregarFornecedores();
            })
    });
};
//**Função Criar Linha de Contatos do Fornecedor */

const criarlinhacontatosfornecedor = (contato) => {
    const linhagrid = document.createElement("div");
    linhagrid.classList.add("linhagrid");
    dadosgridcontatosfornecedor.appendChild(linhagrid);

    const c1 = document.createElement("div");
    c1.classList.add("c1_lcf");
    c1.classList.add("colunalinhagrid");
    c1.innerHTML = contato.n_pessoa_pessoa;
    linhagrid.appendChild(c1);

    const c2 = document.createElement("div");
    c2.classList.add("c2_lcf");
    c2.classList.add("colunalinhagrid");
    c2.innerHTML = contato.s_nome_pessoa;
    linhagrid.appendChild(c2);

    const c3 = document.createElement("div");
    c3.classList.add("c3_lcf");
    c3.classList.add("colunalinhagrid");
    linhagrid.appendChild(c3);

    //Botão de adicionar

    const img_adduser = document.createElement("img");
    img_adduser.classList.add("icone_op");
    img_adduser.setAttribute("src", "../../img/adduser.svg");
    c3.appendChild(img_adduser);

    //Botão de Ver Contato

    const img_vercontato = document.createElement("img");
    img_vercontato.classList.add("icone_op");
    img_vercontato.setAttribute("src", "../../img/cel.svg");
    c3.appendChild(img_vercontato);

    /**Tratamento de evento da função*/

    //Botão de Status

    img_adduser.addEventListener("click", () => {
        criarlinhacontatosfornecedoradd(contato, false); // false indica que é um contato novo
        console.log("Adicionando contato: ", contato);
    });

    //Botão Ver Contato

    img_vercontato.addEventListener("click", function () {
        popuplistatelefonesfornecedor.classList.remove("ocultarpopup");
        popuplistatelefonesfornecedor.style.zIndex = maiorzindex(popuplistatelefonesfornecedor) + 1; //Define o z-index para o maior valor
        dadosgridtelefonesfornecedor.innerHTML = ""; //Limpa o conteúdo do popup
        const id = contato.n_pessoa_pessoa;
        const endpoint_telefones = `${serv}/mostrartelefones/${id}`;
        fetch(endpoint_telefones)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Carregando Telefones: /n", data);

                data.forEach((telefone) => {
                    criarlinhatelefones(telefone);
                });
            });
    });
}

//**Função Criar Linha de Contatos do Fornecedor para Adicionar */

const criarlinhacontatosfornecedoradd = (contato, novo) => {
    const linhagrid = document.createElement("div");
    linhagrid.classList.add("linhagrid");
    linhagrid.setAttribute("id", "linhagridadd");
    linhagrid.setAttribute("data-existente", novo); // alterar
    dadosgridlistacontatosfornecedoradd.appendChild(linhagrid);

    const c1 = document.createElement("div");
    c1.classList.add("c1_lcf");
    c1.classList.add("colunalinhagrid");
    c1.innerHTML = contato.n_pessoa_pessoa;
    linhagrid.appendChild(c1);

    const c2 = document.createElement("div");
    c2.classList.add("c2_lcf");
    c2.classList.add("colunalinhagrid");
    c2.innerHTML = contato.s_nome_pessoa;
    linhagrid.appendChild(c2);

    const c3 = document.createElement("div");
    c3.classList.add("c3_lcf");
    c3.classList.add("colunalinhagrid");
    linhagrid.appendChild(c3);

    //Botão de Remover
    const img_remover = document.createElement("img");
    img_remover.classList.add("icone_op");
    img_remover.setAttribute("src", "../../img/delete.svg");
    c3.appendChild(img_remover);

    const img_vercontato = document.createElement("img");
    img_vercontato.classList.add("icone_op");
    img_vercontato.setAttribute("src", "../../img/cel.svg");
    c3.appendChild(img_vercontato);

    /**Tratamento de evento*/

    //Botão Remover Contato
    img_remover.addEventListener("click", function () {
        linhagrid.remove();
        iddeletado.push({
            n_pessoa_pessoa: contato.n_pessoa_pessoa,
            n_fornecedor_fornecedor: id // 'id' é o fornecedor atualmente sendo editado
        });
    });

    img_vercontato.addEventListener("click", function () {
        popuplistatelefonesfornecedor.classList.remove("ocultarpopup");
        popuplistatelefonesfornecedor.style.zIndex = maiorzindex(popuplistatelefonesfornecedor) + 1; //Define o z-index para o maior valor
        dadosgridtelefonesfornecedor.innerHTML = ""; //Limpa o conteúdo do popup
        const id = contato.n_pessoa_pessoa;
        const endpoint_telefones = `${serv}/mostrartelefones/${id}`;
        fetch(endpoint_telefones)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Carregando Telefones: /n", data);

                data.forEach((telefone) => {
                    criarlinhatelefones(telefone);
                });
            });
    });
}


//**Função Mostrar Telefones */

const criarlinhatelefones = (telefone) => {
    const linhagrid = document.createElement("div");
    linhagrid.classList.add("linhagrid");
    dadosgridtelefonesfornecedor.appendChild(linhagrid);

    const c1 = document.createElement("div");
    c1.classList.add("c1_mt");
    c1.classList.add("colunalinhagrid");
    c1.innerHTML = telefone.s_numero_telefone;
    linhagrid.appendChild(c1);
}

/**Botões */

//**Botão Cabeçalho */

//Botão de Adicionar Contato
btn_add.addEventListener("click", function () {
    modojanela = "n";
    document.querySelector("#titulopopup").innerHTML = "Novo fornecedor";
    popupnovofornecedor.classList.remove("ocultarpopup");
    limpar();
});

//Botão de Listar Fornecedores
btn_listar.addEventListener("click", function () {
    carregarFornecedores();
});

//Botão de Pesquisa
btn_pesq.addEventListener("click", function () {
    popuppesquisa.classList.remove("ocultarpopup");
    f_pesq.value = "";
    f_pesq.focus();
});

//**Botão de Rodape */

//Botão de Cancelar
btn_cancelar.addEventListener("click", function () {
    popupnovofornecedor.classList.add("ocultarpopup");
    limpar();
});

//Botão de Cancelar Pesquisa
btn_cancelarpesq.addEventListener("click", function () {
    popuppesquisa.classList.add("ocultarpopup");
    limpar();
});

//Botão de Cancelar Popuplistacontatos
btn_fecharpopuplistacontatos.addEventListener("click", function () {
    popuplistacontatosfornecedor.classList.add("ocultarpopup");

});

//Botão de Fechar Popuplistatelefonesfornecedor
btn_fecharpopuplistatelefonesfornecedor.addEventListener("click", function () {
    popuplistatelefonesfornecedor.classList.add("ocultarpopup");
    limpar();
});

//**Botão X da Janela */

//Botão de Fechar Popuplistatelefonesfornecedor
btn_fecharxpopuplistatelefonesfornecedor.addEventListener("click", function () {
    popuplistatelefonesfornecedor.classList.add("ocultarpopup");
    limpar();
});

//Botão de Fechar Popup Novo Fornecedor
btn_fecharxpopupnovocolab.addEventListener("click", function () {
    popupnovofornecedor.classList.add("ocultarpopup");
    limpar();
});

//Botão de Fechar Popup Pesquisa
btn_fecharxpopuppesq.addEventListener("click", function () {
    popuppesquisa.classList.add("ocultarpopup");
    limpar();
});

//Botão de Fechar Popuplistacontatos
btn_fecharxpopuplistacontatos.addEventListener("click", function () {
    popuplistacontatosfornecedor.classList.add("ocultarpopup");
});

//**Botão de Pesquisa por ID ou Nome */

f_pesqId.addEventListener("click", function (evt) {
    f_pesq.value = "";
    f_pesq.focus();
});

f_pesqNome.addEventListener("click", function (evt) {
    f_pesq.value = "";
    f_pesq.focus();
});

//**Botão dos Popups */

//Botão de Listar Contatos do Fornecedor
btn_listarcontatos.addEventListener("click", function () {
    popuplistacontatosfornecedor.classList.remove("ocultarpopup");
    popuplistacontatosfornecedor.style.zIndex = maiorzindex(popuplistacontatosfornecedor) + 1; //Define o z-index para o maior valor
    const endpoint_listarcontatos = `${serv}/todospessoasfornecedor`;
    fetch(endpoint_listarcontatos)
        .then((response) => {
            if (!response.ok) {
                throw new Error("A resposta da rede não foi bem-sucedida");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Carregando Lista de Contatos: /n", data);
            dadosgridcontatosfornecedor.innerHTML = "";
            //Cria a linha da lista
            data.forEach((contato) => {
                criarlinhacontatosfornecedor(contato);
            });
        });
});

//Botão de Listar Telefones do Fornecedor
btn_pesquisar.addEventListener("click", function () {

    if (f_pesq.value == "") {
        const config = {
            titulo: 'Atenção',
            texto: 'Campo de pesquisa vazio, digite um valor para pesquisar',
            cor: '#f00',
            tipo: 'ok', //"sn" para Sim e Não ou "ok" para apenas OK
            ok: function () {
                console.log("OK");
            }
            , sim: function () {
                console.log("Sim");
            }
            , nao: function () {
                console.log("Não");
            }

        }
        Cxmsg.mostrar(config);
        // alert("Digite um valor para pesquisar");
        f_pesq.focus();
        return;
    } else {
        let tipo = "";
        if (f_pesqId.checked) {
            tipo = "ID";
        } else {
            tipo = "Nome";
        }
        const endpoint_pesquisa = `${serv}/pesquisarfornecedor/${tipo}/${f_pesq.value}`;
        fetch(endpoint_pesquisa)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Carregando Lista: /n", data);
                dadosgrid.innerHTML = "";
                //Cria a linha da lista
                data.forEach((fornecedor) => {
                    criarlinha(fornecedor);
                });
            });
        popuppesquisa.classList.add("ocultarpopup");
    }
});

//Botão de Salvar Contato
btn_salvar.addEventListener("click", function () {

    //Validar informações
    if (f_nome.value.length < 3) {
        alert("Nome inválido");
        f_nome.focus();
        return;
    }

    if (f_status.value == "") {
        alert("Status inválido");
        f_status.focus();
        return;
    }
    if (img_foto.getAttribute("src") == "../../img/defaut.svg") {
        alert("Foto inválida");
        f_foto.focus();
        return;
    }

    let idcontat = [];


    console.log("IDs dos contatos adicionados: ", idcontat);

    console.log("Modo Janela", modojanela);

    //Edita Contato
    if (modojanela == "e") {

        //Armazena todo o formulario na variavel dados
        const dados = {
            n_fornecedor_fornecedor: id,
            s_nome_fornecedor: f_nome.value,
            c_status_fornecedor: f_status.value,
            pessoa: idcontat, //Array de IDs dos contatos
            s_foto_fornecedor: img_foto.getAttribute("src")
        };

        console.log("IDs dos contatos deletados: ", iddeletado);
        if (iddeletado.length > 0) {
            iddeletado.forEach((id) => {
                const endpoint_deletepessoaadd = `${serv}/deletepessoaadd/${id.n_pessoa_pessoa}/${id.n_fornecedor_fornecedor}`;
                fetch(endpoint_deletepessoaadd, { method: "GET" })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Erro ao deletar contato");
                        }
                    });
            });
        }

        // Só adiciona novos contatos (não salva os que já existem)
        // Considera como "novo" apenas os que não têm atributo data-existente
        const linhas = dadosgridlistacontatosfornecedoradd.querySelectorAll(".linhagrid");
        linhas.forEach((linha) => {
            // Se a linha NÃO tem o atributo data-existente, é novo contato
            if (!linha.getAttribute("data-existente") || linha.getAttribute("data-existente") === "false") {
                const idContato = linha.querySelector(".c1_lcf").innerHTML;
                idcontat.push(idContato);
                console.log("Adicionando novo contato:", idContato);
            }
        });
        limpar();



        console.log("Carregando Formulario para Salvamento no BD: /n", dados);
        const endpointnovocolab = `${serv}/editarfornecedor`;
        const options = {
            method: "POST",
            body: JSON.stringify(dados),
        };
        fetch(endpointnovocolab, options)
            .then((response) => {
                if (response.status === 200) {
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Fornecedor atualizado com sucesso!',
                        cor: 'green',
                        tipo: 'ok', //"sn" para Sim e Não ou "ok" para apenas OK
                        ok: function () {
                            console.log("OK");
                        }
                        , sim: function () {
                            console.log("Sim");
                        }
                        , nao: function () {
                            console.log("Não");
                        }

                    }
                    Cxmsg.mostrar(config);
                    //alert("fornecedor Atualizado com sucesso!");
                    limpar();
                } else {
                    alert("Erro ao atualizar o fornecedor!");
                }
                return response.json();
            })

        popupnovofornecedor.classList.add("ocultarpopup");

        //Novo Contato
    } else if (modojanela == "n") {
        // Pega todos os elementos de contatos adicionados
        const linhas = dadosgridlistacontatosfornecedoradd.querySelectorAll(".linhagrid");

        linhas.forEach((linha) => {
            // O id do contato está no primeiro filho (c1) da linha
            const idContato = linha.querySelector(".c1_lcf").innerHTML;
            idcontat.push(idContato);
        });


        //Armazena todo o formulario na variavel dados
        const dados = {
            s_nome_fornecedor: f_nome.value,
            c_status_fornecedor: f_status.value,
            pessoa: idcontat, //Array de IDs dos contatos
            s_foto_fornecedor: img_foto.getAttribute("src")
        };

        console.log("Carregando Formulario para Salvamento no BD: /n", dados);
        const endpointnovocolab = `${serv}/novofornecedor`;
        const options = {
            method: "POST",
            body: JSON.stringify(dados),
        };
        fetch(endpointnovocolab, options)
            .then((response) => {
                if (response.status === 200) {
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Fornecedor cadastrado com sucesso!',
                        cor: 'green',
                        tipo: 'ok', //"sn" para Sim e Não ou "ok" para apenas OK
                        ok: function () {
                            console.log("OK");
                        }
                        , sim: function () {
                            console.log("Sim");
                        }
                        , nao: function () {
                            console.log("Não");
                        }

                    }
                    Cxmsg.mostrar(config);
                    //alert("fornecedor cadastrado com sucesso!");
                    limpar();
                } else {
                    alert("Erro ao cadastrar fornecedor!");
                }
                return response.json();
            })
    }

    limpar();
    setTimeout(() => { //Não da tempo de carregar a lista antes de fechar a janela
        carregarFornecedores();
    }, 500);
});

//Inserir Foto
f_foto.addEventListener("change", function () { // Evento de mudança do input de arquivo
    const file = f_foto.files[0]; // Pega o primeiro arquivo selecionado
    if (file) { // Verifica se há um arquivo
        const reader = new FileReader(); //  é uma API do JavaScript usada para ler o conteúdo de arquivos de forma assíncrona
        reader.onload = function (e) { // Carraga o arquivo
            img_foto.setAttribute("src", e.target.result); // Define o src da imagem para o resultado do FileReader
        }
        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
});

//Filtro de pesquisa
f_filtro.addEventListener("keyup", function () {
    const filtro = f_filtro.value.toLowerCase(); //Converte o valor do filtro para minúsculas
    const linhas = dadosgrid.querySelectorAll(".linhagrid");
    linhas.forEach((linha) => {
        const nome = linha.querySelector(".c2").textContent.toLowerCase(); //Converte o nome para minúsculas
        if (nome.includes(filtro)) { //Verifica se contem a string do filtro
            linha.style.display = "flex";
        } else {
            linha.style.display = "none";
        }
    });
});


/**Carregamentos */

//Chama a Função Carregar a lista
carregarFornecedores();
