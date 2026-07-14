import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Micomponente from './MiComponente'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<H1>Lista de componentes</H1>
<MiComponente/>
<MiComponente/>
<MiComponente/>
    </>
  )
}

export default App
