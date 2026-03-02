import React from 'react'
import circle1 from '../assets/circle/circle01.png'
import circle2 from '../assets/circle/circle02.png'
import circle3 from '../assets/circle/circle03.png'
import circle4 from '../assets/circle/circle04.png'

export default function Hero() {
  return (
    <div className='flex justify-between w-full max-w-4xl mx-auto py-10 gap-4'>
      <div className='w-1/2 gap-4 flex flex-col'>
        <h2 className='text-[#509d87] text-[37px] leading-11'>Seu sorriso perfeito através de um tratamento discreto e inovador, em Florianópolis</h2>
        <p className='leading-5 text-[15px]'>Alinhe seus dentes com conforto, praticidade e liberdade! <span className='font-bold'>Deixe seu email</span> para que a Dra. Leda possa entrar em contato e agendar uma avaliação gratuita.</p>
        <form className='flex gap-2'>
          <input type="email" name="email" id="i_email" className='bg-white border-4 border-gray-300 rounded-full px-2 py-1 w-66' />
          <button className='bg-[#00daaa] text-white rounded-full px-4 py-2'>Quero saber mais!</button>
        </form>
        <span className='text-[#509d87] text-[13px] mt-8'>Ou ligue para a Clínica Monguilhott (48) 3222-6591</span>
      </div>
      <div className='grid grid-cols-2 grid-rows-[repeat(2,min-content)] w-fit h-fit gap-4'>
        <div style={{ backgroundImage: `url(${circle1})` }} className="bg-no-repeat bg-center bg-contain w-43 aspect-square"></div>
        <div style={{ backgroundImage: `url(${circle2})` }} className="bg-no-repeat bg-center bg-contain w-43 aspect-square"></div>
        <div style={{ backgroundImage: `url(${circle3})` }} className="bg-no-repeat bg-center bg-contain w-43 aspect-square"></div>
        <div style={{ backgroundImage: `url(${circle4})` }} className="bg-no-repeat bg-center bg-contain w-43 aspect-square"></div>
      </div>
    </div>

  )
}
