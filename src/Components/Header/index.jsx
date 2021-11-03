import React from 'react'
import styles from './Header.module.scss'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'

export function Header({lista}){

  return(
    <header className={styles.header}>
      <h1 className={styles.header__title}><Link to="/">DuoFront</Link></h1>
      <Navigation lista={lista}/>
    </header>
  )
}