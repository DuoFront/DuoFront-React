import React from "react"
import styles from './Footer.module.scss'
export function Footer(){
  return(
    <footer className={styles.footer}>
      <p>&copy; copyright, 2021</p>
      <p>Alex | Paola</p>
    </footer>
  )
}