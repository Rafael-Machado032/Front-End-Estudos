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
import ComponenteClasse from './App/ComponenteClasse'; // Importando o componente de classe
import ClasseState from './App/ClasseState';
import CicloDeVidaComponente from './App/CicloDeVidaComponete'; // Importando o componente CicloDeVidaComponente
import BaseDeClasse from './App/BaseDeClasse';
import VariaveisGlobais from './App/VariaveisGlobais';
import NavegarTelasNativa from './App/NavegarTelasNativa';
import Filtro from './App/Filtro'; // Importando o componente Exercicios1
import Calculadora from './App/Calculadora'; // Importando o componente Calculadora
import CalculadoraComClasse from './App/CalculadoraComClasse'; // Importando o componente CalculadoraComClasse
import CalculadoraMatematica from './App/CalculadoraMatematica';
import JogoDaVelha from './App/JogoDaVelha'; // Importando o componente JogoDaVelha
import APIcomAxios from './App/APIcomAxios'; // Importando o componente APIcomAxios
import RotasNavegacao from './App/RotasNavegacao'; // Importando o componente RotasNavegacao
import Key from './App/Key'; // Importando o componente Key

export default function App() {
  const carros = [

  ];
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
      <ComponenteClasse />
      <ClasseState />
      <CicloDeVidaComponente />
      <BaseDeClasse />
      <VariaveisGlobais />
      <NavegarTelasNativa />
      <Filtro />
      <Calculadora />
      <CalculadoraComClasse />
      <CalculadoraMatematica />
      <JogoDaVelha />
      <APIcomAxios />
      <RotasNavegacao />
      <Key />
    </>
  );
}



