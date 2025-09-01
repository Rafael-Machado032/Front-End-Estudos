import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Pagina1Parametro() {
    const router=useRouter();//Cria um objeto router onde guarda as informações da url
    const { nome, curso } = router.query;//Faz a coleta dos parâmetros da URL
    //
    return (
        <div>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <h1>Página 1</h1>
            <p>Nome: {nome}</p>
            <p>Curso: {curso}</p>
        </div>
    );
}
