



export default function Header() {
    const curso = 'React';// Variável
    const ano = () => { // Exemplo de função
        return 2025;
    };
     const destaque = { // Estilo para o parágrafo
        color: 'red',
        fontSize: '30px'
    }

    return (
        <header>
            <header>
                
                <h1 style={{ color: 'blue', fontSize: '50px' }}>Meu Primeiro App {curso}</h1> {/* Para usar uma variável usamos chaves */}
                <p style={destaque}>Aprendendo {curso} em {ano()}</p>
            </header>
        </header>
    );
}
