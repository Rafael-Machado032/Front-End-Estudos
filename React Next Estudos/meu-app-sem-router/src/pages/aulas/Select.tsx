import React from "react";



export default function Select() {
  const [selecionado, setSelecionado] = React.useState("aula1");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // React.ChangeEvent<HTMLSelectElement> é a tipagem do evento do select
    setSelecionado(event.target.value);//passa o valor selecionado para a função
  };

  return (
    <div>
      <h1>Componente Select</h1>
      <select value={selecionado} onChange={handleChange}>
        <option value="aula1">Aula 1</option>
        <option value="aula2">Aula 2</option>
        <option value="aula3">Aula 3</option>
      </select>
      <p>Opção selecionada: {selecionado}</p>
    </div>
  );
}

