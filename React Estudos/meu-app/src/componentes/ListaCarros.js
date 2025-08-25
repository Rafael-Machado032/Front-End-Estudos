import React from "react";
import axios from "axios";

export default class ListaCarros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carros: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:1880/carros')
            .then(response => {
                this.setState({ carros: response.data });
            })
            .catch(error => {
                console.error('Erro ao buscar os carros:', error);
            });
    }

    render() {
        return (
            <div>
                <h2>Lista de Carros Axios</h2>
                <ul>
                    {this.state.carros.map((carro) => (
                        <li key={carro.id}>
                            {carro.marca} - {carro.modelo}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}