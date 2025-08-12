import React, { useEffect } from "react";

export default function UseEffect() {

    const [contagem, setContagem] = React.useState(0);
    useEffect(() => {
        console.log('O componente App foi montado');
    }); // useEffect é um hook que permite executar quando o componente é montado ou atualizado

    return (
        <div>
            <p>Contagem: {contagem}</p>
            <button onClick={() => setContagem(contagem + 1)}>Adicionar</button>
            <button onClick={() => setContagem(contagem - 1)}>Remover</button>
            <button onClick={() => setContagem(0)}>Zerar</button>
        </div>
    );
}
