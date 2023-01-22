const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
    
})

btnCursoSelecionado.addEventListener("click",(evt)=>{  //Esculta do evento de click
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]  //Lista de todos os elemento 'input' do tipo radio
    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{ //No filter ele escolhe no primeiro ELEMENTO segundo ÍNDICE terceiro o próprio ARRAY não obrigatório todos os parâmetros so se for usar
        return ele.checked //Retorna o input selecionado
    })
    radioSelecionado=radioSelecionado[0] //retorna somente o selecionado e não a coleção
    //const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado=radioSelecionado.parentNode.previousSibling.textContent //Essa eh a segunda maneira para pegar o texto do selecionado
    alert("Curso selecionado: " + cursoSelecionado) //Popup na tela com resultado
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})

// parentNode               Elemento Pai
// childNodes[nodenumber]   Elemento filho [Posição do elemento]
// firstChild               Primeiro elemento Filho
// lastChild                Ultimo elemento filho
// nextSibling              Proximo Irmão
// previousSibling          Irmão Anterior

