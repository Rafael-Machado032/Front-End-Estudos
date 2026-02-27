import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Header'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* O Header fica fora do main, no topo do body */}

      <main className="flex-grow"> {/* O main "abraça" todo o conteúdo dinâmico */}
        <Hero />
        {/* Aqui você colocaria outras seções como <Servicos />, <Depoimentos />, etc */}
      </main>

      <Footer /> {/* O Footer fica fora do main, no final do body */}
    </div>
  )
}

export default App
