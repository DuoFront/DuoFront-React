import React from "react"
import styles from './Login.module.scss'
import { ButtonDefault } from '../ButtonDefault/ButtonDefault'
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/Auth"

export function Login() {

  const {signUrl} = useAuth();

  return (
    <main className={styles.mainLogin}>
      <h1 className={styles.mainLogin__logo}><Link to="/">DuoFront</Link></h1>
      <h2 className={styles.mainLogin__title}>
    
          Pronto para iniciar sua jornada?
      </h2>
      <ButtonDefault>
        <a href={signUrl}>
      <ion-icon name="logo-github"></ion-icon>
          <span className={styles.btn_text}>Entrar com github</span>
        </a>
      </ButtonDefault>
    </main>
  )
}