import React, { useState, useEffect } from "react";
import Pagina1 from "../componentes/Pagina1";
import Pagina2 from "../componentes/Pagina2";

export default function NavegarTelasNativa() {
    const [pagina, setPagina] = useState(0)

    useEffect(() => {
        const url = window.location.href;
        const res = url.split("?");
        setPagina(parseInt(res[1]));
    }, []);

    const linkPagina = (num) => {
        
        if (num === 3) {
            window.open("http://localhost:3000?1", "_self")
        } else if (num === 4) {
            window.open("http://localhost:3000?2", "_self")
        } else {
            setPagina(num)
        }
    }

    const retornarPagina = () => {
        if (pagina === 1) {
            return <Pagina1 />
        } else if (pagina === 2) {
            return <Pagina2 />
        } else {
            return (
                <div>
                    <button onClick={() => linkPagina(1)}>Pagina 1</button>
                    <button onClick={() => linkPagina(2)}>Pagina 2</button>
                    <button onClick={() => linkPagina(3)}>Pagina 1 Nova Pagina</button>
                    <button onClick={() => linkPagina(4)}>Pagina 2 Nova Pagina</button>
                </div>
            )
        }
    }


    return (
        <div>
            <h1>Navegar Telas Nativas</h1>
            {retornarPagina()}
        </div>
    )

}