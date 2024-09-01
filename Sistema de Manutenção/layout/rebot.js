class Rebot {
    
    static estilo = null;

    static layoutrebot = () => {
        console.log("layoutrebot inicio");
        

        const divmenu = document.getElementById("container_menu"); //Para iserir div criada selecionado por class não funciona

        const op = document.createElement("div");
        op.setAttribute("class","op");
        op.setAttribute("id","op1");
        

        const link_op = document.createElement("a"); 
        link_op.setAttribute("href","http://127.0.0.1:5500/Sistema%20de%20Manuten%C3%A7%C3%A3o/index.html");
        op.appendChild(link_op);

        const span_Configuracao = document.createElement("span");
        span_Configuracao.textContent = "Reiniciar"
        link_op.appendChild(span_Configuracao);
        
        divmenu.appendChild(op);

        console.log("layoutrebot fim");    
    }
        
}
export default Rebot;