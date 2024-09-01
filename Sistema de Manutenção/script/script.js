import Rebot from "../layout/rebot.js";
import { Config } from "../layout/config.js";


Rebot.layoutrebot();
Config.layoutconfig();

const op1 = document.getElementById("op1")
const op2 = document.getElementById("op2")

op2.addEventListener("click", ()=>{
    console.log("click", () =>{
        Config.selecionado();
    });
    
})
''