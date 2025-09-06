import React from 'react';
import Campform from '../../components/Campform';
import TabelaImc from '@/components/Tabelaimc';
import Link from 'next/link';

export default function CalcImc() {
    const [peso, setPeso] = React.useState<number | "">("");
    const [altura, setAltura] = React.useState<number | "">("");
    const [imc, setImc] = React.useState<number | null>(null);

    function calcularIMC(peso: number, altura: number): number {
        const alturaEmMetros = altura / 100; // Convertendo cm para metros
        return parseFloat((peso / (alturaEmMetros * alturaEmMetros)).toFixed(2));
    }

    return (
        <div className='flex flex-col items-center gap-4 mt-10 border-2 border-black w-[400px] max-w-md bg-white'>
            <h1 className='text-center font-bold bg-gray-200 p-2 rounded w-[100%]'>Calculadora de IMC</h1>
            <Campform label="Peso: " state={peso} funcState={setPeso} />
            <Campform label="Altura: " state={altura} funcState={setAltura} />
            <button
                className=' w-[80%] px-5 py-2 mt-2 bg-blue-400 text-white rounded hover:bg-blue-500 cursor-pointer'
                onClick={() => { setImc(calcularIMC(Number(peso), Number(altura))) }}
            >
                Calcular IMC
            </button>
            <Link href={{
                pathname: '/dadosimc/Dadosimc',
                query: {
                    p_peso: peso,
                    p_altura: altura,
                    p_imc: imc
                }
            }} className=' w-[80%] px-5 py-2 mt-2 bg-gray-400 text-white rounded hover:bg-gray-500 cursor-pointer text-center'>
                Ver Dados do IMC
            </Link>
            <h2>Seu IMC é: {imc?.toFixed(2)}</h2>
            <p>{imc ? (imc < 18.5 ? "Abaixo do peso" : imc < 25 ? "Peso normal" : imc < 30 ? "Sobrepeso" : "Obesidade") : ""}</p>
            <TabelaImc />
        </div>
    );
}