
interface FuncoesProps { //Garante que o componente receba as props corretas
    incrementar: () => void;
    zerar: () => void;
    decrementar: () => void;
    valor: number;
}

export default function DisplayFuncoes(props: FuncoesProps) { // Ao declarar o props tipamos o valor que eh recibido do pai tornando o componente mais previsível
    return (
        <div>
            <h2>Contador</h2>
            <p>Você clicou {props.valor} vezes</p>
            <button onClick={props.incrementar}>Clique em mim</button>
            <button onClick={props.zerar}>Zerar</button>
            <button onClick={props.decrementar}>Decrementar</button>
        </div>
    );
}

