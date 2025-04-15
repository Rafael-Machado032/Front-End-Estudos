const dadosgrid = document.querySelector("#dadosgrid");
const btn_add = document.querySelector("#btn_add");
const novocolaborador = document.querySelector("#novocolaborador");
const btn_fecharpopup = document.querySelector("#btn_closepopup");
const btn_cancelar = document.querySelector("#btn_cancelar");
const btn_salvar = document.querySelector("#btn_salvar");

const endpoint_todoscoloboradores = "http://localhost:1880/todosusuarios";

fetch(endpoint_todoscoloboradores)
    .then((response) => {
        if (!response.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return response.json();
    })

    .then((data) => {
        console.log(data);
        dadosgrid.innerHTML = "";
        data.forEach((colaborador) => {
            const linhagrid = document.createElement("div");
            linhagrid.classList.add("linhagrid");
            dadosgrid.appendChild(linhagrid);

            const c1 = document.createElement("div");
            c1.classList.add("c1");
            c1.classList.add("colunalinhagrid");
            c1.innerHTML = colaborador.n_usuario_usuario;
            linhagrid.appendChild(c1);

            const c2 = document.createElement("div");
            c2.classList.add("c2");
            c2.classList.add("colunalinhagrid");
            c2.innerHTML = colaborador.s_nome_usuario;
            linhagrid.appendChild(c2);

            const c3 = document.createElement("div");
            c3.classList.add("c3");
            c3.classList.add("colunalinhagrid");
            c3.innerHTML = colaborador.n_tipo_usuario;
            linhagrid.appendChild(c3);

            const c4 = document.createElement("div");
            c4.classList.add("c4");
            c4.classList.add("colunalinhagrid");
            c4.innerHTML = colaborador.c_status_usuario;
            linhagrid.appendChild(c4);

            const c5 = document.createElement("div");
            c5.classList.add("c5");
            c5.classList.add("colunalinhagrid");
            c5.innerHTML = "E E";
            linhagrid.appendChild(c5);
        });
    });

const endpoint_tipocolab = "http://localhost:1880/tipocolab";
fetch(endpoint_tipocolab)
    .then((response) => {
        if (!response.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const f_tipo = document.querySelector("#f_tipo");
        f_tipo.innerHTML = "";
        const option = document.createElement("option");
        option.setAttribute("disable", "true");
        option.setAttribute("selected", "true");
        option.setAttribute("value", "");
        option.textContent = "Selecione";
        f_tipo.appendChild(option);
        f_tipo.setAttribute("required", "true");
        data.forEach((tipo) => {
            const option = document.createElement("option");
            option.value = tipo.n_nivel_tipousuario;
            option.textContent = tipo.s_desc_tipousuario;
            f_tipo.appendChild(option);
        });
    });



btn_add.addEventListener("click", function () {
    novocolaborador.classList.remove("ocultarpopup");
    f_tipo.selectedIndex = 0;
});
btn_fecharpopup.addEventListener("click", function () {
    novocolaborador.classList.add("ocultarpopup");
    
});
btn_cancelar.addEventListener("click", function () {
    novocolaborador.classList.add("ocultarpopup");
});
btn_salvar.addEventListener("click", function () {
    novocolaborador.classList.add("ocultarpopup");
});

