import React from "react"
import './App.scss'

import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'

function App() {
  
  const listaInicial = [
    {id:1, link: 'https://www.google.com', text: 'Layouts'},
    {id:2, link: 'https://www.google.com', text: 'Entrar'},
    {id:3, link: 'https://www.google.com', text: 'Cadastrar'},
  ]

  return (
    <>
    <Header lista={listaInicial} />
    <Main/>
    </>
  )
}

export default App
