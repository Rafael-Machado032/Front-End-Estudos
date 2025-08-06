import React from "react";
import logo from "../componentes/img/logo.svg"

export default function JSX() {

    const curso = "ReactJS";

    const olaMundo = () => {
        return "Olá, mundo!";
    };

    return (
        <div>
            <h1>Exemplo de JSX</h1>
            <p>Este é um exemplo de como usar JSX no React.</p>
            {/* JSX permite escrever HTML dentro do JavaScript */}

            <p>Curso: {curso}</p>
            <p>Mensagem: {olaMundo()}</p>
            <img src={logo} alt="Logo React" width={120} height={120} />

            {/* Importando e exibindo uma imagem */}
        </div>
    );
}
