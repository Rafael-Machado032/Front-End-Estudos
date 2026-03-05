import React from 'react'

export default function Portifolio() {
  return (
    <section className='flex flex-col gap-4 py-10 w-full max-w-6xl mx-auto'>

      <div className='text-xl text-center flex flex-col justify-center items-center pt-6'>
        <h2 >Como podemos ajudar sua empresa</h2>
        <svg className='w-6 h-6 text-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(0, 0, 0)" d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z"/></svg>
      </div>
      <div className='grid max-w-sm  mx-auto  gap-20 p-8 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 md:max-w-full'>
        <div className='shadow-xl '>
          <img src="/img/img1.jpg" alt="img1" className='w-full' />
          <div className='p-6 flex flex-col items-start gap-2 text-[#6a7c92]'>
            <h2 className='text-xl text-black'>E-mail Marketing</h2>
            <p>Aprenda como utilizar e-mail marketing na sua empresa para alavancar suas vendas de uma forma automatizada.</p>
            <button className='border border-[#6a7c92] rounded-full px-4 py-2'>Orçamento</button>
          </div>
        </div>
        <div className=' shadow-xl '>
          <img src="/img/img2.jpg" alt="img2" className='w-full' />
          <div className='p-6 flex flex-col items-start gap-2 text-[#6a7c92]'>
            <h2 className='text-xl text-black'>Páginas de Venda</h2>
            <p>Criamos páginas de venda 100% otimizadas e voltadas para conversões. Solicite um orçamento e tenha hoje mesmo a sua página para vender na internet.</p>
            <button className='border border-[#6a7c92] rounded-full px-4 py-2'>Orçamento</button>
          </div>
        </div>
        <div className=' shadow-xl '>
          <img src="/img/img3.jpg" alt="img3" className='w-full' />
          <div className='p-6 flex flex-col items-start gap-2 text-[#6a7c92]'>
            <h2 className='text-xl text-black'>Páginas de Captura e Inscrição</h2>
            <p>Capture o e-mail dos visitantes em seu site e crie uma base de leads para sua empresa.</p>
            <button className='border border-[#6a7c92] rounded-full px-4 py-2'>Orçamento</button>
          </div>
        </div>
        <div className=' shadow-xl '>
          <img src="/img/img4.jpg" alt="img4" className='w-full' />
          <div className='p-6 flex flex-col items-start gap-2 text-[#6a7c92]'>
            <h2 className='text-xl text-black'>SEO & Marketing de Conteúdo</h2>
            <p>Aplicamos SEO no seu website para o mesmo ficar bem posicionado nos mecanismos de busca e ser achado facilmente.</p>
            <button className='border border-[#6a7c92] rounded-full px-4 py-2'>Orçamento</button>
          </div>
        </div>
        <div className=' shadow-xl '>
          <img src="/img/img5.jpg" alt="img5" className='w-full' />
          <div className='p-6 flex flex-col items-start gap-2 text-[#6a7c92]'>
            <h2 className='text-xl text-black'>ADWords & Facebook ADS</h2>
            <p>Criamos campanhas altamente otimizadas para o seu negócio gerar mais vendas pelo menor custo.</p>
            <button className='border border-[#6a7c92] rounded-full px-4 py-2'>Orçamento</button>
          </div>
        </div>
        <div className='shadow-xl '>
          <img src="/img/img6.jpg" alt="img6" className='w-full' />
          <div className='p-6 flex flex-col items-start gap-2 text-[#6a7c92]'>
            <h2 className='text-xl text-black'>Consultoria de Marketing Digital</h2>
            <p>Precisa de ajuda e planejamento de marketing no seu negócio? Fale com a Danki Code, hoje mesmo, para
							criarmos um plano de marketing a longo prazo e 100% voltado para vendas.</p>
            <button className='border border-[#6a7c92] rounded-full px-4 py-2'>Orçamento</button>
          </div>
        </div>
      </div>


    </section>
  )
}
