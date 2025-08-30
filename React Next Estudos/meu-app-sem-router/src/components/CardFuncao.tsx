interface CardProps { // Especifica as propriedades do componente Card
    produto: {
        id: number;
        nome: string;
    };
    preco: number;
    desconto?: number; // Propriedade opcional
    funcao: any;
}

export default function CardFuncao(props: CardProps) {
    return (
        <div>
            <h2>Componente com Props</h2>
            <p>Nome: {props.produto.nome}</p>
            <p>Preço: {props.preco}</p>
            <p>Desconto: {props.desconto}%</p>
            <p>Preço com desconto: {props.funcao(props.preco, props.desconto)}</p>
        </div>
    );
}
