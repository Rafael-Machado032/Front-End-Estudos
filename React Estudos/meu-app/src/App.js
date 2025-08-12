import React from 'react'; // Importando o React
import './App.css'; // Importando o CSS do App
// Se importar o CSS do App, ele será aplicado a todos os componentes
import Componentes from "./App/Componentes"
import Estrutura from "./App/Estrutura_Basica"
import Funcao from "./App/Funcao"
import JSX from "./App/JSX"
import Props from "./App/Props"
import State from "./App/State"
import Eventos from './App/Eventos';
import RenderizarCondicao from './App/RenderizarCondicao';
import Map from './App/Map'; // Importando o componente Map
import Formulario from './App/Formulario'; // Importando o componente Formulario
import ManipularState from './App/ManipularState'; // Importando o componente ManipularState
import ElevacaoState from './App/ElevacaoState'; // Importando o componente ElevacaoState
import ElevacaoStateHandle from './App/ElevacaoStateHandle'; // Importando o componente ElevacaoStateHandle
import Contecao from './App/Contecao';
import UseEffect from './App/UseEffect';




export default function App() {


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
      <Map />
      <Formulario />
      <ManipularState />
      <ElevacaoState />
      <ElevacaoStateHandle />
      <Contecao />
      <UseEffect />


      

      
      
    
      

      
        
      <p>Armazenar nome: </p>
      <input type="text" value={nomeArmazenado} onChange={(e) => setNomeArmazenado(e.target.value)} />
      <button onClick={() => armazenar('nome', nomeArmazenado)}>Salvar</button>
      <button onClick={() => consultar('nome')}>Consultar</button>
      <button onClick={() => apagar('nome')}>Apagar</button>
      

    </>
  );
}



