import React from "react";

export default function ResultadoIMC(props) {
    return (
        <div>
            <h2>Resultado</h2>
            <p>Seu IMC é: {props.resultado.toFixed(2)}</p>
            <p>Categoria: {props.resultado < 18.5 ? "Abaixo do peso" : props.resultado < 24.9 ? "Peso normal" : props.resultado < 29.9 ? "Sobrepeso" : "Obesidade"}</p>
        </div>
    );
}
