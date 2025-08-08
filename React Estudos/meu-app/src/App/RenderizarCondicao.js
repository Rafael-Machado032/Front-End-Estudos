import React from "react";

function RenderizarCondicao() {

    const cumprimento = () => {

        const hora = new Date().getHours();
        if (hora < 12) {
            return <p>Bom dia!</p>;
        } else if (hora < 18) {
            return <p>Boa tarde!</p>;
        } else {
            return <p>Boa noite!</p>;
        }
    }

    const [log, setLog] = React.useState(false);

    const msglogin = () => {
        if (log) {
            return <p>Você está logado!</p>;
        } else {
            return <p>Você não está logado!</p>;
        }
    }

    return (
        <div>
            {cumprimento()}
            <button onClick={() => setLog(!log)}>{log ? 'Logout' : 'Login'}</button>
            {msglogin()}
        </div>
    );
}

export default RenderizarCondicao;
