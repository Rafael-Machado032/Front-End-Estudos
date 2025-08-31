import { useState } from 'react';

export default function RederizarCondicional() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>Renderização Condicional</h1>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            {isLoggedIn ? (
                <h2>Bem-vindo de volta!</h2>
            ) : (
                <h2>Por favor, faça login.</h2>
            )}
        </div>
    );
}