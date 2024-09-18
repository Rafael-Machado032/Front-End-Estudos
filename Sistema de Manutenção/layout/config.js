import { AddJanela } from "../script/addjanela.js";
class Config {

    static estilo = null;

    static button_config = () => {
        console.log("layoutconfig inicio");

        //Botão Configuração inicio

        const divmenu = document.getElementById("container_menu"); //Para inserir div criada, selecionado por class não funciona

        const op = document.createElement("div");
        op.setAttribute("class", "op");
        op.setAttribute("id", "op2");


        const link_op = document.createElement("a");
        //link_op.setAttribute("href","http://127.0.0.1:5500/Sistema%20de%20Manuten%C3%A7%C3%A3o/config.html");
        link_op.setAttribute("id", "configuracao")

        op.appendChild(link_op);

        const span_Configuracao = document.createElement("span");
        span_Configuracao.textContent = "Configuração";
        link_op.appendChild(span_Configuracao);

        divmenu.appendChild(op);

        //Botão Configuração Fim



        console.log("layoutconfig fim");
    }
    static painel_config = () => {

        //Painel Cadastro inicio

        const container_dir = document.getElementById("container_dir");

        const container_dir_painel = document.createElement("div");
        container_dir_painel.setAttribute("class", "container_dir_painel");
        container_dir_painel.setAttribute("id", "container_dir_painel");
        container_dir.appendChild(container_dir_painel);

        const cadastro_container = document.createElement("div");
        cadastro_container.setAttribute("class", "cadastro_container");
        container_dir_painel.appendChild(cadastro_container);

        const cadastro = document.createElement("fieldset");
        cadastro.setAttribute("class", "cadastro");
        cadastro.setAttribute("id", "cadastro");
        cadastro_container.appendChild(cadastro);

        const lgcadastro = document.createElement("legend");
        lgcadastro.textContent = "Cadastro";
        cadastro.appendChild(lgcadastro);

        const campo_pri = document.createElement("div");
        campo_pri.setAttribute("class", "campo_pri");
        cadastro.appendChild(campo_pri);

        const dcondominio = document.createElement("div");
        campo_pri.appendChild(dcondominio);

        const lcondominio = document.createElement("label");
        lcondominio.textContent = "Nome do Condominio:";
        dcondominio.appendChild(lcondominio);

        const icondominio = document.createElement("input");
        icondominio.setAttribute("type", "text");
        icondominio.setAttribute("name", "icondominio");
        icondominio.setAttribute("id", "icondominio");
        dcondominio.appendChild(icondominio);

        const dipexterno = document.createElement("div");
        campo_pri.appendChild(dipexterno);

        const lipexterno = document.createElement("label");
        lipexterno.textContent = "IP Externo:";
        dipexterno.appendChild(lipexterno);

        const iipexterno = document.createElement("input");
        iipexterno.setAttribute("type", "text");
        iipexterno.setAttribute("name", "iipexterno");
        iipexterno.setAttribute("id", "iipexterno");
        dipexterno.appendChild(iipexterno);

        const dispositivo1 = document.createElement("fieldset");
        cadastro.appendChild(dispositivo1);

        const lgdispositivo1 = document.createElement("legend")
        lgdispositivo1.textContent = "Dispositivo 1";
        dispositivo1.appendChild(lgdispositivo1);

        const campo_disp = document.createElement("div");
        campo_disp.setAttribute("class", "campo_disp");
        dispositivo1.appendChild(campo_disp)

        const box_disp = document.createElement("div");
        box_disp.setAttribute("class", "box_disp");
        campo_disp.appendChild(box_disp);

        const ddispositivo1 = document.createElement("div")
        box_disp.appendChild(ddispositivo1);

        const ldispositivo1 = document.createElement("label");
        ldispositivo1.textContent = "Nome do Dispositivo:";
        ddispositivo1.appendChild(ldispositivo1);

        const indisp1 = document.createElement("input");
        indisp1.setAttribute("type", "text");
        indisp1.setAttribute("name", "ndisp");
        indisp1.setAttribute("id", "ndisp");
        ddispositivo1.appendChild(indisp1);

        const ddispositivo2 = document.createElement("div")
        box_disp.appendChild(ddispositivo2);

        const ldispositivo2 = document.createElement("label");
        ldispositivo2.textContent = "Tipo do Dispositivo:";
        ddispositivo2.appendChild(ldispositivo2);

        const seldisp2 = document.createElement("select");
        seldisp2.setAttribute("id", "seldisp");
        ddispositivo2.appendChild(seldisp2);

        const opdisp2 = document.createElement("option");
        opdisp2.setAttribute("id", "opdisp");
        opdisp2.textContent = "Selecione";
        opdisp2.setAttribute("arial-required", "false");
        seldisp2.appendChild(opdisp2);

        const ddispositivo3 = document.createElement("div")
        box_disp.appendChild(ddispositivo3);

        const ldispositivo3 = document.createElement("label");
        ldispositivo3.textContent = "Porta:";
        ddispositivo3.appendChild(ldispositivo3);

        const indisp3 = document.createElement("input");
        indisp3.setAttribute("type", "number");
        indisp3.setAttribute("name", "pdisp");
        indisp3.setAttribute("id", "pdisp");
        ddispositivo3.appendChild(indisp3);

        const box_disp2 = document.createElement("div");
        box_disp2.setAttribute("class", "box_disp");
        campo_disp.appendChild(box_disp2);

        const ddispositivo4 = document.createElement("div")
        box_disp2.appendChild(ddispositivo4);

        const ldispositivo4 = document.createElement("label");
        ldispositivo4.textContent = "Serial:";
        ddispositivo4.appendChild(ldispositivo4);

        const indisp4 = document.createElement("input");
        indisp4.setAttribute("type", "text");
        indisp4.setAttribute("name", "serial");
        indisp4.setAttribute("id", "serial");
        ddispositivo4.appendChild(indisp4);

        const ddispositivo5 = document.createElement("div")
        box_disp2.appendChild(ddispositivo5);

        const ldispositivo5 = document.createElement("label");
        ldispositivo5.textContent = "Login:";
        ddispositivo5.appendChild(ldispositivo5);

        const indisp5 = document.createElement("input");
        indisp5.setAttribute("type", "text");
        indisp5.setAttribute("name", "login");
        indisp5.setAttribute("id", "login");
        ddispositivo5.appendChild(indisp5);

        const ddispositivo6 = document.createElement("div")
        box_disp2.appendChild(ddispositivo6);

        const ldispositivo6 = document.createElement("label");
        ldispositivo6.textContent = "Senha:";
        ddispositivo6.appendChild(ldispositivo6);

        const indisp6 = document.createElement("input");
        indisp6.setAttribute("type", "text");
        indisp6.setAttribute("name", "senha");
        indisp6.setAttribute("id", "senha");
        ddispositivo6.appendChild(indisp6);

        const botao = document.createElement("div");
        botao.setAttribute("class", "botao");
        cadastro.appendChild(botao);

        const bnovo_dispositivo = document.createElement("button");
        bnovo_dispositivo.setAttribute("id", "bnovo_dispositivo");
        bnovo_dispositivo.textContent = "Novo Dispositivo";
        botao.appendChild(bnovo_dispositivo);

        const bremover = document.createElement("button");
        bremover.textContent = "Remover";
        botao.appendChild(bremover);

        const botao2 = document.createElement("div");
        botao2.setAttribute("class", "botao");
        cadastro_container.appendChild(botao2);

        const bsalvar = document.createElement("button");
        bsalvar.textContent = "Salvar";
        botao2.appendChild(bsalvar);

        const blimpar = document.createElement("button");
        blimpar.textContent = "Limpar";
        botao2.appendChild(blimpar);

        const bnovo_dispositivo1 = document.getElementById("bnovo_dispositivo");

        bnovo_dispositivo1.addEventListener("click", () => {
            Config.addjanela()

        })

        //Painel Cadastro inicio

    }

    static addjanela = () => {

        const cadastro = document.getElementById("cadastro")

        const dispositivo1 = document.createElement("fieldset");
        cadastro.appendChild(dispositivo1)

        const lgdispositivo1 = document.createElement("legend")
        lgdispositivo1.textContent = "Dispositivo 1";
        dispositivo1.appendChild(lgdispositivo1);

        const campo_disp = document.createElement("div");
        campo_disp.setAttribute("class", "campo_disp");
        dispositivo1.appendChild(campo_disp)

        const box_disp = document.createElement("div");
        box_disp.setAttribute("class", "box_disp");
        campo_disp.appendChild(box_disp);

        const ddispositivo1 = document.createElement("div")
        box_disp.appendChild(ddispositivo1);

        const ldispositivo1 = document.createElement("label");
        ldispositivo1.textContent = "Nome do Dispositivo:";
        ddispositivo1.appendChild(ldispositivo1);

        const indisp1 = document.createElement("input");
        indisp1.setAttribute("type", "text");
        indisp1.setAttribute("name", "ndisp");
        indisp1.setAttribute("id", "ndisp");
        ddispositivo1.appendChild(indisp1);

        const ddispositivo2 = document.createElement("div")
        box_disp.appendChild(ddispositivo2);

        const ldispositivo2 = document.createElement("label");
        ldispositivo2.textContent = "Tipo do Dispositivo:";
        ddispositivo2.appendChild(ldispositivo2);

        const seldisp2 = document.createElement("select");
        seldisp2.setAttribute("id", "seldisp");
        ddispositivo2.appendChild(seldisp2);

        const opdisp2 = document.createElement("option");
        opdisp2.setAttribute("id", "opdisp");
        opdisp2.textContent = "Selecione";
        opdisp2.setAttribute("arial-required", "false");
        seldisp2.appendChild(opdisp2);

        const ddispositivo3 = document.createElement("div")
        box_disp.appendChild(ddispositivo3);

        const ldispositivo3 = document.createElement("label");
        ldispositivo3.textContent = "Porta:";
        ddispositivo3.appendChild(ldispositivo3);

        const indisp3 = document.createElement("input");
        indisp3.setAttribute("type", "number");
        indisp3.setAttribute("name", "pdisp");
        indisp3.setAttribute("id", "pdisp");
        ddispositivo3.appendChild(indisp3);

        const box_disp2 = document.createElement("div");
        box_disp2.setAttribute("class", "box_disp");
        campo_disp.appendChild(box_disp2);

        const ddispositivo4 = document.createElement("div")
        box_disp2.appendChild(ddispositivo4);

        const ldispositivo4 = document.createElement("label");
        ldispositivo4.textContent = "Serial:";
        ddispositivo4.appendChild(ldispositivo4);

        const indisp4 = document.createElement("input");
        indisp4.setAttribute("type", "text");
        indisp4.setAttribute("name", "serial");
        indisp4.setAttribute("id", "serial");
        ddispositivo4.appendChild(indisp4);

        const ddispositivo5 = document.createElement("div")
        box_disp2.appendChild(ddispositivo5);

        const ldispositivo5 = document.createElement("label");
        ldispositivo5.textContent = "Login:";
        ddispositivo5.appendChild(ldispositivo5);

        const indisp5 = document.createElement("input");
        indisp5.setAttribute("type", "text");
        indisp5.setAttribute("name", "login");
        indisp5.setAttribute("id", "login");
        ddispositivo5.appendChild(indisp5);

        const ddispositivo6 = document.createElement("div")
        box_disp2.appendChild(ddispositivo6);

        const ldispositivo6 = document.createElement("label");
        ldispositivo6.textContent = "Senha:";
        ddispositivo6.appendChild(ldispositivo6);

        const indisp6 = document.createElement("input");
        indisp6.setAttribute("type", "text");
        indisp6.setAttribute("name", "senha");
        indisp6.setAttribute("id", "senha");
        ddispositivo6.appendChild(indisp6);
    }

}
export { Config }