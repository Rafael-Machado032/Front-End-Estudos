// components/Hero.tsx
import React from 'react'

export default function Hero() {
  return (
    <section className="bg-[url(/img/bg.jpg)] bg-cover bg-center h-135 w-full flex items-center text-white">

      <div className='mx-auto w-full max-w-7xl flex justify-center lg:justify-start'>
        <div className='w-160 flex flex-col gap-4 p-8 text-center lg:text-start'>
          <h1 className=" text-5xl">Você vendendo mais <br /> com automação web.</h1>
          <p>Nós criamos soluções de marketing para sua empresa vender mais, da melhor forma.</p>
          <form action="" className='flex flex-col gap-2 justify-center items-center lg:justify-start sm:flex-row'>
            <input type="email" name="f_email" id="f_email" placeholder='Seu email...' className='bg-white rounded-full text-black px-4 py-2 focus:outline-none w-full max-w-90' />
            <button className='bg-[#ff5f27] px-4 py-2 rounded-full shrink-0'>Quero saber mais!</button>
          </form>
        </div>

      </div>

    </section>

  )
}
