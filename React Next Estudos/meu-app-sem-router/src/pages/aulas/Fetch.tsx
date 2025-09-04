import React from 'react';

let carros: any[] = [];

export default function Fetch() {
    const [categoria, setCategoria] = React.useState("");
    
    React.useEffect(() => {
        fetch("http://127.0.0.1:1880/carros")
            .then((response) => response.json())
            .then((json) => {
                carros = json;
                console.log(carros);
            });
    }, []);

    return (
        <div>
            <h1>Filtragem por Select</h1>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Todos</option>
                <option value="Esportivo">Esportivo</option>
                <option value="SUV">SUV</option>
                <option value="Utilitarios">Utilitarios</option>
            </select>
            <div className='flex flex-col max-w-2xl'>
                <div className='flex flex-wrap p-0!'>
                    <div className=' mb-0! pl-5! w-1/4 border-0!'>Categoria</div>
                    <div className=' mb-0! pl-5! w-1/4 border-0!'>Marca</div>
                    <div className=' mb-0! pl-5! w-1/4 border-0!'>Modelo</div>
                    <div className=' mb-0! pl-5! w-1/4 border-0!'>Ano</div>
                </div>
                {carros.filter((carro) => categoria === "" || carro.categoria === categoria).map((carro) => (
                    <div key={carro.id} className='flex flex-wrap p-0! m-0!'>
                        <div className=' mb-0! pl-5! w-1/4 border-0!'>{carro.categoria}</div>
                        <div className=' mb-0! pl-5! w-1/4 border-0!'>{carro.marca}</div>
                        <div className=' mb-0! pl-5! w-1/4 border-0!'>{carro.modelo}</div>
                        <div className=' mb-0! pl-5! w-1/4 border-0!'>{carro.ano}</div>
                    </div>
                ))}

            </div>
        </div>
    );
}