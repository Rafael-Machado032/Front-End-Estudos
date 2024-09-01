class Config {
    
    static estilo = null;

    static layoutconfig = () => {
        console.log("layoutconfig inicio");
        

        const divmenu = document.getElementById("container_menu"); //Para iserir div criada selecionado por class não funciona

        const op = document.createElement("div");
        op.setAttribute("class","op");
        op.setAttribute("id","op2");
        

        const link_op = document.createElement("a"); 
        link_op.setAttribute("href","http://127.0.0.1:5500/Sistema%20de%20Manuten%C3%A7%C3%A3o/config.html");
        op.appendChild(link_op);

        const span_Configuracao = document.createElement("span");
        span_Configuracao.textContent = "Configuração"
        link_op.appendChild(span_Configuracao);
        
        divmenu.appendChild(op);

        console.log("layoutconfig fim");    
    }
    static selecionado = () =>{
        // const op_selecionado = getElementById("op2")
        // op_selecionado.setAttribute("class","op selecionado")
        console.log("222222222222222222222222222222222222222222222222222222222222222222222222222222222");
        
    }
   
}
export {Config}