import React from "react";

export default function Somar(props) {
    const n1 = 5; // Primeiro número
    const n2 = 10; // Segundo número
    return (
        <div>
            <h1>Componente Somar</h1>
            <p>{`A soma de ${n1} e ${n2} é ${props.somar(n1, n2)}.`}</p>
        </div>
    );
}
