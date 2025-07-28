
import Header from './componentes/Header';
import Corpo from './componentes/Corpo'; // Importando o componente Corpo
import './App.css'; // Importando o CSS do App 
// Se importar o CSS do App, ele será aplicado a todos os componentes

export default function App() {


  
  return (
    <> {/* Importando o componentes */}
      <Header />
      <Corpo />
      
      {/* <Dados nome="Rafael" curso="React" ano={2023} /> */}
      {/* Exemplo de como passar props para o componente Dados */}
      
    </>
  );
}



