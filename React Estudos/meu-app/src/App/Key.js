import React from "react";

export default function Key() {

    const array_numeros = [1, 2, 3, 4, 5];

    function ListaNumeros(props) {
        const num = props.numeros;
        const lista_numeros = num.map(
            (n) => <li key={n.toString()}>{n}</li>);
        return <ul>{lista_numeros}</ul>;
    } //Ao usar lista obrigatoriamente deve-se usar a key

    return (
        <div>
            <h1>Exemplo de uso de Keys</h1>
            <ListaNumeros numeros={array_numeros} />
        </div>
    );
}
