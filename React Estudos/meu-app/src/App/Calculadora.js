import React from "react";

const tabelaIMC = () => {
    return (
        <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do peso</td>
                    <td>Menos de 18,5</td>
                </tr>
                <tr>
                    <td>Peso normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade</td>
                    <td>30 ou mais</td>
                </tr>
            </tbody>
        </table>
    );
}

const fpeso = (p, sp) => {
    return (
        <div>
            <label>Digite seu peso (kg):</label>
            <input type="number" value={p} onChange={(e) => sp(e.target.value)} />
            {/**No onChange, o (e) é o parametro do evento */}
        </div>
    )
}

const faltura = (a, sa) => {
    return (
        <div>
            <label>Digite sua altura (m):</label>
            <input type="number" value={a} onChange={(e) => sa(e.target.value)} />
            {/**No onChange, o (e) é o parametro do evento */}
        </div>
    )
}

const fcalcular = (p, a, sr) => {

    const calc = () => sr(p / (a * a));

    return (
        <div>
            <button onClick={calc}>Calcular IMC</button>
        </div>
    )
}

const fresultado = (r) => {
    return (
        <div>
            <h2>Resultado</h2>
            <p>Seu IMC é: {r.toFixed(2)}</p>{/**toFixed(2) formata o numero para 2 casas decimais */}
            <p>Categoria: {r < 18.5 ? "Abaixo do peso" : r < 24.9 ? "Peso normal" : r < 29.9 ? "Sobrepeso" : "Obesidade"}</p>
        </div>
    )
}

export default function Calculadora() {

    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);

    return (
        <div>
            <h1>Calculadora</h1>
            {fpeso(peso, setPeso)}
            {faltura(altura, setAltura)}
            {fcalcular(peso, altura, setResultado)}
            {fresultado(resultado)}
            <h2>Tabela de IMC</h2>
            {tabelaIMC()}
        </div>
    );
}
