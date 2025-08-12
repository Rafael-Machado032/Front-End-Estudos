import React from "react";
import Dados from "../componentes/Dados";

export default function Props() {
    return (
        <div>
            <Dados nome="Rafael" curso="React" ano={2023} />
            {/* Passando props para o componente Dados */}
        </div>
    );
}
