import React from "react";

export default function Peso(props) {
    return (
        <div>
            <label>Digite seu peso (kg):</label>
            <input type="number" value={props.peso} onChange={(e) => props.setPeso(e.target.value)} />
        </div>
        
    );
}
