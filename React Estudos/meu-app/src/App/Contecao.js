import React from "react";
import Caixa from "../componentes/Caixa";

export default function Contecao() {
    return (
        <div>
            <Caixa site="https://www.meusite.com">
                <h1>Caixa de Conteúdo</h1>
                <p>Este é um exemplo de como usar o componente Caixa.</p>
                <p>Você pode colocar qualquer conteúdo aqui.</p>
            </Caixa>
        </div>
    );
}
