import Link from "next/link";

export default function LinksComParametros() {
    return (
        <div>
            <h1>Links Com Parametros</h1>
            <nav>
                <ul>
                    <li>
                        <Link href={{
                            pathname: "/paginas/Pagina1Parametro",
                            query: { 
                                nome: "Rafael",
                                curso: "React"
                            }
                        }}>
                            Página 1
                        </Link>
                    </li>
                    <li>
                        <Link href={{
                            pathname: "/paginas/Pagina2Parametro"
                        }}>
                            {/*A pagina tem que estar dentro da pasta page se não a tag Link não acha */}
                            Página 2
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}