import React from "react";

export default function Altura(props) {
    return (
        <div>
            <label>Digite sua altura (m):</label>
            <input type="number" value={props.altura} onChange={(e) => props.setAltura(e.target.value)} />
        </div>
    );
}
