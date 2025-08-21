import React from "react";

const carros = [
    { categoria: "Esporte", preco: "100000", modelo: "Golf GTI" },
    { categoria: "Esporte", preco: "100000", modelo: "Civic" },
    { categoria: "Esporte", preco: "100000", modelo: "A3" },
    { categoria: "SUV", preco: "150000", modelo: "Tiguan" },
    { categoria: "SUV", preco: "150000", modelo: "Nissan Kicks" },
    { categoria: "Sedan", preco: "80000", modelo: "Jetta" },
    { categoria: "Hatch", preco: "70000", modelo: "Polo" }
];

const linhas = (cat) => {
    return carros
        .filter(c => c.categoria.toUpperCase().includes(cat.toUpperCase())) //O filter percorre o array e retorna apenas os carros que possuem a categoria informada
        .map(c => ( //o include verifica se a categoria do carro contém a string informada
            <tr key={c.modelo}>
                <td>{c.modelo}</td>
                <td>{c.categoria}</td>
                <td>{c.preco}</td>
            </tr>
        ));
}

const TabelaCarros = (cat) => {
    return (
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {linhas(cat)}
            </tbody>
        </table>
    )
}

const pesquisaCategoria = (cat, scat) => {
    return (
        <div>
            <label>Digite uma categoria:</label>
            <input type="text" value={cat} onChange={(e) => scat(e.target.value)} />
        </div>
    )
}

export default function Filtro() {
    const [categoria, setCategoria] = React.useState("")
    return (
        <div>
            {pesquisaCategoria(categoria, setCategoria)}
            <br />
            {TabelaCarros(categoria)}
        </div>
    );
}
