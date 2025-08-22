import React from "react";

export default function Calcular(props) {
    const calc = () => props.setResultado(props.peso / (props.altura * props.altura));
    return (
        <div>
            <h2>Calcular IMC</h2>
            <button onClick={calc}>Calcular</button>
        </div>
    );
}
