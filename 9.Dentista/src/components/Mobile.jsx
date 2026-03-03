import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Mobile() {
  const [mobile, setMobile] = useState(false);

  return (
    <div className='block lg:hidden'>
      <FontAwesomeIcon
        icon={faBars}
        style={{ color: "rgb(255, 255, 255)", cursor: "pointer" }}
        size='2xl'
        onClick={() => setMobile(!mobile)} // Corrigido aqui
      />

      <nav className={`absolute left-0 w-full z-50 overflow-hidden transition-all duration-500 ease-in-out ${mobile ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id='menu_mobile'>
        <ul className='px-8'>
          <li className='flex'>
            <a href="#" className='w-full text-center border border-black bg-emerald-400 hover:bg-emerald-500 py-2'>Invisalign</a>
          </li>
          <li className='flex'>
            <a href="#" className='w-full text-center border border-black bg-emerald-400 hover:bg-emerald-500 py-2'>Benefícios</a>
          </li>
          <li className='flex'>
            <a href="#" className='w-full text-center border border-black bg-emerald-400 hover:bg-emerald-500 py-2'>Serve para mim?</a>
          </li>
          <li className='flex'>
            <a href="#" className='w-full text-center border border-black bg-emerald-400 hover:bg-emerald-500 py-2'>Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}


