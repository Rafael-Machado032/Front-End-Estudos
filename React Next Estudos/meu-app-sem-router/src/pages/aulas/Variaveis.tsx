const nome = 'Rafael' //Contexto Global

export default function Variaveis() {

  const idade = 30 //Contexto de Bloco
  function mostrarIdade() {
    return idade
  }
  const cidade = 'Guaíba'

  return (
    <div>
      <h1>Variáveis</h1>
      <p>Nome: {nome}</p>
      <p>Idade: {mostrarIdade()}</p>
      <p>Cidade: {cidade}</p>
    </div>
  )
}
