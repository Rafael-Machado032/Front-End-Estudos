import React from "react";
import CardChildren from "@/components/CardChildren";

export default function Children() {
    return (
        <div>
            <h1>Children</h1>
            <CardChildren
                produto={{ id: 1, nome: "Produto 1" }}
                preco={100}
                desconto={10}
            >
                <p>Este é um conteúdo passado como children.</p>
                <p>Você pode colocar qualquer elemento React aqui.</p>
                {/*Children obriga a colocar filhos para o componente */}
            </CardChildren>
        </div>
    );
}
