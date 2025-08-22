import React from "react";

export default class ClasseResultadoIMC extends React.Component {
    render() {
        return (
            <div>
                <h2>Resultado</h2>
                <p>Seu IMC é: {this.props.resultado.toFixed(2)}</p>
                <p>Categoria: {this.props.resultado < 18.5 ? "Abaixo do peso" : this.props.resultado < 24.9 ? "Peso normal" : this.props.resultado < 29.9 ? "Sobrepeso" : "Obesidade"}</p>
            </div>
        );
    }
}
