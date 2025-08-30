interface CardProps { // Especifica as propriedades do componente Card
    produto: {
        id: number;
        nome: string;
    };
    preco: number;
    desconto?: number; // Propriedade opcional
}

export default function CardInterface(props: CardProps) {
    return (
        <div>
            <h2>Componente com Props</h2>
            <p>Nome: {props.produto.nome}</p>
            <p>Preço: {props.preco}</p>
            <p>Desconto: {props.desconto}%</p>
        </div>
    );
}
