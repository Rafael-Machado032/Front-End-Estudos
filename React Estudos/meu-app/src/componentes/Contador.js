import React from 'react'; // Importando o React

export default function Contador() {

    const [num, setNum] = React.useState(0); // Definindo o estado inicial do número
    // useState serve para mudar estado, nesse caso o número e renderiza o componente.
    // const [Nome do state, função para mudar o state] = React.useState(valor inicial)
    return (
        <div className="container">
            <h1>Contador: {num}</h1>
            <button onClick={() => setNum(num + 1)}>Incrementar</button>
            <button onClick={() => setNum(num - 1)}>Decrementar</button>
            <button onClick={() => setNum(0)}>Zerar</button>
        </div>
    );
}
