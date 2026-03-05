import React from 'react'

export default function Formulario() {
  return (
    <section className='flex flex-col gap-4 p-6 items-center'>
      <h2 className='text-xl text-center'>Um orçamento ou alguma dúvida?</h2>
      <form className='flex flex-col items-start w-full max-w-xl gap-4'>
        <input type="text" className='w-full border border-[#ccc] rounded-full p-2' name="nome" id="nome" placeholder='Nome...' required />
        <input type="email" className='w-full border border-[#ccc] rounded-full p-2' name="email" id="email" placeholder='E-mail...' required />
        <input type="tel" className='w-full border border-[#ccc] rounded-full p-2' name="telefone" id="telefone" placeholder='Telefone...' required/>
        <textarea name="mensagem" id="mensgem" className='w-full border border-[#ccc] rounded-xl resize-none h-40 p-2'></textarea>
        <button className='border border-[#ccc] rounded-full px-14 py-2 bg-[#ff5f27] text-white'>Enviar!</button>
      </form>
    </section>
  )
}
