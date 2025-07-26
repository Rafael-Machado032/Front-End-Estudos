import React from "react";
import Logo from './logo.svg';


export default function Header() {
    const curso = 'React';// Variável
    const ano = () => { // Exemplo de função
        return 2025;
    };

    return (
        <header>
            <header>
                <h1>Meu Primeiro App {curso}</h1> {/* Para usar uma variável usamos chaves */}
                <p>Aprendendo {curso} em {ano()}</p>
            </header>
            <main>
                <p>{`Aprendendo ${curso} em ${ano()}`}</p>
                <img src={Logo} alt="Logo do React" />{/* Para usar uma imagem usamos chaves lado servidor*/}
                <img src="../public/logo192.png" alt="Logo do React" />{/* Para usar uma imagem local, usamos caminho relativo */}
            </main>
        </header>
    );
}
