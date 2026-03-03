import React from 'react'
import logo2 from "../assets/logo2.jpg"

export default function Diferencas() {
  return (
    <section className='flex flex-col justify-center items-center gap-4 text-center text-xl w-full max-w-4xl my-10 lg:flex-row lg:gap-30'>
      <div className=' text-gray-400 flex flex-col'>
        <h2 className='w-40 h-13 text-3xl'>Tradicional</h2>
        <span className=' '>Aparelho Fixo</span>
        <div className='bg-[#e89595] h-1 -rotate-6 relative -top-4'></div>
        <span className=' '>Aparelho Fixo</span>
        <div className='bg-[#e89595] h-1 -rotate-6 relative -top-4'></div>
        <span className=' '>Aparelho Fixo</span>
        <div className='bg-[#e89595] h-1 -rotate-6 relative -top-4'></div>
        <span className=' '>Aparelho Fixo</span>
        <div className='bg-[#e89595] h-1 -rotate-6 relative -top-4'></div>
        <span className=' '>Aparelho Fixo</span>
        <div className='bg-[#e89595] h-1 -rotate-6 relative -top-4'></div>
        <span className=' '>Aparelho Fixo</span>
        <div className='bg-[#e89595] h-1 -rotate-6 relative -top-4'></div>
      </div>
      <div className='w-px bg-[#646464]'></div>
      <div className='flex flex-col text-[#7dd5b0] gap-1'>
        <div style={{ backgroundImage: `url(${logo2})` }} className='w-40 h-13 bg-contain bg-center bg-no-repeat'></div>
        <span>Aparelho Fixo</span>
        <span>Aparelho Fixo</span>
        <span>Aparelho Fixo</span>
        <span>Aparelho Fixo</span>
        <span>Aparelho Fixo</span>
        <span>Aparelho Fixo</span>
      </div>
    </section>
  )
}
