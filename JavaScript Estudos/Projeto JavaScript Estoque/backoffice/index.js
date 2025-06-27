import { Cxmsg } from "../utils/cxmsg.js";

const primeroacesso = document.getElementById("primeroacesso");

const f_email = document.getElementById("f_email");
const f_senha = document.getElementById("f_senha");
const f_novoemail = document.getElementById("f_novoemail");
const f_novasenha = document.getElementById("f_novasenha");
const f_confirmasenha = document.getElementById("f_confirmasenha");

const btn_login = document.getElementById("btn_login");
const btn_aceitartermos = document.getElementById("btn_aceitartermos");
const btn_cancelartermos = document.getElementById("btn_cancelartermos");




let serv = null;

const endpoint_config = '../config.json';
fetch(endpoint_config)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
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


        const response = `${serv}/login/${email}/${senha}`;
        fetch(response)
            .then(res => {
                if (res.status === 200) {
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
                    window.location.href = "./main.html";

                } else if (res.status === 208) {
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
                    
                } else if (res.status === 205) {
                    
                    primeroacesso.classList.remove("ocultarpopup");
                    f_novoemail.value = email;
                }
                
            });
    }

});



btn_aceitartermos.addEventListener("click", () => {

});

btn_cancelartermos.addEventListener("click", () => {
    primeroacesso.classList.add("ocultarpopup");
    f_email.value = "";
    f_senha.value = "";
    f_novoemail.value = "";
    f_novasenha.value = "";
    f_confirmasenha.value = "";
});