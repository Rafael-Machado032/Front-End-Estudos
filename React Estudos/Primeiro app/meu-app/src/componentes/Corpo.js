import Dados from "./Dados";
import Contador from './Contador';

export default function Corpo() {
    const curso = 'React'; // Variável
    const ano = () => { // Exemplo de função
        return 2025;
    };


    return (
        <main>
            <h2>Conteúdo Principal</h2>
            <p>Este é o corpo do meu aplicativo React.</p>
            <Dados
                nome="Rafael Machado"
                curso={curso}
                ano={ano()}
            /> {/* Passando props para o componente Dados */}
            <Contador />
        </main>
    );
}
