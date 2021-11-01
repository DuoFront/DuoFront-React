import React from "react"
import './styles/global.scss'

import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

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
