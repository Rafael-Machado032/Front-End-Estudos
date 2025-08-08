import React, { useEffect } from 'react'; // Importando o React
import './App.css'; // Importando o CSS do App
import Componentes from "./App/Componentes"
import Estrutura from "./App/Estrutura_Basica"
import Funcao from "./App/Funcao"
import JSX from "./App/JSX"
import Props from "./App/Props"
import State from "./App/State"
import Eventos from './App/Eventos';
import RenderizarCondicao from './App/RenderizarCondicao';








// Se importar o CSS do App, ele será aplicado a todos os componentes
import Nota from './componentes/Nota'; // Importando o componente Nota
import Resultado from './componentes/Resultado'; // Importando o componente Resultado
import Caixa from './componentes/Caixa';






export default function App() {




  

  const carros = [
    { Categoria: "Esportivos", preco: 200000, marca: "Ferrari", modelo: "F8 Tributo" },
    { Categoria: "SUVs", preco: 150000, marca: "Toyota", modelo: "RAV4" },
    { Categoria: "Sedãs", preco: 80000, marca: "Honda", modelo: "Civic" },
    { Categoria: "Hatchbacks", preco: 60000, marca: "Volkswagen", modelo: "Golf" },
    { Categoria: "Picapes", preco: 90000, marca: "Ford", modelo: "Ranger" },
    { Categoria: "Elétricos", preco: 300000, marca: "Tesla", modelo: "Model S" },
    { Categoria: "Conversíveis", preco: 250000, marca: "Porsche", modelo: "911 Cabriolet" },
    { Categoria: "Compactos", preco: 50000, marca: "Fiat", modelo: "Punto" },
    { Categoria: "Minivans", preco: 70000, marca: "Chrysler", modelo: "Pacifica" },
    { Categoria: "Híbridos", preco: 120000, marca: "Toyota", modelo: "Prius" },
  ];

  const [nome, setNome] = React.useState(''); // Estado para armazenar o nome digitado
  const [categoria, setCategoria] = React.useState('Esportivo'); // Estado para armazenar a categoria selecionada


  const [formulario, setFormulario] = React.useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [nota1, setNota1] = React.useState(0);
  const [nota2, setNota2] = React.useState(0);
  const [nota3, setNota3] = React.useState(0);
  const [nota4, setNota4] = React.useState(0);

  const [contagem, setContagem] = React.useState(0);
  useEffect(() => {
    console.log('O componente App foi montado');
  }); // useEffect é um hook que permite executar quando o componente é montado ou atualizado


  localStorage.setItem('nome', 'Rafael'); // Armazenando um valor no localStorage
  localStorage.getItem('nome'); // Recuperando o valor do localStorage
  localStorage.removeItem('nome'); // Removendo o valor do localStorage

  const [nomeArmazenado, setNomeArmazenado] = React.useState(''); // Estado para armazenar o nome a ser salvo no localStorage
  const armazenar = (chave,valor) => {
    localStorage.setItem(chave, valor); // Função para armazenar um valor no localStorage
  }

  const consultar = (chave) => {
    alert(localStorage.getItem(chave)); // Função para consultar um valor no localStorage
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave); // Função para apagar um valor do localStorage
  }


  return (

    <> {/* Importando o componentes */}

      <Componentes />
      <Estrutura />
      <JSX />
      <Props />
      <Funcao />
      <State />
      <Eventos />
      <RenderizarCondicao />

      
      
      

      
      
      {/* <Dados nome="Rafael" curso="React" ano={2023} /> */}
      {/* Exemplo de como passar props para o componente Dados */}
      <ul>
        {carros.map((carro, index) => (
          <li key={index}>{`${index + 1} - ${carro.Categoria} - ${carro.marca} - ${carro.modelo} - R$ ${carro.preco.toFixed(2)}`}</li>
        ))}
      </ul>
      {/* Exemplo de como mapear um array e renderizar uma lista */}

      <label>Digite seu nome: </label>
      <input type="text" name='fnome' onChange={(e) => setNome(e.target.value)} />
      {/* Input para digitar o nome */}
      {/* onChange é um evento que dispara quando o valor do input muda */}
      {/* e.target.value é o valor atual do input */}
      <p>Nome digitado: {nome}</p>
      {/* Exibe o nome digitado pelo usuário */}
      <label>Selecione um carro: </label>
      <select onChange={(e) => setCategoria(e.target.value)}>
        {carros.map((carro, index) => (
          <option key={index} value={carro.Categoria}>{`${carro.marca} ${carro.modelo}`}</option>
        ))}{/* Mapeia o array de carros e cria uma opção para cada carro */}
      </select>
      <p>Categoria selecionada: {categoria}</p>
      {/* Exibe a categoria selecionada pelo usuário */}


      <label>Nome: </label>
      <input type="text" value={formulario.nome} onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })} />
      <label>Email: </label>
      <input type="email" value={formulario.email} onChange={(e) => setFormulario({ ...formulario, email: e.target.value })} />
      <label>Senha: </label>
      <input type="password" value={formulario.senha} onChange={(e) => setFormulario({ ...formulario, senha: e.target.value })} />

      <p>Formulário:</p>
      <p>Nome: {formulario.nome}</p>
      <p>Email: {formulario.email}</p>
      <p>Senha: {formulario.senha}</p>

      <Nota numero={1} nota={nota1} setNota={setNota1} />
      <Nota numero={2} nota={nota2} setNota={setNota2} />
      <Nota numero={3} nota={nota3} setNota={setNota3} />
      <Nota numero={4} nota={nota4} setNota={setNota4} />
      <Resultado somaNotas={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)} />
    
      <Caixa site="https://www.meusite.com">
        <h1>Caixa de Conteúdo</h1>
        <p>Este é um exemplo de como usar o componente Caixa.</p>
      </Caixa>

      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>Adicionar</button>
      <button onClick={() => setContagem(contagem - 1)}>Remover</button>
      <button onClick={() => setContagem(0)}>Zerar</button>
        
      <p>Armazenar nome: </p>
      <input type="text" value={nomeArmazenado} onChange={(e) => setNomeArmazenado(e.target.value)} />
      <button onClick={() => armazenar('nome', nomeArmazenado)}>Salvar</button>
      <button onClick={() => consultar('nome')}>Consultar</button>
      <button onClick={() => apagar('nome')}>Apagar</button>
      

    </>
  );
}



