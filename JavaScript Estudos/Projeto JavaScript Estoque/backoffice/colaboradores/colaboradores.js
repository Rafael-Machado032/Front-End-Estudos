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
const novocolaborador = document.querySelector("#novocolaborador");
const img_foto = document.querySelector("#img_foto");
const telefones = document.querySelector("#telefones");
const pesquisa = document.querySelector("#pesquisa");

const btn_add = document.querySelector("#btn_add");
const btn_fecharpopup = document.querySelector("#btn_fecharpopup");
const btn_cancelar = document.querySelector("#btn_cancelar");
const btn_salvar = document.querySelector("#btn_salvar");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_pesq = document.querySelector("#btn_pesq");
const btn_fecharpopuppesq = document.querySelector("#btn_fecharpopuppesq");
const btn_cancelarpesq = document.querySelector("#btn_cancelarpesq");
const btn_listar = document.querySelector("#btn_listar");

const f_nome = document.querySelector("#f_nome");
const f_email = document.querySelector("#f_email");
const f_tipo = document.querySelector("#f_tipo");
const f_status = document.querySelector("#f_status");
const f_telefone = document.querySelector("#f_telefone");
const f_foto = document.querySelector("#f_foto");
const f_filtro = document.querySelector("#f_filtro");
const f_pesqId = document.querySelector("#f_pesqId");
const f_pesqNome = document.querySelector("#f_pesqNome");
const f_pesq = document.querySelector("#f_pesq");


/**Variaveis Globais */

//n = Novo colaboraodr | e = Editar colaborador
let modojanela = "n";
let idsTelefones = [];
let id = 0; // ID do colaborador a ser editado

/**Funções */

//Função Carregar a lista

const carregarColaboradores = () => {
    const endpoint_todoscoloboradores = `${serv}/todospessoas`;
    fetch(endpoint_todoscoloboradores)
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
            data.forEach((colaborador) => {
                criarlinha(colaborador);
            });
        })
        .catch((erro) => {
            console.error("Erro ao carregar colaboradores:", erro);
        });
}

//Função de criar caixa do telefone
const criarCxTelefone = (fone, idtel) => {
    const tel = document.createElement("div");
    tel.classList.add("tel");
    telefones.appendChild(tel);

    const numtel = document.createElement("div");
    numtel.classList.add("numtel");
    numtel.setAttribute("data-idtel", idtel);
    numtel.innerHTML = fone;
    tel.appendChild(numtel);

    const deltel = document.createElement("img");
    deltel.setAttribute("class", "deltel");
    deltel.setAttribute("id", "btn_deltel");
    deltel.setAttribute("src", "../../img/delete.svg");
    deltel.setAttribute("alt", "Excluir telefone");
    deltel.setAttribute("title", "Excluir telefone");
    deltel.setAttribute("data-idtel", idtel);
    tel.appendChild(deltel);

    console.log("ID da caixa telefone criada: ", idtel);


    f_telefone.value = "";
    f_telefone.focus();

    // Botão de lixeira para deletar telefone
    deltel.addEventListener("click", function () {

        if (modojanela == "e") {
            const idtel = deltel.getAttribute("data-idtel");
            idsTelefones.push(idtel);
            console.log("IDs dos telefones deletados: /n", idsTelefones);
        }
        telefones.removeChild(tel); // Remove o telefone da interface
    });


}

//Limpar Inputs
const limpar = () => {
    f_nome.value = "";
    f_tipo.selectedIndex = 0;
    f_status.selectedIndex = 0;
    f_telefone.value = "";
    telefones.innerHTML = "";
    f_nome.focus();
    img_foto.setAttribute("src", "../../img/defaut.svg");
    f_foto.value = ""; // Limpa o input de foto
    idsTelefones = []; // Limpa os IDs dos telefones
    modojanela = "n"; // Reseta o modo da janela
}

const criarlinha = (colaborador) => {
    const linhagrid = document.createElement("div");
    linhagrid.classList.add("linhagrid");
    dadosgrid.appendChild(linhagrid);

    const c1 = document.createElement("div");
    c1.classList.add("c1");
    c1.classList.add("colunalinhagrid");
    c1.innerHTML = colaborador.n_pessoa_pessoa;
    linhagrid.appendChild(c1);

    const c2 = document.createElement("div");
    c2.classList.add("c2");
    c2.classList.add("colunalinhagrid");
    c2.innerHTML = colaborador.s_nome_pessoa;
    linhagrid.appendChild(c2);

    const c3 = document.createElement("div");
    c3.classList.add("c3");
    c3.classList.add("colunalinhagrid");
    c3.innerHTML = colaborador.n_tipopessoa_tipopessoa;
    linhagrid.appendChild(c3);

    const c4 = document.createElement("div");
    c4.classList.add("c4");
    c4.classList.add("colunalinhagrid");
    c4.innerHTML = colaborador.c_status_pessoa;
    linhagrid.appendChild(c4);

    const c5 = document.createElement("div");
    c5.classList.add("c5");
    c5.classList.add("colunalinhagrid");
    linhagrid.appendChild(c5);

    //Botão de Ligado/Desligado Selecionar o Status
    const img_status = document.createElement("img");
    img_status.classList.add("icone_op");
    if (colaborador.c_status_pessoa == "A") {
        img_status.setAttribute("src", "../../img/ligado.svg");
    }
    if (colaborador.c_status_pessoa == "I") {
        img_status.setAttribute("src", "../../img/desligado.svg");
    }
    c5.appendChild(img_status);

    //Botão de Lapis Editar Contato

    const img_editar = document.createElement("img");
    img_editar.classList.add("icone_op");
    img_editar.setAttribute("src", "../../img/edit.svg");
    c5.appendChild(img_editar);

    //Botão de Lixeira Remover Contato
    const img_remover = document.createElement("img");
    img_remover.classList.add("icone_op");
    img_remover.setAttribute("src", "../../img/delete.svg");
    c5.appendChild(img_remover);

    //Tratamento de evento

    //Botão Editar Contato

    img_editar.addEventListener("click", function () {
        modojanela = "e";
        document.querySelector("#titulopopup").innerHTML = "Editar Colaborador";
        novocolaborador.classList.remove("ocultarpopup");
        id = colaborador.n_pessoa_pessoa;
        f_nome.value = colaborador.s_nome_pessoa;
        f_email.value = colaborador.s_email_pessoa;
        f_tipo.value = colaborador.n_tipopessoa_tipopessoa;
        f_status.value = colaborador.c_status_pessoa;
        console.log("id do pessoa para editar: /n", id);

        //Carrega as fotos e telefones do colaborador
        let endpoint_colaborador = `${serv}/mostrarcontato/${id}`;
        fetch(endpoint_colaborador)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((response) => {
                console.log("Carregando o pessoa para editar: /n", response);
                img_foto.src = response[0].s_foto_pessoa;  //Como é um array, pego o primeiro elemento
            });

        endpoint_colaborador = `${serv}/mostrartelefones/${id}`;
        fetch(endpoint_colaborador)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((response) => {
                console.log("Carregando Lista de telefones desse pessoa: /n", response);
                telefones.innerHTML = "";
                response.forEach((telefone) => {
                    criarCxTelefone(telefone.s_numero_telefone, telefone.n_telefone_telefone);
                });
            });
    });

    //Botão Remover Contato
    img_remover.addEventListener("click", function () {
        if (confirm(`Tem certeza que deseja remover colaborador ${colaborador.s_nome_pessoa}?`)) {
            console.log("ID do colaborador a ser deletado: ", colaborador.n_pessoa_pessoa);
            const iddelete = {
                n_pessoa_pessoa: colaborador.n_pessoa_pessoa,
            }

            const endpoint_removercolaborador = `${serv}/deletecolab`;
            const options = {
                method: "POST",
                body: JSON.stringify(iddelete),
            };
            fetch(endpoint_removercolaborador, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Erro ao remover colaborador");
                    }
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Colaborador Removido com sucesso!',
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
                    //alert("Colaborador removido com sucesso!");
                    carregarColaboradores();
                })
                .catch((erro) => {
                    console.error("Erro ao remover colaborador:", erro);
                    alert("Erro ao remover colaborador!");
                });
            limpar();
            carregarColaboradores();
        }


    });
    //Botão de Status
    img_status.addEventListener("click", function () {
        if (colaborador.c_status_pessoa == "A") {
            img_status.setAttribute("src", "../../img/desligado.svg");
            colaborador.c_status_pessoa = "I";
            console.log(`Colaborador ${colaborador.n_pessoa_pessoa} Desligado`);
        } else {
            img_status.setAttribute("src", "../../img/ligado.svg");
            colaborador.c_status_pessoa = "A";
            console.log(`Colaborador ${colaborador.n_pessoa_pessoa} Ligado`);
        }
        const endpoint_status = `${serv}/editarstatus/${colaborador.n_pessoa_pessoa}/${colaborador.c_status_pessoa}`;
        fetch(endpoint_status)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao atualizar status");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Status atualizado com sucesso:", data);
                carregarColaboradores();
            })
    });
}




/**Tratamento de Eventos */

//Botão de Adicionar Contato
btn_add.addEventListener("click", function () {
    modojanela = "n";
    document.querySelector("#titulopopup").innerHTML = "Novo Colaborador";
    novocolaborador.classList.remove("ocultarpopup");
    limpar();
});


//Botão X da Janela
btn_fecharpopup.addEventListener("click", function () {
    novocolaborador.classList.add("ocultarpopup");
    limpar();
});

//Botão de Cancelar
btn_cancelar.addEventListener("click", function () {
    novocolaborador.classList.add("ocultarpopup");
    limpar();
});

//Botão de Pesquisar

btn_pesq.addEventListener("click", function () {
    pesquisa.classList.remove("ocultarpopup");
    f_pesq.value = "";
    f_pesq.focus();
});

btn_fecharpopuppesq.addEventListener("click", function () {
    pesquisa.classList.add("ocultarpopup");
    limpar();
});

btn_cancelarpesq.addEventListener("click", function () {
    pesquisa.classList.add("ocultarpopup");
    limpar();
});

f_pesqId.addEventListener("click", function (evt) {
    f_pesq.value = "";
    f_pesq.focus();
});
f_pesqNome.addEventListener("click", function (evt) {
    f_pesq.value = "";
    f_pesq.focus();
});

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
        const endpoint_pesquisa = `${serv}/pesquisarcolab/${tipo}/${f_pesq.value}`;
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
                data.forEach((colaborador) => {
                    criarlinha(colaborador);
                });
            });



        pesquisa.classList.add("ocultarpopup");
    }

});

btn_listar.addEventListener("click", function () {

    carregarColaboradores();

});


//Botão de Salvar Contato
btn_salvar.addEventListener("click", function () {

    //Validar informações
    if (f_nome.value.length < 3) {
        alert("Nome inválido");
        f_nome.focus();
        return;
    }
    if (f_tipo.value == "") {
        alert("Tipo inválido");
        f_tipo.focus();
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

    console.log("Modo Janela", modojanela);

    //Guarda Telefones da caixa
    const tels = document.querySelectorAll(".numtel");
    let datatel = null;
    let telefones = [];


    tels.forEach((tel) => {
        datatel = tel.getAttribute("data-idtel");
        console.log("ID testado: ", datatel);
        if (datatel == "undefined") {
            console.log("ID não existe, adicionando telefone: ", tel.innerHTML);
            telefones.push(tel.innerHTML);
        }
    });

    //Armazena todo o formulario na variavel dados
    const dados = {
        n_pessoa_pessoa: id,
        s_nome_pessoa: f_nome.value,
        s_email_pessoa: f_email.value,
        s_senha_pessoa: "",
        n_priacess_pessoa: 1,
        n_tipopessoa_tipopessoa: f_tipo.value,
        c_status_pessoa: f_status.value,
        numtelefones: telefones,
        s_foto_pessoa: img_foto.getAttribute("src")
    };


    //Edita Contato
    if (modojanela == "e") {

        // Enviar requisição para deletar os IDs removidos

        if (idsTelefones.length > 0) {
            idsTelefones.forEach((id) => {
                const endpoint_deletetel = `http://localhost:1880/deletetelefone/${id}`;
                fetch(endpoint_deletetel)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Erro ao deletar telefone com ID ${id}`);
                        } else {
                            console.log(`Telefone com ID ${id} deletado com sucesso`);
                            return response.json();
                        }
                    })
            });
        }

        // Enviar requisição para atualizar os dados do colaborador

        console.log("Carregando Formulario para Salvamento no BD: /n", dados);
        const endpointnovocolab = `${serv}/editarcolab`;
        const options = {
            method: "POST",
            body: JSON.stringify(dados),
        };
        fetch(endpointnovocolab, options)
            .then((response) => {
                if (response.status === 200) {
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Colaborador Atualizado com sucesso!',
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
                    //alert("Colaborador Atualizado com sucesso!");
                    limpar();
                } else {
                    alert("Erro ao atualizar o colaborador!");
                }
                return response.json();
            })




        novocolaborador.classList.add("ocultarpopup");

        //Novo Contato
    } else if (modojanela == "n") {

        console.log("Carregando Formulario para Salvamento no BD: /n", dados);
        const endpointnovocolab = `${serv}/novocolab`;
        const options = {
            method: "POST",
            body: JSON.stringify(dados),
        };
        fetch(endpointnovocolab, options)
            .then((response) => {
                if (response.status === 200) {
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Colaborador cadastrado com sucesso!',
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
                    //alert("Colaborador cadastrado com sucesso!");
                    limpar();
                } else {
                    alert("Erro ao cadastrar colaborador!");
                }
                return response.json();
            })

    }


    limpar();
    setTimeout(() => { //Não da tempo de carregar a lista antes de fechar a janela
        carregarColaboradores();
    }, 500);


});



//Insere Caixa Telefone por meio do Enter
f_telefone.addEventListener("keyup", (evt) => {
    let telefone = f_telefone.value.replace(/[^0-9]/g, '');
    if (telefone.length > 10) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    if (telefone.length > 15) {
        telefone = telefone.substring(0, 15);
    }
    f_telefone.value = telefone;

    if (evt.key == "Enter") {
        if (f_telefone.value.length < 14) {
            alert("Telefone inválido");
            f_telefone.focus();
            return;
        } else {
            criarCxTelefone(f_telefone.value);
            f_telefone.value = "";
            f_telefone.focus();
        }

    }
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
carregarColaboradores();

//Carrega o Tipo Colaborador e bota no Select
const endpoint_tipocolab = `${serv}/tipocolab`;
fetch(endpoint_tipocolab)
    .then((response) => {
        if (!response.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Carregando Tipo Colaborador: /n", data);
        const f_tipo = document.querySelector("#f_tipo");
        f_tipo.innerHTML = "";
        const option = document.createElement("option");
        option.setAttribute("disabled", "true");
        option.setAttribute("selected", "true");
        option.setAttribute("value", "");
        option.textContent = "Selecione";
        f_tipo.appendChild(option);
        f_tipo.setAttribute("required", "true");
        data.forEach((tipo) => {
            const option = document.createElement("option");
            option.value = tipo.n_tipopessoa_tipopessoa;
            option.textContent = tipo.s_desc_tipopessoa;
            f_tipo.appendChild(option);
        });
    });