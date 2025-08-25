import React from "react";

export default function ListaCarrosFetch() {
    const [carros, setCarros] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:1880/carros')
            .then(response => response.json())
            .then(data => {
                setCarros(data);
            })
            .catch(error => {
                console.error('Erro ao buscar os carros:', error);
            });
    }, []); // O array vazio significa que o efeito só roda uma vez, como componentDidMount

    return (
        <div>
            <h2>Lista de Carros Fetch</h2>
            <ul>
                {carros.map((carro) => (
                    <li key={carro.id}>
                        {carro.marca} - {carro.modelo}
                    </li>
                ))}
            </ul>
        </div>
    );
}