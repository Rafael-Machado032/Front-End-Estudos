const caixa1=document.querySelector("#caixa1"); //Seleciona  os elementos para mexer nos eventos
const caixa2=document.querySelector("#caixa2");
const btn=document.querySelector("#btn_copiar");
const todosCursos=[...document.querySelectorAll(".curso")] //para usar 'map' precisa transforma em array

//Botão Copiar transfere para outra caixa 

todosCursos.map((el)=>{ //'el' recebe todos os elementos com a classe .curso
    el.addEventListener("click",(evt)=>{ // esculta os eventos e vai para variável 'evt'
        const curso=evt.target; //Recebe o elemento que recebeu o click
        curso.classList.toggle("selecionado"); //toggle serve para add ou remover a classe do elemento se tiver remove se naõ tem ele adiciona
    })
})
btn.addEventListener("click",()=>{ //ele esculta o click no elemento btn
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]; //Seleciona todos os elemento que tem a classe .selecionado
    cursosSelecionados.map((el)=>{ //map é loop mais moderno. O 'el' rebebe caixa2
        caixa2.appendChild(el) //appendChild anexa os elementos no filho ou seja dentro do caixa2
    })
})

//Botão transferir ele retorna caso nao esteja selecionado

btn_transferir.addEventListener("click",()=>{ //ele esculta o click no elemento btn
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]; //Seleciona todos os elemento que tem a classe .selecionado
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]; //Ao colocar so :not(selecionado) ele pega todos os elementos que não possui selecionado por isso insere mais uma condição que a classe .curso que limita a busca
    cursosSelecionados.map((el)=>{ //map é loop mais moderno. O 'el' rebebe caixa2
        caixa2.appendChild(el) //appendChild anexa os elementos no filho ou seja dentro do caixa2
    })
    cursosNaoSelecionados.map((el)=>{ //map é loop mais moderno. O 'el' rebebe caixa2
        caixa1.appendChild(el) //appendChild anexa os elementos no filho ou seja dentro do caixa2
    })
})

