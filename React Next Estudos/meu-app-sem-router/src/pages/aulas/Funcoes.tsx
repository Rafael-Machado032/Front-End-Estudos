 export default function Funcoes() {
  function soma(a: number, b: number) {
    return a + b
  }

  function Subtracao() { //So entende que é um componente quando a primeira letra é maiúscula
    return 5 - 2
  }

  return (
    <div>
      <h1>Funções</h1>
      <p>A soma de 2 + 3 é: {soma(2, 3)}</p>
      <p>A subtração de 5 - 2 é: <Subtracao /></p>{/*Declaração de um componente funcional */}
    </div>
  )
}
