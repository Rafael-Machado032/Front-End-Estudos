import React from 'react'
import etapa1 from "../assets/etapas/round_etapas_01.jpg"
import etapa2 from "../assets/etapas/round_etapas_02.jpg"
import etapa3 from "../assets/etapas/round_etapas_03.jpg"

export default function Etapas() {
  return (
    <section className='w-full max-w-6xl'>
      <div className='text-center flex flex-col font-bold text-2xl p-10'>
        <h3>Sem dúvidas, serve pra você!</h3>
      <h3>Veja como funciona:</h3>
      </div>
      
      <div className='flex gap-4'>
        <div className='w-1/2'>
          <div className='flex items-center'>
            <div style={{ backgroundImage: `url(${etapa1})` }} className='w-68 aspect-square bg-center bg-no-repeat bg-contain'></div>
            <p className='text-[#509d87] px-8'>Aparelho tradicional e Invisalign</p>
          </div>
          <div className='flex justify-end'>
            <div style={{ backgroundImage: `url(${etapa2})` }} className='w-54 aspect-square bg-center bg-no-repeat bg-contain'></div>
          </div>
          <div>
            <div style={{ backgroundImage: `url(${etapa3})` }} className='w-60 aspect-square bg-center bg-no-repeat bg-contain'></div>
          </div>
        </div>

        <div className='w-1/2'>
          <div className='flex'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center w-28 aspect-square border-2 rounded-full border-[#ccc]'>1</div>     
              <div className='bg-black w-px h-10'></div>
            </div>
            <div className='max-w-110 m-4'>
              <h3 className='text-[#03ca9f]'>Lorem ipsum</h3>
              <p className='text-[#2d2d2d]'>Deserunt proident in occaecat est consectetur non elit et adipisicing laboris eu id ut cillum esse in ut quis.</p>
            </div>
          </div>
          
          <div className='flex'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center w-28 aspect-square border-2 rounded-full border-[#ccc]'>2</div>     
              <div className='bg-black w-px h-10'></div>
            </div>
            <div className='max-w-110 m-4 '>
              <h3 className='text-[#03ca9f]'>Lorem ipsum</h3>
              <p className='text-[#2d2d2d]'>Deserunt proident in occaecat est consectetur non elit et adipisicing laboris eu id ut cillum esse in ut quis.</p>
            </div>
          </div>

          <div className='flex'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center w-28 aspect-square border-2 rounded-full border-[#ccc]'>3</div>     
              <div className='bg-black w-px h-10'></div>
            </div>
            <div className='max-w-110 m-4 '>
              <h3 className='text-[#03ca9f]'>Lorem ipsum</h3>
              <p className='text-[#2d2d2d]'>Deserunt proident in occaecat est consectetur non elit et adipisicing laboris eu id ut cillum esse in ut quis.</p>
            </div>
          </div>

          <div className='flex'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center w-28 aspect-square border-2 rounded-full border-[#ccc]'>4</div>
            </div>
            <div className='max-w-110 m-4 '>
              <h3 className='text-[#03ca9f]'>Lorem ipsum</h3>
              <p className='text-[#2d2d2d]'>Deserunt proident in occaecat est consectetur non elit et adipisicing laboris eu id ut cillum esse in ut quis.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
