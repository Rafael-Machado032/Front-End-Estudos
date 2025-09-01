import Link from "next/link";

export default function Links() {
    return (
        <div>
            <h1>Links</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/paginas/Pagina1">
                            Página 1
                        </Link>
                    </li>
                    <li>
                        <Link href="/paginas/Pagina2">
                        {/*A pagina tem que estar dentro da pasta page se não a tag Link não acha */}
                            Página 2
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}