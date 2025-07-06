import { Cxmsg } from "../utils/cxmsg.js";

const primeroacesso = document.getElementById("primeroacesso");
const f_idusuario = document.getElementById("f_idusuario");

const f_email = document.getElementById("f_email");
const f_senha = document.getElementById("f_senha");
const f_novoemail = document.getElementById("f_novoemail");
const f_novasenha = document.getElementById("f_novasenha");
const f_confirmarsenha = document.getElementById("f_confirmarsenha");

const btn_login = document.getElementById("btn_login");
const btn_aceitartermos = document.getElementById("btn_aceitartermos");
const btn_cancelartermos = document.getElementById("btn_cancelartermos");




let serv = null;

const endpoint_config = '../config.json';
fetch(endpoint_config)
    .then((response) => {
        if (!response.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return response.json();
    })
    .then((data) => {
        sessionStorage.setItem('servidor_nodered', data.servidor_nodered);
        sessionStorage.setItem('versao', data.versao);
        serv = data.servidor_nodered;
    })




btn_login.addEventListener("click", () => {

    if (serv == null && serv === "undefined") {
        alert("Servidor não configurado. Por favor, aguarde a configuração.");
        return;
    } else {

        const email = f_email.value;
        let senha = f_senha.value;

        if (senha === "") {
            senha = -1; // Senha padrão para primeiro acesso
        }


        const endpoint_login = `${serv}/login/${email}/${senha}`;
        fetch(endpoint_login)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error("A resposta da rede não foi bem-sucedida");
                }
                return resposta.json();
            })
            .then((data) => {
                console.log(data);

                if (data.retorno === 200) {
                    const config = {
                        titulo: 'Aviso',
                        texto: 'Login realizado com sucesso!',
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
                    sessionStorage.setItem('id_usuario', data.n_pessoa_pessoa);
                    sessionStorage.setItem('nome_usuario', data.s_nome_pessoa);
                    sessionStorage.setItem('id_token', data.insertId);
                    sessionStorage.setItem('token', data.token);
                    window.location.href = "./main.html";

                } else if (data[0].retorno === 208) {
                    const config = {
                        titulo: 'Erro',
                        texto: 'Senha incorreta!',
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

                } else if (data[0].retorno === 205) {

                    primeroacesso.classList.remove("ocultarpopup");
                    f_novoemail.value = email;
                    f_idusuario.value = data[0].n_pessoa_pessoa; // Armazenando o ID do usuário para uso posterior
                    console.log(`ID do usuário: ${f_idusuario.value}`);

                } else if (data[0].retorno === 210) {
                    const config = {
                        titulo: 'Erro',
                        texto: 'Email não encontrado!',
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
    }
});



btn_aceitartermos.addEventListener("click", () => {
    const email = f_novoemail.value;
    const senha = f_novasenha.value;
    const confirmasenha = f_confirmarsenha.value;

    console.log(`Email: ${email}, Senha: ${senha}, Confirmar Senha: ${confirmasenha}`);


    if (senha != confirmasenha) {
        alert("As senhas não coincidem.");
        return;
    }

    const endpoint_criarsenha = `${serv}/criarsenha/${email}/${senha}`;
    fetch(endpoint_criarsenha)
        .then(res => {
            if (res.status === 200) {
                const config = {
                    titulo: 'Sucesso',
                    texto: 'Senha criada com sucesso!',
                    cor: 'green',
                    tipo: 'ok',
                    ok: function () {
                        console.log("OK");
                    }
                }
                Cxmsg.mostrar(config);
                primeroacesso.classList.add("ocultarpopup");
            } else {
                const config = {
                    titulo: 'Erro',
                    texto: 'Erro ao criar senha.',
                    cor: '#f00',
                    tipo: 'ok',
                    ok: function () {
                        console.log("OK");
                    }
                }
                Cxmsg.mostrar(config);
            }
        });
});

btn_cancelartermos.addEventListener("click", () => {
    primeroacesso.classList.add("ocultarpopup");
    f_email.value = "";
    f_senha.value = "";
    f_novoemail.value = "";
    f_novasenha.value = "";
    f_confirmarsenha.value = "";
});

f_senha.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('btn_login').click();
    }
});

f_email.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('btn_login').click();
    }
});
