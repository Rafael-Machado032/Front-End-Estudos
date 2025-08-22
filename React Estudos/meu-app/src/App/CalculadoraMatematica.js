import React from "react";

export default function CalculadoraMatematica() {

    const [valorTela, setValorTela] = React.useState("");
    const [operado, setOperado] = React.useState(false);
    const [acumulador, setAcumulador] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);

    //Componentes

    const Tela = (valor, res) => {
        return (
            <div style={cssTela}>
                <span style={cssOperacao}>{valor}</span>
                <span style={cssResultado}>{res}</span>
            </div>
        );
    };
    const Btn = (label, onClick) => {
        return (
            <button onClick={onClick} style={cssBtn}>
                {label}
            </button>
        );
    };

    //Funções
    const addDigitoTel = (d) => {
        if ((d === "+" || d === "-" || d === "*" || d === "/") && operado) {
            setOperado(false);
            setValorTela(valorTela + d);
            return;
        }
        if (operado) {
            setValorTela(d);
            setOperado(false);
            return;
        }
        const valorDigitadoTela = valorTela + d;
        setValorTela(valorDigitadoTela);
    }

    const limparMemoria = () =>{
        setValorTela("");
        setOperado(false);
        setAcumulador(0);
        setResultado(0);
        return Tela("", 0);
    }

    //Estilo
    const cssTela = {
        fontSize: 30,
        color: "#000",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "10px"
    }
    const cssOperacao = {
        fontSize: 25,
        color: "#333",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "10px"
    };
    const cssResultado = {
        fontSize: 30,
        color: "#000",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "10px"
    };
    const cssBtn = {
        fontSize: 20,
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        margin: "5px"
    };

    return (
        <div>
            <h1>Calculadora Matemática</h1>
        </div>
    );
}

