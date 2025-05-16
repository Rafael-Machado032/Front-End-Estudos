import { Cxmsg } from "../../utils/cxmsg.js";

const dadosgrid = document.querySelector("#dadosgrid");
const novofornecedor = document.querySelector("#novofornecedor");
const img_foto = document.querySelector("#img_foto");

const pesquisa = document.querySelector("#pesquisa");

const btn_add = document.querySelector("#btn_add");
const btn_fecharpopup = document.querySelector("#btn_fecharpopup");
const btn_cancelar = document.querySelector("#btn_cancelar");
const btn_salvar = document.querySelector("#btn_salvar");
const btn_delete = document.querySelector("#btn_delete");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_pesq = document.querySelector("#btn_pesq");
const btn_fecharpopuppesq = document.querySelector("#btn_fecharpopuppesq");
const btn_cancelarpesq = document.querySelector("#btn_cancelarpesq");
const btn_listar = document.querySelector("#btn_listar");

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

let id = 0; // ID do fornecedor a ser editado
const serv = sessionStorage.getItem("servidor_nodered");

/**Funções */

//Função Carregar a lista

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



//Limpar Inputs
const limpar = () => {
    f_nome.value = "";
    
    f_status.selectedIndex = 0;
    
    
    f_nome.focus();
    img_foto.setAttribute("src", "../../img/defaut.svg");
    f_foto.value = ""; // Limpa o input de foto
    
    modojanela = "n"; // Reseta o modo da janela
}

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

    //Tratamento de evento

    //Botão Editar Contato

    img_editar.addEventListener("click", function () {
        modojanela = "e";
        document.querySelector("#titulopopup").innerHTML = "Editar fornecedor";
        novofornecedor.classList.remove("ocultarpopup");
        id = fornecedor.n_fornecedor_fornecedor;
        f_nome.value = fornecedor.s_nome_fornecedor;
        
        f_status.value = fornecedor.c_status_fornecedor;
        console.log("id do fornecedor para editar: /n", id);

        
        let endpoint_fornecedor = `${serv}/mostrarcontato/${id}`;
        fetch(endpoint_fornecedor)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return response.json();
            })
            .then((response) => {
                console.log("Carregando o fornecedor para editar: /n", response);
                img_foto.src = response[0].s_foto_fornecedor;  //Como é um array, pego o primeiro elemento
            });

       
    });

    //Botão Remover Contato
    img_remover.addEventListener("click", function () {
        if (confirm(`Tem certeza que deseja remover fornecedor ${fornecedor.s_nome_fornecedor}?`)) {
            console.log("ID do fornecedor a ser deletado: ", fornecedor.n_fornecedor_fornecedor);
            const iddelete = {
                n_fornecedor_fornecedor: fornecedor.n_fornecedor_fornecedor,
            }

            const endpoint_removerfornecedor = `${serv}/deletecolab`;
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
                        texto: 'fornecedor Removido com sucesso!',
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
        const endpoint_status = `${serv}/editarstatus/${fornecedor.n_fornecedor_fornecedor}/${fornecedor.c_status_fornecedor}`;
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
}

/**Tratamento de Eventos */

//Botão de Adicionar Contato
btn_add.addEventListener("click", function () {
    modojanela = "n";
    document.querySelector("#titulopopup").innerHTML = "Novo fornecedor";
    novofornecedor.classList.remove("ocultarpopup");
    limpar();
});


//Botão X da Janela
btn_fecharpopup.addEventListener("click", function () {
    novofornecedor.classList.add("ocultarpopup");
    limpar();
});

//Botão de Cancelar
btn_cancelar.addEventListener("click", function () {
    novofornecedor.classList.add("ocultarpopup");
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
                data.forEach((fornecedor) => {
                    criarlinha(fornecedor);
                });
            });



        pesquisa.classList.add("ocultarpopup");
    }

});

btn_listar.addEventListener("click", function () {

    carregarFornecedores();

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

    console.log("Modo Janela", modojanela);

    
    
    });



    //Edita Contato
    if (modojanela == "e") {


        //Armazena todo o formulario na variavel dados
        const dados = {
            n_fornecedor_fornecedor: id,
            s_nome_fornecedor: f_nome.value,
            
            c_status_fornecedor: f_status.value,
           
            s_foto_fornecedor: img_foto.getAttribute("src")
        };

        // Enviar requisição para deletar os IDs removidos

        

        // Enviar requisição para atualizar os dados do fornecedor

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
                        texto: 'fornecedor Atualizado com sucesso!',
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




        novofornecedor.classList.add("ocultarpopup");

        //Novo Contato
    } else if (modojanela == "n") {


        //Armazena todo o formulario na variavel dados
        const dados = {
            s_nome_fornecedor: f_nome.value,
            
            c_status_fornecedor: f_status.value,
            
            s_foto_fornecedor: img_foto.getAttribute("src")
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
                        texto: 'fornecedor cadastrado com sucesso!',
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

//Carrega o Tipo fornecedor e bota no Select
// const endpoint_tipocolab = `${serv}/tipocolab`;
// fetch(endpoint_tipocolab)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("A resposta da rede não foi bem-sucedida");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Carregando Tipo fornecedor: /n", data);
//         const f_tipo = document.querySelector("#f_tipo");
//         f_tipo.innerHTML = "";
//         const option = document.createElement("option");
//         option.setAttribute("disabled", "true");
//         option.setAttribute("selected", "true");
//         option.setAttribute("value", "");
//         option.textContent = "Selecione";
//         f_tipo.appendChild(option);
//         f_tipo.setAttribute("required", "true");
//         data.forEach((tipo) => {
//             const option = document.createElement("option");
//             option.value = tipo.n_nivel_tipofornecedor;
//             option.textContent = tipo.s_desc_tipofornecedor;
//             f_tipo.appendChild(option);
//         });
//     });