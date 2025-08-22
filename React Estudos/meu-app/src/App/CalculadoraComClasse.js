import React from "react";
import ClasseTabelaIMC from "../componentes/TabelaIMC";
import ClassePeso from "../componentes/Peso";
import ClasseAltura from "../componentes/ClasseAltura";
import ClasseCalcular from "../componentes/ClasseCalcular"; // Importando o componente Calcular
import ClasseResultadoIMC from "../componentes/ClasseResultadoIMC";


export default function CalculadoraComClasse() {

    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);

    return (
        <div>
            <h1>Calculadora com Classe</h1>
            <ClassePeso peso={peso} setPeso={setPeso} />
            <ClasseAltura altura={altura} setAltura={setAltura} />
            <ClasseCalcular peso={peso} altura={altura} setResultado={setResultado} />
            <ClasseResultadoIMC resultado={resultado} />
            <h2>Tabela de IMC</h2>
            <ClasseTabelaIMC />
        </div>
    );
}
