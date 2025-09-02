import { useState } from 'react';

export default function UseState() {
    const [count, setCount] = useState<number>(0); //Como é typescript posso tipar a variavel count
    // É um tipo de variavel que rederiza o componente quando seu valor é alterado

    return (
        <div>
            <h2>Uso do useState</h2>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique em mim</button>
            <button onClick={() => setCount(0)}>Zerar</button>
        </div>
    );
}