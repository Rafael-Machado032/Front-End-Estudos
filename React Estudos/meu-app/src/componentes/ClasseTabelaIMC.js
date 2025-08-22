import React from "react";

export default class ClasseTabelaIMC extends React.Component {
    render() {
        return (
            <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo do peso</td>
                        <td>Menos de 18,5</td>
                    </tr>
                    <tr>
                        <td>Peso normal</td>
                        <td>Entre 18,5 e 24,9</td>
                    </tr>
                    <tr>
                        <td>Sobrepeso</td>
                        <td>Entre 25 e 29,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade</td>
                        <td>30 ou mais</td>
                    </tr>
                </tbody>
            </table>
        );
    }
};