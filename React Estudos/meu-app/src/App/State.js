import React from "react";

export default function State() {
    const [num,setNum] = React.useState(0);
    //useState serve para renderizar a tela novamente quando o estado mudar 
    // diferente de variavel comum que nao renderiza a tela novamente
    return (
        <div>
            <h1>Exemplo de State</h1>
            <p>Contador: {num}</p>
            <button onClick={() => setNum(num + 1)}>Incrementar</button>
            <button onClick={() => setNum(num - 1)}>Decrementar</button>
            {/* setNum é a função que altera o estado */}
        </div>
    );
}
