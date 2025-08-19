import React from "react";
import Globais from "./Globais";

export default function InfoEx (){

    return(
        <div>
            <h1>Variaveis Globais</h1>
            <p>Curso: {Globais.curso}</p>
            <p>Aluno: {Globais.aluno}</p>
            <p>Ano: {Globais.ano}</p>
        </div>
    )
}