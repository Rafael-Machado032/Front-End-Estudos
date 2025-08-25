import React from "react";
import ListaCarros from "../componentes/ListaCarros";
import ListaCarrosFuncional from "../componentes/ListaCarrosFuncional";
import ListaCarrosFetch from "../componentes/ListaCarrosFetch";

export default function APIcomAxios() {
    return (
        <div>
            <h2>API com Axios</h2>
            <ListaCarros />
            <ListaCarrosFuncional />
            <ListaCarrosFetch />
        </div>
    );
}
