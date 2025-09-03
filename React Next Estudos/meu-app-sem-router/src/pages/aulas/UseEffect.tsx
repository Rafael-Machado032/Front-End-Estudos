import React, { useEffect } from "react";

export default function UseEffect() {

    const [contador, setContador] = React.useState(0);

    useEffect(() => { //useEffect execulta toda vez que a redenrização e acionada
        alert("Componente foi renderizado");
    }, [contador]); //colocando o estado dentro do array, o useEffect só sera execultado quando o estado for alterado

    return (
        <div>
            <h1>Hook UseEffect</h1>
            <button onClick={() => setContador(contador + 1)}>Alterar contador</button>
            <p>Contador: {contador}</p>
        </div>
    );
}
