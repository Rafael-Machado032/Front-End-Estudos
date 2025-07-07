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
const novoproduto = document.querySelector("#novoproduto");
const pesquisa = document.querySelector("#pesquisa");
const moveEstoque = document.querySelector("#moveEstoque");

const btn_add = document.querySelector("#btn_add");
const btn_fecharpopup = document.querySelector("#btn_fecharpopup");
const btn_fecharxpopupmove = document.querySelector("#btn_fecharxpopupmove");
const btn_listar = document.querySelector("#btn_listar");
const btn_salvar = document.querySelector("#btn_salvar");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_pesq = document.querySelector("#btn_pesq");
const btn_fecharpopuppesq = document.querySelector("#btn_fecharpopuppesq");
const btn_cancelar = document.querySelector("#btn_cancelar");
const btn_cancelarpesq = document.querySelector("#btn_cancelarpesq");
const btn_cancelarmove = document.querySelector("#btn_cancelarmove");
const btn_addqtde = document.querySelector("#btn_addqtde");
const btn_removeqtde = document.querySelector("#btn_removeqtde");
const btn_salvarmove = document.querySelector("#btn_salvarmove");

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
const f_codprodmove = document.querySelector("#f_codprodmove");
const f_descprodmove = document.querySelector("#f_descprodmove");
const f_qtdeprodmove = document.querySelector("#f_qtdeprodmove");
const f_qtderesprodmove = document.querySelector("#f_qtderesprodmove");

/**Variaveis Globais */

//n = Novo colaboraodr | e = Editar Produto
let modojanela = "n";
let id = 0; // ID do Produto a ser editado


/**Funções */

//Função Carregar a lista

const carregarProdutos = () => {
    const endpoint_todosprodutos = `${serv}/todosprodutos`;
    fetch(endpoint_todosprodutos)
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
    f_codprod.disabled = false;
}

const criarlinha = (produto) => {
    const linhagrid = document.createElement("div");
    linhagrid.classList.add("linhagrid");
    dadosgrid.appendChild(linhagrid);

    const c1 = document.createElement("div");
    c1.classList.add("c1");
    c1.classList.add("colunalinhagrid");
    c1.innerHTML = produto.n_cod_produto;
    linhagrid.appendChild(c1);

    const c2 = document.createElement("div");
    c2.classList.add("c2");
    c2.classList.add("colunalinhagrid");
    c2.innerHTML = produto.s_desc_produto;
    linhagrid.appendChild(c2);

    const c3 = document.createElement("div");
    c3.classList.add("c3");
    c3.classList.add("colunalinhagrid");
    c3.innerHTML = produto.n_qtde_produto;
    linhagrid.appendChild(c3);

    const c4 = document.createElement("div");
    c4.classList.add("c4");
    c4.classList.add("colunalinhagrid");
    c4.innerHTML = produto.c_status_produto;
    linhagrid.appendChild(c4);

    const c5 = document.createElement("div");
    c5.classList.add("c5");
    c5.classList.add("colunalinhagrid");
    linhagrid.appendChild(c5);

    //Botão de Ligado/Desligado Selecionar o Status
    const img_status = document.createElement("img");
    img_status.classList.add("icone_op");
    if (produto.c_status_produto == "A") {
        img_status.setAttribute("src", "../../img/ligado.svg");
    }
    if (produto.c_status_produto == "I") {
        img_status.setAttribute("src", "../../img/desligado.svg");
    }
    c5.appendChild(img_status);

    //Botão de Lapis Editar Contato

    const img_editar = document.createElement("img");
    img_editar.classList.add("icone_op");
    img_editar.setAttribute("src", "../../img/edit.svg");
    c5.appendChild(img_editar);

    //Botão de Lixeira Remover Contato
    const img_mover = document.createElement("img");
    img_mover.classList.add("icone_op");
    img_mover.setAttribute("src", "../../img/moveb.svg");
    c5.appendChild(img_mover);

    //Tratamento de evento

    //Botão Editar Contato

    img_editar.addEventListener("click", function () {
        modojanela = "e";
        document.querySelector("#titulopopup").innerHTML = "Editar Produto";
        novoproduto.classList.remove("ocultarpopup");
        f_codprod.disabled = true;
        id = produto.n_cod_produto; //Armazena o ID do Produto para editar
        f_codprod.value = produto.n_cod_produto;
        f_tipoprod.value = produto.n_tipoproduto_tipoproduto;
        f_descprod.value = produto.s_desc_produto;
        f_forneprod.value = produto.n_fornecedor_fornecedor;
        f_qtdeprod.value = produto.n_qtde_produto;
        f_statusprod.value = produto.c_status_produto;
        console.log("id do pessoa para editar: /n", id);
    });

    //Botão Remover Contato
    img_mover.addEventListener("click", function () {

        if (produto.c_status_produto == "A") {
            moveEstoque.classList.remove("ocultarpopup");
            
            f_codprodmove.value = produto.n_cod_produto;
            f_descprodmove.value = produto.s_desc_produto;
            f_qtdeprodmove.value = produto.n_qtde_produto;
        } else {
            const config = {
                titulo: 'Atenção',
                texto: 'Produto Desligado, não é possivel mover',
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

        }

    });
    //Botão de Status
    img_status.addEventListener("click", function () {
        if (produto.c_status_produto == "A") {
            img_status.setAttribute("src", "../../img/desligado.svg");
            produto.c_status_produto = "I";
            console.log(`Produto ${produto.n_cod_produto} Desligado`);
        } else {
            img_status.setAttribute("src", "../../img/ligado.svg");
            produto.c_status_produto = "A";
            console.log(`Produto ${produto.n_cod_produto} Ligado`);
        }
        const endpoint_status = `${serv}/editarstatusproduto/${produto.n_cod_produto}/${produto.c_status_produto}`;
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

btn_fecharxpopupmove.addEventListener("click", function () {
    moveEstoque.classList.add("ocultarpopup");
    limpar();
});

//Botão de Cancelar
btn_cancelar.addEventListener("click", function () {
    novoproduto.classList.add("ocultarpopup");
    limpar();
});

btn_cancelarmove.addEventListener("click", function () {
    moveEstoque.classList.add("ocultarpopup");
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
        const endpoint_pesquisa = `${serv}/pesquisarproduto/${tipo}/${f_pesq.value}`;
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
        alert("Codigo inválido");
        f_codprod.focus();
        return;
    }
    if (f_descprod.value.length < 4) {
        alert("Descrição inválido");
        f_descprod.focus();
        return;
    }
    if (f_tipoprod.value == "") {
        alert("Nescessario informar o Tipo de Produto");
        f_tipoprod.focus();
        return;
    }
    if (f_forneprod.value == "") {
        alert("Nescessario informar o Fornecedor");
        f_forneprod.focus();
        return;
    }
    if (f_statusprod.value == "") {
        alert("Status inválido");
        f_statusprod.focus();
        return;
    }


    console.log("Modo Janela", modojanela);

    //Armazena todo o formulario na variavel dados
    const dados = {
        n_cod_produto: f_codprod.value,
        n_tipoproduto_tipoproduto: f_tipoprod.value,
        s_desc_produto: f_descprod.value,
        n_fornecedor_fornecedor: f_forneprod.value,
        n_qtde_produto: f_qtdeprod.value,
        c_status_produto: f_statusprod.value
    };



    //Edita Contato
    if (modojanela == "e") {

        // Enviar requisição para atualizar os dados do Produto

        console.log("Carregando Formulario para Salvamento no BD: /n", dados);
        const endpointeditarproduto = `${serv}/editarproduto`;
        const options = {
            method: "POST",
            body: JSON.stringify(dados),
        };
        fetch(endpointeditarproduto, options)
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


        console.log("Carregando Formulario para Salvamento no BD: /n", dados);
        const endpointnovoproduto = `${serv}/novoproduto`;
        const options = {
            method: "POST",
            body: JSON.stringify(dados),
        };
        fetch(endpointnovoproduto, options)
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

btn_addqtde.addEventListener("click", function () {
    let qtdeAtual = parseInt(f_qtdeprodmove.value);
    let qtde = parseInt(f_qtderesprodmove.value);
    
    if (qtde == 0) {
        const config = {
            titulo: 'Atenção',
            texto: 'Quantidade inválida, digite um valor maior que 0',
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
        
        f_qtderesprodmove.focus();
        return;
    }
    f_qtdeprodmove.value = qtdeAtual + qtde; // Atualiza a quantidade restante
    f_qtderesprodmove.value = 0; // Reseta a quantidade a ser removida
});

btn_removeqtde.addEventListener("click", function () {7
    let qtdeAtual = parseInt(f_qtdeprodmove.value);
    let qtde = parseInt(f_qtderesprodmove.value);
    if (qtde == 0) {
        const config = {
            titulo: 'Atenção',
            texto: 'Quantidade inválida, digite um valor maior que 0',
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
        f_qtdeprodmove.focus();
        return;
    }
    
    if (qtde > qtdeAtual) {
        const config = {
            titulo: 'Atenção',
            texto: 'Quantidade a remover é maior que a quantidade restante',
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
        f_qtderesprodmove.focus();
        return;
    }
    f_qtdeprodmove.value = qtdeAtual - qtde; // Atualiza a quantidade restante
    f_qtderesprodmove.value = 0; // Reseta a quantidade a ser removida
    f_qtderesprodmove.focus();
});

btn_salvarmove.addEventListener("click", function () {
    const qtdeAtual = parseInt(f_qtdeprodmove.value);
    
    const endpoint_editarqtde = `${serv}/editarqtdeproduto/${f_codprodmove.value}/${qtdeAtual}`;
    fetch(endpoint_editarqtde)
        .then((response) => {
            if (!response.ok) {
                throw new Error("A resposta da rede não foi bem-sucedida");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Quantidade atualizada com sucesso:", data);
            const config = {
                titulo: 'Aviso',
                texto: 'Quantidade atualizada com sucesso!',
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
            moveEstoque.classList.add("ocultarpopup");
            carregarProdutos();
        })
        .catch((erro) => {
            console.error("Erro ao atualizar quantidade:", erro);
            const config = {
                titulo: 'Erro',
                texto: 'Erro ao atualizar quantidade, tente novamente mais tarde.',
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
        }
    );
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

//Carrega o Tipo Produto e bota no Select
const endpoint_fornecedorprod = `${serv}/fornecedorprod`;
fetch(endpoint_fornecedorprod)
    .then((response) => {
        if (!response.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Carregando Fornecedor Produto: /n", data);
        f_forneprod.innerHTML = "";
        const option = document.createElement("option");
        option.setAttribute("disabled", "true");
        option.setAttribute("selected", "true");
        option.setAttribute("value", "");
        option.textContent = "Selecione";
        f_forneprod.appendChild(option);
        f_forneprod.setAttribute("required", "true");
        data.forEach((data) => {
            const option = document.createElement("option");
            option.value = data.n_fornecedor_fornecedor;
            option.textContent = data.s_desc_fornecedor;
            f_forneprod.appendChild(option);
        });
    });