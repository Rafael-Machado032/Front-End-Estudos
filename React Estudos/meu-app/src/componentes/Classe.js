import React from "react";

class Classe extends React.Component {
    // Este é um componente de classe
    constructor(props) {
        super(props); // Chama o construtor da classe pai
    }
    render() { // Método render é responsável por renderizar o componente
        return(
            <div>
                <h1>Primeiro componente de classe</h1>
                <p>Curso: {this.props.curso}</p>
            </div>
        );
    }
}

export default Classe;

