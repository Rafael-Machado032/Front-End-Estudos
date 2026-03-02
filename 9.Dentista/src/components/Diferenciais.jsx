import React from 'react'
import ico1 from "../assets/ico/icone01.png"
import ico2 from "../assets/ico/icone02.png"
import ico3 from "../assets/ico/icone03.png"
import ico4 from "../assets/ico/icone04.png"
import ico5 from "../assets/ico/icone05.png"
import ico6 from "../assets/ico/icone06.png"

export default function Diferenciais() {
  return (
    <section className='grid grid-cols-3 grid-rows-[repeat(2,min-content)] w-full max-w-4xl m-auto gap-6'>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:`url(${ico1})`}} className="bg-no-repeat bg-center bg-contain w-14 h-14"></div>
            <h2 className='text-3xl'>Discreto por ser <span className='font-bold text-[#7dd5b0]'>transparente</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:`url(${ico2})`}} className="bg-no-repeat bg-center bg-contain w-14 h-14"></div>
            <h2 className='text-3xl'>Móvel, <span className='font-bold text-[#7dd5b0]'>não atrapalha</span> para comer ou beber</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:`url(${ico3})`}} className="bg-no-repeat bg-center bg-contain w-14 h-14"></div>
            <h2 className='text-3xl'>Livre de fios ou metais,<span className='font-bold text-[#7dd5b0]'>muito mais conforto!</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:`url(${ico4})`}} className="bg-no-repeat bg-center bg-contain w-14 h-14"></div>
            <h2 className='text-3xl'>Consultas e <span className='font-bold text-[#7dd5b0]'>resultados mais rápidos</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:`url(${ico5})`}} className="bg-no-repeat bg-center bg-contain w-14 h-14"></div>
            <h2 className='text-3xl'>Não atrapalha para <span className='font-bold text-[#7dd5b0]'>falar ou cantar :)</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:`url(${ico6})`}} className="bg-no-repeat bg-center bg-contain w-14 h-14"></div>
            <h2 className='text-3xl'>Veja o resultado <span className='font-bold text-[#7dd5b0]'>antes de começar!</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum.</p>
        </div>

    </section>
  )
}
