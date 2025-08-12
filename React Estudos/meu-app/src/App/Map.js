import React from "react";

export default function Map() {


    const carros = ["HRV", "Golf", "Focus", "Cruzes", "Argo"]
    const listaCarros = carros.map(
        (c, i) => <li key={i}>{i + 1} - {c}</li>
    )

    const carrosCompleto = [
        { Categoria: "Esportivos", preco: 200000, marca: "Ferrari", modelo: "F8 Tributo" },
        { Categoria: "SUVs", preco: 150000, marca: "Toyota", modelo: "RAV4" },
        { Categoria: "Sedãs", preco: 80000, marca: "Honda", modelo: "Civic" },
        { Categoria: "Hatchbacks", preco: 60000, marca: "Volkswagen", modelo: "Golf" },
        { Categoria: "Picapes", preco: 90000, marca: "Ford", modelo: "Ranger" },
        { Categoria: "Elétricos", preco: 300000, marca: "Tesla", modelo: "Model S" },
        { Categoria: "Conversíveis", preco: 250000, marca: "Porsche", modelo: "911 Cabriolet" },
        { Categoria: "Compactos", preco: 50000, marca: "Fiat", modelo: "Punto" },
        { Categoria: "Minivans", preco: 70000, marca: "Chrysler", modelo: "Pacifica" },
        { Categoria: "Híbridos", preco: 120000, marca: "Toyota", modelo: "Prius" },
    ];

    const listaCarrosCompletos = carrosCompleto.map(
        (carro, i) => (
            <li key={i}>
                {i + 1} - {carro.Categoria} - {carro.marca} {carro.modelo} - R$ {carro.preco.toFixed(2)}
            </li>
        )
    );

    return (
        <div>
            <ul>
                {listaCarros}
                {/* Mapeia o array de carros e cria um item de lista para cada carro */}
                {listaCarrosCompletos}
                {/* */}
            </ul>
        </div>
    );
}