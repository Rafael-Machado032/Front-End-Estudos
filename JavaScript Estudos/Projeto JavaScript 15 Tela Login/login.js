class Login{

    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = "https://ea5e330f-3e67-46f7-96a3-4e29209807d2-00-1rhphb7s2ac4p.riker.replit.dev/"
    
    static login = (mat,pas) =>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint)
        .then(res => res.json())
        .then(res => {
            if (res) {
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                console.log(res);
            }else{
                console.log("Usuário não encontrado");
            }
            
        })
    }
}
export {Login}