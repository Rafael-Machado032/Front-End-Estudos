import React from "react";

export default function Nota(props) {

  

    return (
        <div>
            <label>Informe a Nota: {props.numero} </label>
            <input type="number" value={props.nota} onChange={(e) => props.setNota(e.target.value)} />

        </div>
    );
}
