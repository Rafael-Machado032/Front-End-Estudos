import React from 'react'; // Importando o React
import Led from './componentes/Led';
import Header from './componentes/Header';
import Corpo from './componentes/Corpo'; // Importando o componente Corpo
import './App.css'; // Importando o CSS do App 
// Se importar o CSS do App, ele será aplicado a todos os componentes

export default function App() {

  const [log, setLog] = React.useState(false);

  const msglogin = () => {
    if (log) {
      return <p>Você está logado!</p>;
    } else {
      return <p>Você não está logado!</p>;
    }
  }


  const cumprimento = () => {
    const hora = new Date().getHours();
    if (hora < 12) {
      return <p>Bom dia!</p>;
    } else if (hora < 18) {
      return <p>Boa tarde!</p>;
    } else {
      return <p>Boa noite!</p>;
    }
  }

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

  return (

    <> {/* Importando o componentes */}


      <Header />
      <Corpo />
      <Led />
      {cumprimento()}
      <button onClick={() => setLog(!log)}>{log ? 'Logout' : 'Login'}</button>
      {msglogin()}
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
    </>
  );
}



