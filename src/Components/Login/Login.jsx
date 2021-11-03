import React from "react"
import './Login.scss'
import { ButtonDefault } from '../ButtonDefault/ButtonDefault'

export function Login() {
  return (
    <main className="mainLogin">
      <h1 className="mainLogin__logo">DuoFront</h1>
      <h2 className="mainLogin__title">
          Pronto para iniciar sua jornada?
      </h2>
      <ButtonDefault>
      <ion-icon name="logo-github"></ion-icon>
          <span className="btn__text">Entrar com github</span>
      </ButtonDefault>
    </main>
  )
}