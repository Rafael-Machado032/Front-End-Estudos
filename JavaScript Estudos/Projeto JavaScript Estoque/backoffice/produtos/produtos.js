import { Cxmsg } from "../../utils/cxmsg.js";

const dadosgrid = document.querySelector("#dadosgrid");
const novoproduto = document.querySelector("#novoproduto");
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

const f_codprod = document.querySelector("#f_codprod");
const f_descprod = document.querySelector("#f_descprod");
const f_qtdeprod = document.querySelector("#f_qtdeprod");
const f_tipoprod = document.querySelector("#f_tipoprod");
const f_statusprod = document.querySelector("#f_statusprod");
const f_forneprod = document.querySelector("#f_forneprod");
const f_filtro = document.querySelector("#f_filtro");
const f_pesqId = document.querySelector("#f_pesqId");
const f_pesqNome = document.querySelector("#f_pesqNome");
const f_pesq = document.querySelector("#f_pesq");


/**Variaveis Globais */

//n = Novo colaboraodr | e = Editar Produto
let modojanela = "n";
let idsTelefones = [];
let id = 0; // ID do Produto a ser editado
const serv = sessionStorage.getItem("servidor_nodered");

/**Funções */

//Função Carregar a lista

const carregarProdutos = () => {
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
            data.forEach((produto) => {
                criarlinha(produto);
            });
        })
        .catch((erro) => {
            console.error("Erro ao carregar Produtos:", erro);
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
    f_codprod.value = "";
    f_descprod.value = "";
    f_qtdeprod.value = "1";
    f_tipoprod.selectedIndex = 0;
    f_statusprod.selectedIndex = 0;
    f_forneprod.selectedIndex = 0;
    f_codprod.focus();
    modojanela = "n"; // Reseta o modo da janela
}

const criarlinha = (produto) => {
    const linhagrid = document.createElement("div");
    linhagrid.classList.add("linhagrid");
    dadosgrid.appendChild(linhagrid);

    const c1 = document.createElement("div");
    c1.classList.add("c1");
    c1.classList.add("colunalinhagrid");
    c1.innerHTML = produto.n_pessoa_pessoa;
    linhagrid.appendChild(c1);

    const c2 = document.createElement("div");
    c2.classList.add("c2");
    c2.classList.add("colunalinhagrid");
    c2.innerHTML = produto.s_nome_pessoa;
    linhagrid.appendChild(c2);

    const c3 = document.createElement("div");
    c3.classList.add("c3");
    c3.classList.add("colunalinhagrid");
    c3.innerHTML = produto.n_tipopessoa_tipopessoa;
    linhagrid.appendChild(c3);

    const c4 = document.createElement("div");
    c4.classList.add("c4");
    c4.classList.add("colunalinhagrid");
    c4.innerHTML = produto.c_status_pessoa;
    linhagrid.appendChild(c4);

    const c5 = document.createElement("div");
    c5.classList.add("c5");
    c5.classList.add("colunalinhagrid");
    linhagrid.appendChild(c5);

    //Botão de Ligado/Desligado Selecionar o Status
    const img_status = document.createElement("img");
    img_status.classList.add("icone_op");
    if (produto.c_status_pessoa == "A") {
        img_status.setAttribute("src", "../../img/ligado.svg");
    }
    if (produto.c_status_pessoa == "I") {
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
        document.querySelector("#titulopopup").innerHTML = "Editar Produto";
        novoproduto.classList.remove("ocultarpopup");
        id = produto.n_pessoa_pessoa;
        f_codprod.value = produto.s_nome_pessoa;
        f_tipoprod.value = produto.n_tipopessoa_tipopessoa;
        f_statusprod.value = produto.c_status_pessoa;
        console.log("id do pessoa para editar: /n", id);

        //Carrega as fotos e telefones do Produto
        let endpoint_Produto = `${serv}/mostrarcontato/${id}`;
        fetch(endpoint_Produto)
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

        endpoint_Produto = `${serv}/mostrartelefones/${id}`;
        fetch(endpoint_Produto)
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
        if (confirm(`Tem certeza que deseja remover Produto ${produto.s_nome_pessoa}?`)) {
            console.log("ID do Produto a ser deletado: ", produto.n_pessoa_pessoa);
            const iddelete = {
                n_pessoa_pessoa: produto.n_pessoa_pessoa,
            }

            const endpoint_removerProduto = `${serv}/deletecolab`;
            const options = {
                method: "POST",
                body: JSON.stringify(iddelete),
            };
            fetch(endpoint_removerProduto, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Erro ao remover Produto");
                    }
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Produto Removido com sucesso!',
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
                    //alert("Produto removido com sucesso!");
                    carregarProdutos();
                })
                .catch((erro) => {
                    console.error("Erro ao remover Produto:", erro);
                    alert("Erro ao remover Produto!");
                });
            limpar();
            carregarProdutos();
        }


    });
    //Botão de Status
    img_status.addEventListener("click", function () {
        if (produto.c_status_pessoa == "A") {
            img_status.setAttribute("src", "../../img/desligado.svg");
            produto.c_status_pessoa = "I";
            console.log(`Produto ${produto.n_pessoa_pessoa} Desligado`);
        } else {
            img_status.setAttribute("src", "../../img/ligado.svg");
            produto.c_status_pessoa = "A";
            console.log(`Produto ${produto.n_pessoa_pessoa} Ligado`);
        }
        const endpoint_status = `${serv}/editarstatus/${produto.n_pessoa_pessoa}/${produto.c_status_pessoa}`;
        fetch(endpoint_status)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao atualizar status");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Status atualizado com sucesso:", data);
                carregarProdutos();
            })
    });
}




/**Tratamento de Eventos */

//Botão de Adicionar Contato
btn_add.addEventListener("click", function () {
    modojanela = "n";
    document.querySelector("#titulopopup").innerHTML = "Novo produto";
    novoproduto.classList.remove("ocultarpopup");
    limpar();
});


//Botão X da Janela
btn_fecharpopup.addEventListener("click", function () {
    novoproduto.classList.add("ocultarpopup");
    limpar();
});

//Botão de Cancelar
btn_cancelar.addEventListener("click", function () {
    novoproduto.classList.add("ocultarpopup");
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
                data.forEach((produto) => {
                    criarlinha(produto);
                });
            });



        pesquisa.classList.add("ocultarpopup");
    }

});

btn_listar.addEventListener("click", function () {

    carregarProdutos();

});


//Botão de Salvar Contato
btn_salvar.addEventListener("click", function () {

    //Validar informações
    if (f_codprod.value.length < 3) {
        alert("Nome inválido");
        f_codprod.focus();
        return;
    }
    if (f_tipoprod.value == "") {
        alert("Tipo inválido");
        f_tipoprod.focus();
        return;
    }
    if (f_statusprod.value == "") {
        alert("Status inválido");
        f_statusprod.focus();
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



    //Edita Contato
    if (modojanela == "e") {


        //Armazena todo o formulario na variavel dados
        const dados = {
            n_pessoa_pessoa: id,
            s_nome_pessoa: f_codprod.value,
            n_tipopessoa_tipopessoa: f_tipoprod.value,
            c_status_pessoa: f_statusprod.value,
            numtelefones: telefones,
            s_foto_pessoa: img_foto.getAttribute("src")
        };

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

        // Enviar requisição para atualizar os dados do Produto

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
                        texto: 'Produto Atualizado com sucesso!',
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
                    //alert("Produto Atualizado com sucesso!");
                    limpar();
                } else {
                    alert("Erro ao atualizar o Produto!");
                }
                return response.json();
            })




        novoproduto.classList.add("ocultarpopup");

        //Novo Contato
    } else if (modojanela == "n") {


        //Armazena todo o formulario na variavel dados
        const dados = {
            s_nome_pessoa: f_codprod.value,
            n_tipopessoa_tipopessoa: f_tipoprod.value,
            c_status_pessoa: f_statusprod.value,
            numtelefones: telefones,
            s_foto_pessoa: img_foto.getAttribute("src")
        };

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
                        texto: 'Produto cadastrado com sucesso!',
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
                    //alert("Produto cadastrado com sucesso!");
                    limpar();
                } else {
                    alert("Erro ao cadastrar Produto!");
                }
                return response.json();
            })

    }


    limpar();
    setTimeout(() => { //Não da tempo de carregar a lista antes de fechar a janela
        carregarProdutos();
    }, 500);
    

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
carregarProdutos();

//Carrega o Tipo Produto e bota no Select
const endpoint_tipoprod = `${serv}/tipoprod`;
fetch(endpoint_tipoprod)
    .then((response) => {
        if (!response.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Carregando Tipo Produto: /n", data);
        const f_tipoprod = document.querySelector("#f_tipoprod");
        f_tipoprod.innerHTML = "";
        const option = document.createElement("option");
        option.setAttribute("disabled", "true");
        option.setAttribute("selected", "true");
        option.setAttribute("value", "");
        option.textContent = "Selecione";
        f_tipoprod.appendChild(option);
        f_tipoprod.setAttribute("required", "true");
        data.forEach((data) => {
            const option = document.createElement("option");
            option.value = data.n_tipoproduto_tipoproduto;
            option.textContent = data.s_desc_tipoproduto;
            f_tipoprod.appendChild(option);
        });
    });