import React from "react";

export default function ManipularState() {
    
    const [formulario, setFormulario] = React.useState({
        nome: '',
        email: '',
        senha: '',
    });

    return (
        <div>
            <label>Nome: </label>
            <input type="text" value={formulario.nome} onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })} />{/* Atualiza o estado do nome */}
            <label>Email: </label>{/*Utiliza se o spread operator para atualizar o estado, ou seja cada*/}
            <input type="email" value={formulario.email} onChange={(e) => setFormulario({ ...formulario, email: e.target.value })} />
            <label>Senha: </label>
            <input type="password" value={formulario.senha} onChange={(e) => setFormulario({ ...formulario, senha: e.target.value })} />

            <p>Formulário:</p>
            <p>Nome - {formulario.nome}</p>
            <p>Email - {formulario.email}</p>
            <p>Senha - {formulario.senha}</p>
        </div>
    );
}
