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
            setValorTela(resultado + d);
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

    const limparMemoria = () => {
        setValorTela("");
        setOperado(false);
        setAcumulador(0);
        setResultado(0);
        return Tela("", 0);
    }
    const Operacao = (op) => {
        if (op ==="bs") {
            let vtela = valorTela;
            vtela = vtela.substring(0, vtela.length - 1);
            setValorTela(vtela);
            setOperado(false);
            return
        }
        try {//como vou fazer uma operação com calculo e pode dar erro
            const r = eval(valorTela);//eval é um função que avalia uma string como código JavaScript
            setAcumulador(r);
            setResultado(r);
            setOperado(true);
        } catch (e) {
            setResultado("ERRO");
        }
    }

    //Estilo

    const cssContainer = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px"
    };
    const cssTela = {
        fontSize: 30,
        color: "#000",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "10px",
        padding: "10px",
    };
    const cssOperacao = {
        fontSize: 20,
        color: "#333",
        display: "flex",
        width: "100%",
        height: "10px",
    };
    const cssResultado = {
        fontSize: 30,
        color: "#000",
        display: "flex",
        justifyContent: "right",
        width: "100%",
        
    };
    const cssBotoes = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
            <div style={cssContainer}>
                {Tela(valorTela, resultado)}
                <div style={cssBotoes}>
                    {Btn("C", () => limparMemoria())}
                    {Btn("(", () => addDigitoTel("("))}
                    {Btn(")", () => addDigitoTel(")"))}
                    {Btn("/", () => addDigitoTel("/"))}
                </div>
                <div style={cssBotoes}>
                    {Btn("7", () => addDigitoTel("7"))}
                    {Btn("8", () => addDigitoTel("8"))}
                    {Btn("9", () => addDigitoTel("9"))}
                    {Btn("*", () => addDigitoTel("*"))}
                </div>
                <div style={cssBotoes}>
                    {Btn("4", () => addDigitoTel("4"))}
                    {Btn("5", () => addDigitoTel("5"))}
                    {Btn("6", () => addDigitoTel("6"))}
                    {Btn("-", () => addDigitoTel("-"))}
                </div>
                <div style={cssBotoes}>
                    {Btn("1", () => addDigitoTel("1"))}
                    {Btn("2", () => addDigitoTel("2"))}
                    {Btn("3", () => addDigitoTel("3"))}
                    {Btn("+", () => addDigitoTel("+"))}
                </div>
                <div style={cssBotoes}>
                    {Btn("0", () => addDigitoTel("0"))}
                    {Btn(".", () => addDigitoTel("."))}
                    {Btn("<", () => Operacao("bs"))}
                    {Btn("=", () => Operacao("="))}
                    
                </div>
                
            </div>
        </div>
    );
}

