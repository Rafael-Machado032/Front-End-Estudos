import React from 'react';

const carros = [
    { id: 1, categoria: 'Esportivo', marca: 'Ford', modelo: 'Mustang', ano: 2020 },
    { id: 2, categoria: 'Esportivo', marca: 'Chevrolet', modelo: 'Camaro', ano: 2019 },
    { id: 3, categoria: 'Esportivo', marca: 'Dodge', modelo: 'Challenger', ano: 2021 },
    { id: 4, categoria: 'SUV', marca: 'Toyota', modelo: 'Supra', ano: 2020 },
    { id: 5, categoria: 'SUV', marca: 'Nissan', modelo: '370Z', ano: 2018 },
    { id: 6, categoria: 'Utilitarios', marca: 'BMW', modelo: 'M4', ano: 2021 },
    { id: 7, categoria: 'Utilitarios', marca: 'Audi', modelo: 'RS5', ano: 2019 },
    { id: 8, categoria: 'Utilitarios', marca: 'Mercedes-Benz', modelo: 'C63 AMG', ano: 2020 },
]

export default function FiltragemSelect() {
    const [categoria, setCategoria] = React.useState("");
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