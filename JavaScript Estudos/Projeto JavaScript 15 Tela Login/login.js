class Login {

    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static endpoint = "https://ea5e330f-3e67-46f7-96a3-4e29209807d2-00-1rhphb7s2ac4p.riker.replit.dev/"

    static login = (mat, pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`;
        this.estilocss =
            " * { border: none; padding: 0px; margin: 0px; box- sizing: border - box; }"+
            ".fundologin{ display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box; }" +
            ".baselogin{ display: flex; justify-content: center; align-items: stretch;width: 50%; box-sizing: inherit; }" +
            ".elementoslogin{ display: flex;justify-content: center;align-items: flex-start; flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit; }" +
            ".logologin{ display: flex; justify-content: center; align-items: center; width: 50%;background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit; }" +
            ".logologin img{ width: 40%; box-sizing: inherit;}" +
            ".campologin{ display: flex; justify-content: flex-start;align-items: flex-start;flex-direction: column; box-sizing: inherit; margin-bottom: 10px; }" +
            ".campologin label{ font-size: 18px; }"+
            ".campologin input{ font-size: 18px; padding: 5px;background-color: #fff;border-radius: 5px;}" +
            ".botoeslogin{ display: flex;justify-content: space-around; align-items: center; width: 100%;box-sizing: inherit; }" +
            ".botoeslogin button{ cursor: pointer; background-color: #048;color: #fff; border-radius: 5px; padding: 10px; width: 100px; box-sizing: inherit; }"
        
            const styleestilo = document.createElement("style");
            styleestilo.setAttribute("id","id_estilologin");
            styleestilo.setAttribute("rel","stylesheet");
            styleestilo.setAttribute("type","text/css");
            styleestilo.innerHTML = this.estilocss;
            document.head.appendChild(styleestilo);
           
        //     fetch(this.endpoint)
        //     .then(res => res.json())
        //     .then(res => {
        //         if (res) {
        //             this.logado = true;
        //             this.matlogado = mat;
        //             this.nomelogado = res.nome;
        //             this.acessologado = res.acesso;
        //             console.log(res);
        //         }else{
        //             console.log("Usuário não encontrado");
        //         }

        //     })
        // }
    }
}
export { Login }