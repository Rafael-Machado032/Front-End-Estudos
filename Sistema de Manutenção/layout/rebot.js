class Rebot {
    
    static estilo = null;

    static button_rebot = () => {
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
    static janela_rebot = () => {
        const container_dir = document.getElementById("container_dir");
        
        const container_dir_painel = document.createElement("div");
        container_dir_painel.setAttribute("class","container_dir_painel");
        container_dir.appendChild(container_dir_painel);

        const reiniciar = document.createElement("div");
        reiniciar.setAttribute("class","reiniciar");
        container_dir_painel.appendChild(reiniciar);

        var nome_condominio = "Nome do condominio";
        var dispositivo = "Facial Externo";

        const h1condominio = document.createElement("h1")
        h1condominio.textContent = nome_condominio;
        reiniciar.appendChild(h1condominio);

        const container_dispositivo = document.createElement("div");
        container_dispositivo.setAttribute("class","container_dispositivo");
        reiniciar.appendChild(container_dispositivo);

        const h2dipositivo = document.createElement("h2")
        h2dipositivo.textContent = dispositivo;
        container_dispositivo.appendChild(h2dipositivo);

        const button_rebot = document.createElement("button")
        button_rebot.textContent = "Rebot";
        container_dispositivo.appendChild(button_rebot);
    }
        
}
export default Rebot;