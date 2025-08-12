import React from "react";

export default function Caixa(props) {
    return (
        <div className="caixa">
            {props.children}
            {props.children[2]}{/*Selecionando o terceiro filho*/}
            <a href={props.site} target="_blank" rel="noopener noreferrer">
                Acesse o site
            </a>
        </div>
    );
}
