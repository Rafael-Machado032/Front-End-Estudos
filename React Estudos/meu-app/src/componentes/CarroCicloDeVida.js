import React from "react";

class CarroCicloDeVida extends React.Component {

    // Este é um componente de classe
    constructor(props) {
        super(props); // Chama o construtor da classe pai
        this.modelo = "Golf"; // Atributo de instância
        this.ano = 2020; // Atributo de instância
        // Você pode definir o estado aqui se necessário
        this.mensagem = "Componente montado!";
        this.state = {
            ligado: false,
            velAtual: 0,
        };
        this.frearB = this.frear.bind(this); //bind serve para ligar o 'this' ao componente
    }
    ligar = () => {
        this.setState({ ligado: !this.state.ligado }); // Método para ligar e desligar o carro
        if (this.state.ligado) {
            this.setState({ velAtual: 0 }); // Se o carro for desligado, a velocidade é 0
        }
    };

    acelerar() {
        if (this.state.ligado) {
            this.setState( // Chama setState mais seguro
                (state, props) => ({
                    velAtual: state.velAtual + props.fator
                })
            );
        }
    };

    frear() {
        if (this.state.ligado) {
            this.setState((state, props) => ({
                velAtual: state.velAtual - props.fator
            }));
        }
    };

    componentDidMount() {
        this.mensagem = "Componente montado!";
        console.log("Componente montado!");
    }

    componentDidUpdate() {
        this.mensagem = "Componente atualizado!";
        console.log("Componente atualizado!");
    }

    componentWillUnmount() {
        this.mensagem = "Componente desmontado!";
        console.log("Componente desmontado!");
    }

    render() { // Método render é responsável por renderizar o componente
        return (
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ano: {this.ano}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>Velocidade Atual: {this.state.velAtual} km/h</p>
                <button onClick={this.ligar}>
                    {this.state.ligado ? "Desligar Carro" : "Ligar Carro"}
                </button>
                <button onClick={() => this.acelerar()}>Acelerar</button>
                <button onClick={this.frearB}>Frear</button>
                <p>Estado do componente: {this.mensagem}</p>
            </div>
        );
    }
}

export default CarroCicloDeVida;
