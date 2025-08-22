import React from "react";
import TabelaIMC from "../componentes/TabelaIMC";
import Peso from "../componentes/Peso";
import Altura from "../componentes/Altura";
import Calcular from "../componentes/Calcular"; // Importando o componente Calcular
import ResultadoIMC from "../componentes/ResultadoIMC";


export default function Calculadora() {

    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);

    return (
        <div>
            <h1>Calculadora</h1>
            <Peso peso={peso} setPeso={setPeso} />
            <Altura altura={altura} setAltura={setAltura} />
            <Calcular peso={peso} altura={altura} setResultado={setResultado} />
            <ResultadoIMC resultado={resultado} />
            <h2>Tabela de IMC</h2>
            <TabelaIMC />
        </div>
    );
}
