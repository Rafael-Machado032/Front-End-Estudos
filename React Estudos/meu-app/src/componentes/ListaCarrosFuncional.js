import React from "react";
import axios from "axios";

export default function ListaCarrosFuncional() {
    const [carros, setCarros] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:1880/carros')
            .then(response => {
                setCarros(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os carros:', error);
            });
    }, []); // O array vazio significa que o efeito só roda uma vez, como componentDidMount

    return (
        <div>
            <h2>Lista de Carros Funcional</h2>
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