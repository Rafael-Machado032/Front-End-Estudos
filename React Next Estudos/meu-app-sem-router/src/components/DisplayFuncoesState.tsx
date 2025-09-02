
interface FuncoesStateProps { //Garante que o componente receba as props corretas
    fvalor: React.Dispatch<React.SetStateAction<number>>; // Função para atualizar o estado com tipagem
    valor: number;
}

export default function DisplayFuncoesState(props: FuncoesStateProps) { // Ao declarar o props tipamos o valor que eh recibido do pai tornando o componente mais previsível
    function incrementar() {
        props.fvalor(props.valor + 1);
    }
    function zerar() {
        props.fvalor(0);
    }
    function decrementar() {
        props.fvalor(props.valor - 1);
    }

    
    return (
        <div>
            <h2>Contador</h2>
            <p>Você clicou {props.valor} vezes</p>
            <button onClick={incrementar}>Clique em mim</button>
            <button onClick={zerar}>Zerar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

