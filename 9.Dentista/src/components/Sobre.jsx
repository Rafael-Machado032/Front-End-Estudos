import React from 'react'
import fotosobre from "../assets/rosto.png";

export default function Sobre() {
  return (
    <section className='flex w-full mt-10'>
        <div style={{ backgroundImage: `url(${fotosobre})` }} className='w-1/2 min-h-100 bg-contain bg-no-repeat'></div>
        <div className='w-1/2 max-w-3xl flex flex-col gap-4 px-2 mr-10'>
            <h2 className='text-[#a9c4b8] text-4xl'>O futuro chegou, e ele é transparente!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum. Praesent sodales lacinia ipsum.</p>
            <h2 className='text-[#a9c4b8] text-4xl'>Conheça o procedimento com a <span className='text-[#03ca9f]  font-bold'>Dra. Leda Monguilhott</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed consequat tortor. Praesent sodales lacinia ipsum. Praesent sodales lacinia ipsum.</p>
        </div>
    </section>
  )
}
