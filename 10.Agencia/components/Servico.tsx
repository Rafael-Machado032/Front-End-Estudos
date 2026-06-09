import React from 'react'

export default function Servico() {
  return (
    <section className='w-full max-w-5xl mx-auto text-center p-6 bg-[#f7f7f7]'>
      <h2 className='text-xl text-black'>Algumas empresas que tivemos a oportunidade de atuar.</h2>
      <div className='flex flex-col w-full mt-10 gap-y-6 md:flex-row'>
        <div className='w-full flex justify-center border border-[#ccc] p-6'>
          <img src="/img/bianchini.png" alt="bianchini" />
        </div>
        <div className='w-full flex justify-center border border-[#ccc] p-6'>
          <img src="/img/rancho.png" alt="rancho" />
        </div>
        <div className='w-full flex justify-center border border-[#ccc] p-6'>
          <img src="/img/hoepcke.png" alt="hoepcke" />
        </div>
        <div className='w-full flex justify-center border border-[#ccc] p-6'>
          <img src="/img/monguilhott.png" alt="monguilhott" />
        </div>
      </div>

    </section>
  )
}
