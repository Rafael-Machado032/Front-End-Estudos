import React from "react";
import CarroCicloDeVida from "../componentes/CarroCicloDeVida";



export default function CicloDeVidaComponente() {

    const [carro, setCarro] = React.useState(true);
    const mostrarCarro = () => setCarro(true);
    const ocultarCarro = () => setCarro(false);

    return (
        <div>
            <h1>Ciclo de Vida do Componente</h1>
            {carro ? <CarroCicloDeVida fator={5} /> : null}
            <button onClick={carro ? ocultarCarro : mostrarCarro}>
                {carro ? "Ocultar" : "Mostrar"}
            </button>
        </div>
    );

}

// Ciclo de Vida do Componente
// Na montagem, quando uma instacia do componente esta sendo criada no DOM

// 1)constructor()
// 2)static getDerivedStateFromProps()
// 3)render()
// 4)componentDidMount()

// Na atualização do componente, por alteração causada em props ou state, quando o componente esta sendo renderizado

// 1)static getDerivedStateFromProps()
// 2)shouldComponentUpdate()
// 3)render()
// 4)getSnapshotBeforeUpdate()
// 5)componentDidUpdate()

// Na desmontagem do componente, quando ele é removido do DOM

// 1)componentWillUnmount()

// Em tratamento de erros, quando existe um erro durante a renderização

// 1)static getDerivedStateFromError()
// 2)componentDidCatch()
