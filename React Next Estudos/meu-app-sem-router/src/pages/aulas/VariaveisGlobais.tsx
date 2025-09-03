import React, { useEffect } from 'react';
import Globais from '../../components/Globais';

export default function VariaveisGlobais() {

    useEffect(() => {
        alert("As variáveis globais foram definidas!");
        Globais.curso = "React";
        Globais.aluno = "João";
    }, []);

    return (
        <div>
            <h1>Variáveis Globais</h1>

            <button onClick={() => {
                alert(`Curso: ${Globais.curso}, Aluno: ${Globais.aluno}`);
            }}>Mostrar Alerta</button>
        </div>
    );
}
