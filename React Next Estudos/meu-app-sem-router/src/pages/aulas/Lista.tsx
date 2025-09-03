import React from "react";

const Cursos = [
  { id: "aula1", nome: "Aula 1" },
  { id: "aula2", nome: "Aula 2" },
  { id: "aula3", nome: "Aula 3" },
];

export default function Lista() {
  const [selecionado, setSelecionado] = React.useState("aula1");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // React.ChangeEvent<HTMLSelectElement> é a tipagem do evento do select
    setSelecionado(event.target.value);//passa o valor selecionado para a função
  };

  return (
    <div>
      <h1>Lista no select</h1>
      <select value={selecionado} onChange={handleChange}>
        {Cursos.map((curso) => (
          <option key={curso.id} value={curso.id}>
            {curso.nome}
          </option>
        ))}
      </select>
      <p>Opção selecionada: {selecionado}</p>
    </div>
  );
}

