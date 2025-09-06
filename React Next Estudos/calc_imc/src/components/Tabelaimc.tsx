export default function TabelaImc() {
    return (

        <div className=" pb-4 w-[90%] text-center">
            <h2 className="font-bold mb-2">Tabela de IMC</h2>
            <table className="w-full border-2 border-black text-center">
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className="border-2 border-black">
                    <tr className="border-2 border-black">
                        <td className="border-2 border-black">Abaixo do Peso</td>
                        <td className="border-2 border-black">&lt; 18.5</td>
                    </tr>
                    <tr className="border-2 border-black">
                        <td className="border-2 border-black">Peso Normal</td>
                        <td className="border-2 border-black">18.5 - 24.9</td>
                    </tr>
                    <tr className="border-2 border-black">
                        <td className="border-2 border-black">Sobrepeso</td>
                        <td className="border-2 border-black">25 - 29.9</td>
                    </tr>
                    <tr className="border-2 border-black">
                        <td className="border-2 border-black">Obesidade</td>
                        <td className="border-2 border-black">&gt; 30</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
