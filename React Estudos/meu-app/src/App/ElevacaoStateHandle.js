import React from "react";
import Nota from "../componentes/Nota";
import Resultado from "../componentes/Resultado";

export default function ElevacaoStateHandle() {
    const [notas, setNotas] = React.useState({"nota1": 0, "nota2": 0, "nota3": 0, "nota4": 0});
    // Handle é um nome comum para funções que lidam com eventos
    const handleSetNotas = (index, valor) => {
        const novasNotas = {...notas}; //cria um objeto com spred notas
        novasNotas[`nota${index}`] = valor; //atualiza a nota correspondente
        setNotas(novasNotas);//atualiza e renderiza o estado com as novas notas
    };

    return (
        <div>
            <br />
            <label>Notas com Handle</label>
            <Nota numero={1} nota={notas.nota1} setNota={(valor) => handleSetNotas(1, valor)} />
            <Nota numero={2} nota={notas.nota2} setNota={(valor) => handleSetNotas(2, valor)} />
            <Nota numero={3} nota={notas.nota3} setNota={(valor) => handleSetNotas(3, valor)} />
            <Nota numero={4} nota={notas.nota4} setNota={(valor) => handleSetNotas(4, valor)} />

            <Resultado somaNotas={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)} />
        </div>
    );
}
