import React from 'react'
import logo from '../assets/logo.png'


export default function Header() {
  return (
    <header className='w-full max-w-4xl mx-auto py-6 flex justify-between text-white'>
      <div style={{backgroundImage: `url(${logo})`}} className="bg-no-repeat bg-center bg-contain w-40 h-19"></div>
      <nav>
        <ul className='flex gap-8'>
          <li><a href="#">Invisalign</a>
          <span></span></li>
          <li><a href="#">Benefícios</a>
          <span></span></li>
          <li><a href="#">Serve para mim?</a>
          <span></span></li>
          <li><a href="#">Contato</a>
          <span></span></li>
        </ul>
      </nav>
      <h2 className='text-2xl'>(48) 3222-6591</h2>
    </header>
  )
}

