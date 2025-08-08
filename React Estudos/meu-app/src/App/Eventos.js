import React from "react";


function Eventos() {
    const [ledOn, setLedOn] = React.useState(false);
    return (
        <div>
            <h2>Componente Led</h2>
            <img
                src={ledOn ? 'https://cdn-icons-png.flaticon.com/512/427/427735.png' : 'https://cdn-icons-png.flaticon.com/512/427/427735.png'}
                alt="Lâmpada"
                style={{
                    width: '100px',
                    height: '100px',
                    filter: ledOn ? 'brightness(1) drop-shadow(0 0 20px yellow)' : 'grayscale(1) brightness(0.5)'
                }}
            />{/*Filter esta com condição ternária onde se verdadeiro aplica um filtro de brilho e sombra, caso contrário aplica um filtro de escala de cinza e brilho reduzido */}
            <p>A lâmpada está {ledOn ? 'ligada' : 'desligada'}</p>
            <button onClick={() => setLedOn(!ledOn)}>
                {ledOn ? 'Desligar' : 'Ligar'} lâmpada
            </button>
        </div>
    );
}

export default Eventos;