
export default function Dados(props) {
    return (
        <section>
            <h2>Dados do Usuário</h2>
            <p>Aqui estão algumas informações sobre o usuário.</p>
            <ul>
                <li>Nome: {props.nome}</li> {/* Exemplo de uso de props */}
                <li>Curso: {props.curso}</li>
                <li>Ano: {props.ano}</li>
            </ul>
        </section>
    );
}
