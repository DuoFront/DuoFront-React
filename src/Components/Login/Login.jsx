import React from "react"
import './Login.scss'
import { ButtonDefault } from '../ButtonDefault/ButtonDefault'
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/Auth"

export function Login() {

  const {signUrl} = useAuth();

  return (
    <main className="mainLogin">
      <h1 className="mainLogin__logo"><Link to="/">DuoFront</Link></h1>
      <h2 className="mainLogin__title">
          Pronto para iniciar sua jornada?
      </h2>
      <ButtonDefault>
        <a href={signUrl}>
      <ion-icon name="logo-github"></ion-icon>
          <span className="btn__text">Entrar com github</span>
        </a>
      </ButtonDefault>
    </main>
  )
}