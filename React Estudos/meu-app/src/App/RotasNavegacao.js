import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Pagina1 from "../componentes/Pagina1";
import Pagina2 from "../componentes/Pagina2";


export default function RotasNavegacao() {

    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/pg1">Página 1</Link>
                <Link to="/pg2">Página 2</Link>
            </header>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/pg1" element={<Pagina1 />} />
                <Route path="/pg2" element={<Pagina2 />} />
            </Routes>
        </div>
    );
}

//No Caderno tem a explicação de uso do React Router