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
import LocalStorage from './App/LocalStorage'; // Importando o componente LocalStorage




export default function App() {
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
      <LocalStorage />

    </>
  );
}



