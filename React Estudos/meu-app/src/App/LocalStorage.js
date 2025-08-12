import React from "react";

export default function LocalStorage() {
    localStorage.setItem('nome', 'Rafael'); // Armazenando um valor no localStorage
    localStorage.getItem('nome'); // Recuperando o valor do localStorage
    localStorage.removeItem('nome'); // Removendo o valor do localStorage

    const [nomeArmazenado, setNomeArmazenado] = React.useState(''); // Estado para armazenar o nome a ser salvo no localStorage
    const armazenar = (chave, valor) => {
        localStorage.setItem(chave, valor); // Função para armazenar um valor no localStorage
        alert(`Valor armazenado: ${localStorage.getItem(chave)}`);
    }

    const consultar = (chave) => {
        alert(`Valor consultado: ${localStorage.getItem(chave)}`);
    }

    const apagar = (chave) => {
        localStorage.removeItem(chave); // Função para apagar um valor do localStorage
        alert(`Valor apagado: ${chave}`);
    }

    return (
        <div>
            <p>Armazenar nome: </p>
            <input type="text" value={nomeArmazenado} onChange={(e) => setNomeArmazenado(e.target.value)} />
            <button onClick={() => armazenar('nome', nomeArmazenado)}>Salvar</button>
            <button onClick={() => consultar('nome')}>Consultar</button>
            <button onClick={() => apagar('nome')}>Apagar</button>
        </div>
    );
}
