import { useState } from 'react'
import Header from './components/Header'
import { IconA } from './components/Icon'
import { IconB } from './components/Icon'
import Image from './components/Image'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <IconA/>
    <IconB/>
    <br/>
    <Image imageUrl='https://picsum.photos/200/300' />
      <h1>hlo</h1>
    </>
  )
}

export default App
