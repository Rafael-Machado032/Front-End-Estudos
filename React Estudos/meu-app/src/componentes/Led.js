import React from 'react';
export default function Led() {
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
        />
        <p>A lâmpada está {ledOn ? 'ligada' : 'desligada'}</p>
        <button onClick={() => setLedOn(!ledOn)}>
            {ledOn ? 'Desligar' : 'Ligar'} lâmpada
        </button>
    </div>
);
}
