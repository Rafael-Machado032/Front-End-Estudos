export default function Card(props:any) {
    return (
        <div>
            <h2>Componente com Props</h2>
            <p>Nome: {props.produto.nome}</p>
            <p>Preço: {props.preco}</p>
        </div>
    );
}
