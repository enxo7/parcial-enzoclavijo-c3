import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

  const [persona, setPersona] = useState({
    nombre: '',
    cantanteFavorito: ''
})

const [show, setShow] = useState(false)


  return (
    <>

      <Form setPersona={setPersona} persona={persona} setShow={setShow}/>
      {show && <Card persona={persona}/>}
    </>
  )
}

export default App
