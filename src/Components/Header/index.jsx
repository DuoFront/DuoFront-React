import React from 'react'
import './Header.scss'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'

export function Header({lista}){

  return(
    <header className="header">
      <h1 className="header__title"><Link to="/">DuoFront</Link></h1>
      <Navigation lista={lista}/>
    </header>
  )
}