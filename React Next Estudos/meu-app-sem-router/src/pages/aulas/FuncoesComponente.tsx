import { useState } from 'react';
import DisplayFuncoes from '@/components/DisplayFuncoes';

export default function FuncoesComponente() {
    const [count, setCount] = useState<number>(0); //Como é typescript posso tipar a variavel count
    // É um tipo de variavel que rederiza o componente quando seu valor é alterado
    function incrementar() {
        setCount(count + 1);
    }
    function zerar() {
        setCount(0);
    }
    function decrementar() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Uso das funções para componentes</h2>
            <DisplayFuncoes valor={count} incrementar={incrementar} zerar={zerar} decrementar={decrementar} />
        </div>
    );
}