import React from 'react'
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className='w-full bg-[#6CC5B2] flex justify-center p-4'>
      <div style={{backgroundImage: `url(${logo})`}} className="bg-no-repeat bg-center bg-contain w-40 h-19"></div>
    </footer>
  )
}

