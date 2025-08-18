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
                <h1>Contador: {this.state.contador}</h1>
                {/*Chamada da função com "bind"*/}
                <button onClick={this.maisUm}>Incrementar</button>
            </div>
        );
    }
}
