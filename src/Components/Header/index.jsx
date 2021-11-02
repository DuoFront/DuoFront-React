import React from 'react'
import './Header.scss'
import { Navigation } from './Navigation'

export function Header({lista}){

  return(
    <header className="header">
      <h1 className="header__title">DuoFront</h1>
      <Navigation lista={lista}/>
    </header>
  )
}