import React from 'react'

export default function Descricao2() {
  return (
    <section className='w-full max-w-4xl mx-auto flex flex-col p-6 gap-6 md:flex-row'>
      <div className='w-full md:w-1/2 flex flex-col gap-6'>
        <h2 className='text-xl'>Nós somos uma agência digital. Trabalhamos seu posicionamento, conteúdo e estética, sempre focado em conversão</h2>
        <p>Converse com a nossa equipe ainda hoje e crie um plano de marketing para o seu negócio!</p>
      </div>
      <div className='w-full md:w-1/2 px-2 flex justify-center'>
        <img src="/img/mockup1.jpg" alt="mockup1" />
      </div>

    </section>
  )
}
