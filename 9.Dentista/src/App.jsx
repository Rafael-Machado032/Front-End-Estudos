import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header'
import Header from './components/Header'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import Footer from './components/Footer'
import bg1 from './assets/bg_01.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen font-roboto">
      <section style={{backgroundImage:`url(${bg1})`}} className='bg-size-[100%_100%] bg-no-repeat bg-center h-175'>
        <Header />
        <div className='w-full h-px bg-gray-400'></div>
        <Hero />
      </section>
      <main className=""> 
        <Diferenciais />
        
      </main>

      <Footer /> {/* O Footer fica fora do main, no final do body */}
    </div>
  )
}

export default App
