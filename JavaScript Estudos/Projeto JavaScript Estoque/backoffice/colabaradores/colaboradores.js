const dadosgrid = document.querySelector("#dadosgrid");
const btn_add = document.querySelector("#btn_add");
const novocolaborador = document.querySelector("#novocolaborador");
const btn_fecharpopup = document.querySelector("#btn_closepopup");
const btn_cancelar = document.querySelector("#btn_cancelar");
const btn_salvar = document.querySelector("#btn_salvar");
const f_nome = document.querySelector("#f_nome");
const f_tipo = document.querySelector("#f_tipo");
const f_status = document.querySelector("#f_status");
const f_telefone = document.querySelector("#f_telefone");
const telefones = document.querySelector("#telefones");
const btn_delete = document.querySelector("#btn_delete");
const f_foto = document.querySelector("#f_foto");
const img_foto = document.querySelector("#img_foto");

//n = Novo colaboraodr | e = Editar colaborador
let modojanela = "n";

const endpoint_todoscoloboradores = "http://localhost:1880/todosusuarios";

const carregarColaboradores = () => {
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
                linhagrid.appendChild(c5);

                const img_status = document.createElement("img");
                img_status.classList.add("icone_op");
                img_status.setAttribute("src", "../../img/ligado.svg");
                c5.appendChild(img_status);
                
                const img_editar = document.createElement("img");
                img_editar.classList.add("icone_op");
                img_editar.setAttribute("src", "../../img/edit.svg");
                img_editar.addEventListener("click", function () {
                    modojanela = "e";
                    document.querySelector("#titulopopup").innerHTML = "Editar Colaborador";
                    novocolaborador.classList.remove("ocultarpopup");
                    const id = colaborador.n_usuario_usuario;
                    console.log(id);
                    
                });
                c5.appendChild(img_editar);

                const img_remover = document.createElement("img");
                img_remover.classList.add("icone_op");
                img_remover.setAttribute("src", "../../img/delete.svg");
                c5.appendChild(img_remover);


            });
        });
}
carregarColaboradores();

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
        option.setAttribute("disabled", "true");
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
    modojanela = "n";
    document.querySelector("#titulopopup").innerHTML = "Novo Colaborador";
    novocolaborador.classList.remove("ocultarpopup");
    limpar();
});
btn_fecharpopup.addEventListener("click", function () {
    novocolaborador.classList.add("ocultarpopup");
    limpar();
});
btn_cancelar.addEventListener("click", function () {
    novocolaborador.classList.add("ocultarpopup");
    limpar();
});
btn_salvar.addEventListener("click", function () {
    const tels = document.querySelectorAll(".numtel");
    let telefones = [];
    tels.forEach((tel) => {
        telefones.push(tel.innerHTML);
    });
    const dados = {
        s_nome_usuario: f_nome.value,
        n_tipo_usuario: f_tipo.value,
        c_status_usuario: f_status.value,
        numtelefones: telefones,
        s_foto_usuario: img_foto.getAttribute("src")
    };
    console.log(dados);
    const endpointnovocolab = "http://localhost:1880/novocolab";
    const options = {
        method: "POST",
        body: JSON.stringify(dados),
    };
    fetch(endpointnovocolab, options)
        .then((response) => {
            if (response.status === 200) {
                alert("Colaborador cadastrado com sucesso!");
                limpar();
            } else {
                alert("Erro ao cadastrar colaborador!");
            }
            return response.json();
        })


    limpar();
    carregarColaboradores();

});

f_telefone.addEventListener("keyup", (evt) => {
    let telefone = f_telefone.value.replace(/[^0-9]/g, '');
    if (telefone.length > 10) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    if (telefone.length > 15) {
        telefone = telefone.substring(0, 15);
    }
    f_telefone.value = telefone;

    if (evt.key == "Enter") {
        if (f_telefone.value.length < 14) {
            alert("Telefone inválido");
            f_telefone.focus();
            return;
        } else {
            const tel = document.createElement("div");
            tel.classList.add("tel");
            telefones.appendChild(tel);

            const numtel = document.createElement("div");
            numtel.classList.add("numtel");
            numtel.innerHTML = f_telefone.value;
            tel.appendChild(numtel);

            const deltel = document.createElement("img");
            deltel.classList.add("deltel");
            deltel.setAttribute("src", "../../img/delete.svg");
            deltel.setAttribute("alt", "Excluir telefone");
            deltel.setAttribute("title", "Excluir telefone");
            tel.appendChild(deltel);

            f_telefone.value = "";
            f_telefone.focus();

            deltel.addEventListener("click", function () {
                telefones.removeChild(tel);
            });
        }

    }
});
const limpar = () => {
    f_nome.value = "";
    f_tipo.selectedIndex = 0;
    f_status.selectedIndex = 0;
    f_telefone.value = "";
    telefones.innerHTML = "";
    f_nome.focus();
    img_foto.setAttribute("src", "../../img/defaut.svg");
}

f_foto.addEventListener("change", function () { // Evento de mudança do input de arquivo
    const file = f_foto.files[0]; // Pega o primeiro arquivo selecionado
    if (file) { // Verifica se há um arquivo
        const reader = new FileReader(); //  é uma API do JavaScript usada para ler o conteúdo de arquivos de forma assíncrona
        reader.onload = function (e) { // Carraga o arquivo
            img_foto.setAttribute("src", e.target.result); // Define o src da imagem para o resultado do FileReader
        }
        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
});