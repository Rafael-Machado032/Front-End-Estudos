import react from 'react';
import Somar from "../componentes/Somar"; // Importando o componente Somar

export default function Funcao() {
    const somar = (n1, n2) => {
        return n1 + n2;
    };
    return (
        <div>
            <h1>Componente de Função</h1>
            <p>Este é um componente de função em React.</p>
            <Somar somar={somar} /> {/* Passando props para o componente Somar */}
        </div>
    );
}