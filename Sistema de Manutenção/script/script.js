import Rebot from "../layout/rebot.js";
import { Config } from "../layout/config.js";
import { AddJanela } from "../script/addjanela.js";

Rebot.button_rebot();
Rebot.janela_rebot();
Config.button_config();

//
const menu1 = document.getElementById("reiniciar");
const menu2 = document.getElementById("configuracao");
menu1.classList.add("selecionado");


const ocultar = () => {
    const excluircont = document.getElementById("container_dir_painel");
    excluircont.remove();
    menu1.classList.remove("selecionado");
    menu2.classList.remove("selecionado");
}


menu1.addEventListener("click", () => {
    ocultar();
    Rebot.janela_rebot();
    menu1.classList.add("selecionado");
})


menu2.addEventListener("click", () => {
    ocultar();
    Config.painel_config();
    menu2.classList.add("selecionado");
})

const bnovo_dispositivo1 = document.getElementById("bnovo_dispositivo");

bnovo_dispositivo1.addEventListener("click", () => {
    AddJanela.addjanela();
})