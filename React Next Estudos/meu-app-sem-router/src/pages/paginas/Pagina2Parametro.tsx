import React from 'react';
import Link from 'next/link';

export default function Pagina2Parametro() {
    return (
        <div>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <h1>Página 2</h1>
        </div>
    );
}
