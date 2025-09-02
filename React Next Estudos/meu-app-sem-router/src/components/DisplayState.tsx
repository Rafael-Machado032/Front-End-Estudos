export default function DisplayState(props: { valor: number }) { // Ao declarar o props tipamos o valor que eh recibido do pai tornando o componente mais previsível
    return (
        <div>
            <h2>Contador</h2>
            <p>Você clicou {props.valor} vezes</p>
        </div>
    );
}

