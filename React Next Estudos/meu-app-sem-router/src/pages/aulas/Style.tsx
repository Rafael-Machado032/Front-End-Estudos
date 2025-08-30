export default function Style() {
    return (
        <div>
            <h1>Estilos</h1>
            <p style={{ color: "blue", fontSize: "20px" }}>Esta é a página de estilos.</p>
            {/* Style aplicado inline */}
            <div style={teste}> {/* Estilo aplicado via objeto */}
                <p>Estilo aplicado via objeto</p>
            </div>
        </div>
    );
}

const teste={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    backgroundColor: "lightgray"
}
