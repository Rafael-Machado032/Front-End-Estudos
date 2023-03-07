const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")

cursos.map((el,chave)=>{ //percorre o array cursos
    const novoElemento=document.createElement("div") //Criação de elementos div
    novoElemento.setAttribute("id","c"+chave)  //seta o id c0 ate c6 que em o tamanho do array cursos
    novoElemento.setAttribute("class","curso c1")  //seta o classe curso c1 até o tamanho do array cursos
    novoElemento.innerHTML=el //Insere o cursos no html

    const comandos=document.createElement("div") //Criação de elementos div
    comandos.setAttribute("class","comandos")   //seta o classe comandos até o tamanho do array cursos
    
    const rb=document.createElement("input") //Criação de elementos input
    rb.setAttribute("type","radio")     //seta o tipo de input que é radio até o tamanho do array cursos
    rb.setAttribute("name","rb_curso")     //seta o nome rb_cursos até o tamanho do array cursos

    comandos.appendChild(rb)  //adiciona o filho rb no pai comandos

    novoElemento.appendChild(comandos) //adiciona o filho comandos no pai novoElemento

    caixaCursos.appendChild(novoElemento) //adiciona o filho novoElemento no pai caixaCursos
    
})
const cursoSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]  //Lista de todos os elemento 'input' do tipo radio
    cons radioSelecionado=todosRadios.filter((ele,ind,arr)=>{ //No filter ele escolhe no primeiro ELEMENTO segundo ÍNDICE terceiro o próprio ARRAY não obrigatório todos os parâmetros so se for usar
        return ele.checked //Retorna o input selecionado
    })
    return radioSelecionado[0] //retorna somente o selecionado e não a coleção
}

btnCursoSelecionado.addEventListener("click",(evt)=>{  //Esculta do evento de click
    
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

