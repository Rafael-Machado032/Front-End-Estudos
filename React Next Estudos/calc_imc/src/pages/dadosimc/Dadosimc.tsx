import React from 'react';
import { useRouter } from 'next/router';

export default function DadosImc() {
    const [nome, setNome] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [imc, setImc] = React.useState('');

    const router = useRouter();
    const { p_peso, p_altura, p_imc } = router.query;

    React.useEffect(() => {
        if (p_peso) setPeso(String(p_peso));
        if (p_altura) setAltura(String(p_altura));
        if (p_imc) setImc(String(p_imc));
    }, [p_peso, p_altura, p_imc]);

    return (
        <div>
            <div>
                <h1>Dados do IMC</h1>
                <div className='campoform'>
                    <label>Nome: </label>
                    <input className='inputDados' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className='campoform'>
                    <label>Peso: </label>
                    <input className='inputDados' type="text" value={peso} readOnly />
                </div>
                <div className='campoform'>
                    <label>Altura: </label>
                    <input className='inputDados' type="text" value={altura} readOnly />
                </div>
                <div className='campoform'>
                    <label>IMC: </label>
                    <input className='inputDados' type="text" value={imc} readOnly />
                </div>
                <div className='campoform'>
                    <label htmlFor="">Data: </label>
                    <input className='inputDados' type="text" value={new Date().toLocaleDateString()} readOnly />
                </div>
                <div className='campoform'>
                    <button>Gravar</button>
                </div>
            </div>
            <div>
                <h2>Histórico</h2>
                <div >
                    <div className='grid'>
                        <div className='gridLinhaTitulos'>
                            <div className='gridTitulos'>Nome</div>
                            <div className='gridTitulos'>Peso</div>
                            <div className='gridTitulos'>Altura</div>
                            <div className='gridTitulos'>IMC</div>
                            <div className='gridTitulos'>Data</div>
                        </div>
                    </div>
                    <div className='gridLinhaDados'>
                        <tr className='gridLinhas'>
                            <td className='gridLinha'>{nome}</td>
                            <td className='gridLinha'>{peso}</td>
                            <td className='gridLinha'>{altura}</td>
                            <td className='gridLinha'>{imc}</td>
                            <td className='gridLinha'>{new Date().toLocaleDateString()}</td>
                        </tr>
                    </div>
                </div>
            </div>
        </div>
    );
}
