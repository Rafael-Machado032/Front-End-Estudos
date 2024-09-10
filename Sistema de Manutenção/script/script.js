import Rebot from "../layout/rebot.js";
import { Config } from "../layout/config.js";


Rebot.button_rebot();
Rebot.janela_rebot();
Config.button_config();
//

const ocultar = () =>{
    const selecionar = document.getElementById("container_dir_painel");
    selecionar.remove();
}
const menu1 = document.getElementById("reiniciar");

menu1.addEventListener("click", () => {
    ocultar();
    Rebot.janela_rebot();
})

const menu2 = document.getElementById("configuracao");

menu2.addEventListener("click", () => {
    ocultar();
    Config.painel_config();
})