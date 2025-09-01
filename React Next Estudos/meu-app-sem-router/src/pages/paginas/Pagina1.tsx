import React from 'react';
import Link from 'next/link';

export default function Pagina1() {
    return (
        <div>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <h1>Página 1</h1>
        </div>
    );
}
