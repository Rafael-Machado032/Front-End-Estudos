import React from "react";
import Nota from "../componentes/Nota";
import Resultado from "../componentes/Resultado";

const ElevacaoState = () => {

    const [nota1, setNota1] = React.useState(0);
    const [nota2, setNota2] = React.useState(0);
    const [nota3, setNota3] = React.useState(0);
    const [nota4, setNota4] = React.useState(0);

    return (
        <div>
            <Nota numero={1} nota={nota1} setNota={setNota1} />
            <Nota numero={2} nota={nota2} setNota={setNota2} />
            <Nota numero={3} nota={nota3} setNota={setNota3} />
            <Nota numero={4} nota={nota4} setNota={setNota4} />

            <Resultado somaNotas={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)} />
        </div>
    );
};

export default ElevacaoState;
