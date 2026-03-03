import React from 'react'
import bg2 from "../assets/bg_02.png"

export default function Depoimentos() {
  return (
    <section style={{ backgroundImage:`url(${bg2})`}} className='flex justify-center items-center bg-size-[100%_100%] bg-no-repeat bg-center h-125 w-full relative -top-22 p-4'>
      <div className='text-center max-w-4xl flex flex-col gap-2'>
        <h2 className='text-3xl'>"Sensação de liberdade é perceber que você não está amarrado a nada"</h2>
        <p>Invisalign</p>
      </div>

    </section>
  )
}
