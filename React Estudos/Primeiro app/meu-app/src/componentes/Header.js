
import Logo from './img/logo.svg'; // Importando a imagem do logo do React


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
                <img className='logo' src={Logo} alt="Logo do React" /> {/* Usando a imagem importada */}
                <h1 style={{ color: 'blue', fontSize: '50px' }}>Meu Primeiro App {curso}</h1> {/* Para usar uma variável usamos chaves */}
                <p style={destaque}>Aprendendo {curso} em {ano()}</p>
            </header>
        </header>
    );
}
