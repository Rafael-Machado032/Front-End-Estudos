
export default function Tailwind() {
  return (
    <div className="p-4">{/* Para utilizar Tailwind CSS, é necessário setar uma className*/}
      <h1 className="text-2xl font-bold">Tailwind CSS</h1>{/* Cada formatação é feita através de classes utilitárias */}
      <p className="mt-2 text-gray-600">Um framework CSS utilitário para criar designs personalizados.</p>
      {/* Pode criar o proprio class e imcorporar no globals.css*/}
    </div>
  )
}
