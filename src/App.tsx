import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Landing3 from './Components/Landing3'
import Web3trial from './Components/Web3trail'
import ML from './Components/ML'
import Reviews from './Components/Reviews'
import Devops from './Components/Devops'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      {/* Gradient image */}
      <img className='absolute top-0 right-0 opacity-60 -z-10' src="/gradient.png" alt="" />

      {/* blur effect */}
      <div className='h-0 w-[80vw] max-w-[640px] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10' />
      
      <Header/>
      <Landing3/>
      
      <Web3trial/>
      
      <ML/>
      <Devops/>
      <Reviews/>

    </main>
  )
}

export default App
