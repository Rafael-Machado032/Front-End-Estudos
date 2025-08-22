import React from "react";

export default class ClasseCalcular extends React.Component {
    render() {
        const calc = () => this.props.setResultado(this.props.peso / (this.props.altura * this.props.altura));
        return (
            <div>
                <h2>Calcular IMC</h2>
                <button onClick={calc}>Calcular</button>
            </div>
        );
    }
}
