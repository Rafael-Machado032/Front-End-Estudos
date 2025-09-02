import { useState } from 'react';
import DisplayFuncoesState from '@/components/DisplayFuncoesState';

export default function FuncoesState() {
    const [count, setCount] = useState<number>(0); //Como é typescript posso tipar a variavel count
    // É um tipo de variavel que rederiza o componente quando seu valor é alterado
    
    return (
        <div>
            <h2>Uso das funções state para componentes</h2>
            <DisplayFuncoesState valor={count} fvalor={setCount} />
        </div>
    );
}