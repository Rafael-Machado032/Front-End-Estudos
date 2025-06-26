const f_email = document.getElementById("f_email");
const f_senha = document.getElementById("f_senha");
const btn_login = document.getElementById("btn_login");

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
    }else {
        const email = f_email.value;
        const senha = f_senha.value;

        if (!email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = `${serv}/login/${email}/${senha}`;
            fetch(response)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Erro ao fazer login: " + res.statusText);
                    }
                })
                .then((data) => {
                    if (data.status === "success") {
                        console.log("Login bem-sucedido!", data);
                        
                    } else {
                        alert("Usuário ou senha incorretos!");
                    }
                })
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
        }
    }
    
});