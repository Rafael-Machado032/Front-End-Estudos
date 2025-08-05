import React from "react";

export default function Resultado(props) {



    return (
        <div>
            <label>Soma das Notas: {props.somaNotas}</label>
            <span> {props.somaNotas >= 60 ? 'Aprovado' : 'Reprovado'} </span>

        </div>
    );
}
