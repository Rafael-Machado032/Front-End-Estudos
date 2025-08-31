


export default function ArrayObjeto() {
    const alunos = [ //Array alunos
        { id: 1, nome: 'João', idade: 20 },
        { id: 2, nome: 'Maria', idade: 22 },
        { id: 3, nome: 'Pedro', idade: 21 },
    ];

    return (
        <div>
            <h1>Array de Objetos</h1>
            {
                alunos.map(a => (
                    <div key={a.id}>
                        <h2>{a.nome}</h2>
                        <p>Idade: {a.idade}</p>
                    </div>
                ))
            }
        </div>
    );
}