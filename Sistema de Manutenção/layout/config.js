class Config {
    
    static estilo = null;

    static layoutconfig = () => {
        console.log("layoutconfig inicio");
        
        //Botão Configuração inicio

        const divmenu = document.getElementById("container_menu"); //Para inserir div criada, selecionado por class não funciona

        const op = document.createElement("div");
        op.setAttribute("class","op");
        op.setAttribute("id","op2");
        

        const link_op = document.createElement("a");
        link_op.setAttribute("href","http://127.0.0.1:5500/Sistema%20de%20Manuten%C3%A7%C3%A3o/config.html");
        op.appendChild(link_op);

        const span_Configuracao = document.createElement("span");
        span_Configuracao.textContent = "Configuração";
        link_op.appendChild(span_Configuracao);
        
        divmenu.appendChild(op);

        //Botão Configuração Fim

        //Painel Cadastro inicio

        const container_dir_painel = document.getElementById("container_dir_painel");

        const cadastro_container = document.createElement("div");
        cadastro_container.setAttribute("class","cadastro_container");
        container_dir_painel.appendChild(cadastro_container);

        const cadastro = document.createElement("fieldset");
        cadastro.setAttribute("class","cadastro");
        cadastro_container.appendChild(cadastro);

        const lgcadastro = document.createElement("legend");
        lgcadastro.textContent = "Cadastro";
        cadastro.appendChild(lgcadastro);

        const campo_pri = document.createElement("div");
        campo_pri.setAttribute("class","campo_pri");
        cadastro.appendChild(campo_pri);

        const dcondominio = document.createElement("div");
        campo_pri.appendChild(dcondominio);
        
        const lcondominio = document.createElement("label");
        lcondominio.textContent = "Nome do Condominio:";
        dcondominio.appendChild(lcondominio);

        const icondominio = document.createElement("input");
        icondominio.setAttribute("type","text");
        icondominio.setAttribute("name","icondominio");
        icondominio.setAttribute("id","icondominio");
        dcondominio.appendChild(icondominio);

        const dipexterno = document.createElement("div");
        campo_pri.appendChild(dipexterno);
        
        const lipexterno = document.createElement("label");
        lipexterno.textContent = "IP Externo:";
        dipexterno.appendChild(lipexterno);

        const iipexterno = document.createElement("input");
        iipexterno.setAttribute("type","text");
        iipexterno.setAttribute("name","iipexterno");
        iipexterno.setAttribute("id","iipexterno");
        dipexterno.appendChild(iipexterno);

        const dispositivo1 = document.createElement("fieldset");
        cadastro.appendChild(dispositivo1);

        const lgdispositivo1 = document.createElement("legend")
        lgdispositivo1.textContent = "Dispositivo 1";
        dispositivo1.appendChild(lgdispositivo1);

        const campo_disp = document.createElement("div");
        campo_disp.setAttribute("class","campo_disp");
        dispositivo1.appendChild(campo_disp)

        const box_disp = document.createElement("div");
        box_disp.setAttribute("class","box_disp");
        campo_disp.appendChild(box_disp);

        //Painel Cadastro inicio

        console.log("layoutconfig fim");
    }
    
}
export {Config}