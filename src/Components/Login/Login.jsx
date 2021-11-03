import React from "react"
import styles from './Login.module.scss'
import { ButtonDefault } from '../ButtonDefault/ButtonDefault'

export function Login() {
  return (
    <main className={styles.mainLogin}>
      <h1 className={styles.mainLogin__logo}>DuoFront</h1>
      <h2 className={styles.mainLogin__title}>
          Pronto para iniciar sua jornada?
      </h2>
      <ButtonDefault>
      <ion-icon name="logo-github"></ion-icon>
          <span className={styles.btn__text}>Entrar com github</span>
      </ButtonDefault>
    </main>
  )
}