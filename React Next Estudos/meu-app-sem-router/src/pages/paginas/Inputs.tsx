import React from "react";


export default function Inputs() {
    const [inputValue, setInputValue] = React.useState("");
    return (
        <div>
            <input type="text" placeholder="Digite algo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {/*o valor digitado no input dispara o evento no onChange que pega o valor e insere no estado*/}
            <p>Você digitou: {inputValue}</p>
        </div>
    );
}
