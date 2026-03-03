import React from 'react'
import fotosobre from "../assets/rosto.png";

export default function Sobre() {
  return (
    <section className='flex flex-col w-full mt-10 xl:flex-row -z-10'>
        <div style={{ backgroundImage: `url(${fotosobre})` }} className='w-full aspect-video bg-contain bg-no-repeat xl:w-1/2'></div>
        <div className='w-full min-h-110 text-center flex flex-col gap-4 px-4 py-10 mr-10 xl:w-1/2 xl:py-0 xl:text-start'>
            <h2 className='text-[#a9c4b8] text-4xl'>O futuro chegou, e ele é transparente!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum. Praesent sodales lacinia ipsum.</p>
            <h2 className='text-[#a9c4b8] text-4xl'>Conheça o procedimento com a <span className='text-[#03ca9f]  font-bold'>Dra. Leda Monguilhott</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum. Praesent sodales lacinia ipsum.</p>
        </div>
    </section>
  )
}
