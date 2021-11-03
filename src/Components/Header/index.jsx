import React from 'react'
import styles from './Header.module.scss'
import { Navigation } from './Navigation'

export function Header({lista}){

  return(
    <header className={styles.header}>
      <h1 className={styles.header__title}>DuoFront</h1>
      <Navigation lista={lista}/>
    </header>
  )
}