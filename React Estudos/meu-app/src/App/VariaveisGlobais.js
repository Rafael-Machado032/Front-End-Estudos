import React, { useState } from "react";
import Globais from "../componentes/Globais";
import InfoEx from "../componentes/InfoEx";

export default function VariaveisGlobais() {

    const [resumo, setResumo] = useState(Globais.resumo)

    const gravarResumo = () => {
        Globais.resumo = resumo
    }

    const verResumo = () => {
        alert(Globais.resumo)
    }

    return (
        <div>
            <InfoEx />
            <hr />
            <h1>Variaveis Globais</h1>
            <p>Curso: {Globais.curso}</p>
            <p>Aluno: {Globais.aluno}</p>
            <p>Ano: {Globais.ano}</p>
            <hr />
            <input type="text" value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
            <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
            <button onClick={()=>verResumo()}>Ver Resumo</button>
        </div>
    )
}