class AddJanela{
    static addjanela = () => {

        const cadastro = document.getElementById("cadastro")

        const dispositivo1 = document.createElement("fieldset");
        cadastro.appendChild(dispositivo1)

        const lgdispositivo1 = document.createElement("legend")
        lgdispositivo1.textContent = "Dispositivo 1";
        dispositivo1.appendChild(lgdispositivo1);

        const campo_disp = document.createElement("div");
        campo_disp.setAttribute("class","campo_disp");
        dispositivo1.appendChild(campo_disp)

        const box_disp = document.createElement("div");
        box_disp.setAttribute("class","box_disp");
        campo_disp.appendChild(box_disp);

        const ddispositivo1 = document.createElement("div")
        box_disp.appendChild(ddispositivo1);

        const ldispositivo1 = document.createElement("label");
        ldispositivo1.textContent="Nome do Dispositivo:";
        ddispositivo1.appendChild(ldispositivo1);

        const indisp1 = document.createElement("input");
        indisp1.setAttribute("type","text");
        indisp1.setAttribute("name","ndisp");
        indisp1.setAttribute("id","ndisp");
        ddispositivo1.appendChild(indisp1);

        const ddispositivo2 = document.createElement("div")
        box_disp.appendChild(ddispositivo2);

        const ldispositivo2 = document.createElement("label");
        ldispositivo2.textContent="Tipo do Dispositivo:";
        ddispositivo2.appendChild(ldispositivo2);

        const seldisp2 = document.createElement("select");
        seldisp2.setAttribute("id","seldisp");
        ddispositivo2.appendChild(seldisp2);

        const opdisp2 = document.createElement("option");
        opdisp2.setAttribute("id","opdisp");
        opdisp2.textContent = "Selecione";
        opdisp2.setAttribute("arial-required","false");
        seldisp2.appendChild(opdisp2);

        const ddispositivo3 = document.createElement("div")
        box_disp.appendChild(ddispositivo3);

        const ldispositivo3 = document.createElement("label");
        ldispositivo3.textContent="Porta:";
        ddispositivo3.appendChild(ldispositivo3);

        const indisp3 = document.createElement("input");
        indisp3.setAttribute("type","number");
        indisp3.setAttribute("name","pdisp");
        indisp3.setAttribute("id","pdisp");
        ddispositivo3.appendChild(indisp3);

        const box_disp2 = document.createElement("div");
        box_disp2.setAttribute("class","box_disp");
        campo_disp.appendChild(box_disp2);

        const ddispositivo4 = document.createElement("div")
        box_disp2.appendChild(ddispositivo4);

        const ldispositivo4 = document.createElement("label");
        ldispositivo4.textContent="Serial:";
        ddispositivo4.appendChild(ldispositivo4);

        const indisp4 = document.createElement("input");
        indisp4.setAttribute("type","text");
        indisp4.setAttribute("name","serial");
        indisp4.setAttribute("id","serial");
        ddispositivo4.appendChild(indisp4);

        const ddispositivo5 = document.createElement("div")
        box_disp2.appendChild(ddispositivo5);

        const ldispositivo5 = document.createElement("label");
        ldispositivo5.textContent="Login:";
        ddispositivo5.appendChild(ldispositivo5);

        const indisp5 = document.createElement("input");
        indisp5.setAttribute("type","text");
        indisp5.setAttribute("name","login");
        indisp5.setAttribute("id","login");
        ddispositivo5.appendChild(indisp5);

        const ddispositivo6 = document.createElement("div")
        box_disp2.appendChild(ddispositivo6);

        const ldispositivo6 = document.createElement("label");
        ldispositivo6.textContent="Senha:";
        ddispositivo6.appendChild(ldispositivo6);

        const indisp6 = document.createElement("input");
        indisp6.setAttribute("type","text");
        indisp6.setAttribute("name","senha");
        indisp6.setAttribute("id","senha");
        ddispositivo6.appendChild(indisp6);
    }
}
export{AddJanela}
