import React from 'react'

export default function Contato() {
  return (
    <section className='w-full flex flex-col justify-center bg-[#98FCDE] p-4 '>
      <div className='text-center text-[#509d87] w-full max-w-3xl mx-auto p-4 border-b border-gray-500'>
        <h2 className='text-2xl font-bold m-3'>Entre em contato</h2>
        <p>Telefone: (48) 3222-6591</p>
        <p>Email: contato@monguilhott.com.br</p>
        <p>Endereço:Avenida Rio Branco, 354 Edifício Maxim's 3° Andar / Sala 301 - Florianópolis/SC</p>
      </div>
      <form className='flex flex-col w-full max-w-3xl mx-auto gap-3 m-4'>
        <input type="text" className='w-full border border-gray-400 rounded-2xl bg-white p-2' name="nome" id="nome" placeholder='*Nome' required/>
        <input type="email" className='w-full border border-gray-400 rounded-2xl bg-white p-2' name="email" id="email" placeholder='*Email' required />
        <input type="tel" className='w-full border border-gray-400 rounded-2xl bg-white p-2' name="telefone" id="telefone" placeholder='*Telefone' required/>
        <textarea  className='w-full border border-gray-400 rounded-2xl bg-white p-2 h-40 resize-none' name="mensagem" id="mensagem" placeholder='*Mensagem'></textarea>
        <div>
          <button className='bg-[#00daaa] text-white rounded-full px-16 py-4'>Enviar!</button>
        </div>
        
      </form>
      
    </section>
  )
}
