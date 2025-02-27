import { Login } from "./login.js";
import { Cxmsg } from "../Projeto JavaScript 13 caixa de mensagem Personallizado com dois botoes/cxmsg.js";

const callback_ok = () => {
    alert("Login efetuado com sucesso!");
}

const callback_nook = () => {
    
    const config= {
        cor:"#800",
        tipo: "ok",
        texto:null,
        comando_sn: null
    }

    Cxmsg.mostrar(config,"Erro","Login não efetuado! Usuario ou senha incorreto.")
}

Login.login(callback_ok,callback_nook);