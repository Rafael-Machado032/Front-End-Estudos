document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);  // Armazena o token no localStorage
            alert("Login bem-sucedido!");
            window.location.href = 'index.html';  // Redireciona para a página principal
        } else {
            alert("Usuário ou senha incorretos.");
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
    }
});
