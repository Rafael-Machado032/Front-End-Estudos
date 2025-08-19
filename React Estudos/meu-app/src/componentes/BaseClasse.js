import React from "react";

export default class BaseClasse extends React.Component {
    constructor(props) {
        //Para permitir o uso de props
        super(props);
        //state
        this.state = {
            contador: 0,
            curso:this.props.curso
        };
        this.status = this.props.status
        //blindagem
        this.maisUm = this.incrementar.bind(this)
    }

    //Instruções de construtor

    incrementar = () => {
        this.setState({ contador: this.state.contador + 1 });
    };
    componentDidMount(){
        console.log("Contador foi Montado!");
    }
    componentDidUpdate(){
        console.log("Contador foi Atualizado!");
    }
    componentWillUnmount(){
        console.log("Contador foi Removido!");
    }

    render() {
        return (
            <div>
                <h1>Base da Classe</h1>
                <h2>Contador: {this.state.contador}</h2>
                {/*Chamada da função com "bind"*/}
                <button onClick={this.maisUm}>Incrementar</button>
                <p>Curso: {this.state.curso}</p>
                <p>Status: {this.status ? "Positivo" : "Negativo"}</p>
            </div>
        );
    }
}
