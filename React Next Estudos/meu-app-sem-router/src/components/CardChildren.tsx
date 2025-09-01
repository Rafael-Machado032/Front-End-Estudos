interface CardProps { // Especifica as propriedades do componente Card
    produto: {
        id: number;
        nome: string;
    };
    preco: number;
    desconto?: number; // Propriedade opcional
    children: React.ReactNode; // Ao criar children declare React.ReactNode que é mais seguro pois aceita so componete react
}

export default function CardChildren(props: CardProps) {
    return (
        <div>
            <h2>Componente com Props</h2>
            <p>Nome: {props.produto.nome}</p>
            <p>Preço: {props.preco}</p>
            <p>Desconto: {props.desconto}%</p>
            <div>{props.children}</div> {/* Conteúdo passado como children */}
        </div>
    );
}
