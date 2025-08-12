import React from "react";


export default function Formulario() {
    const [nome, setNome] = React.useState(''); // Estado para armazenar o nome digitado

    

    const [carro,setCarro] = React.useState("HRV")

    return (
        <form>
            <label>Digite seu nome: </label>
            <input type="text" name='fnome' onChange={(e) => setNome(e.target.value)} />
            {/* Input para digitar o nome */}
            {/* onChange é um evento que dispara quando o valor do input muda */}
            {/* e.target.value é o valor atual do input */}
            <p>Nome digitado: {nome}</p>
            {/* Exibe o nome digitado pelo usuário */}

            <label>Selecione um carro: </label>
            <select value={carro} onChange={(e) => setCarro(e.target.value)}>
                <option value="HRV">HR-V</option>
                <option value="Civic">Civic</option>
                <option value="Corolla">Corolla</option>
            </select>
            <p>Carro selecionado: {carro}</p>

        </form>
    );
}