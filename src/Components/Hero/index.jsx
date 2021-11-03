import React from "react"
import './Hero.scss'
import logo from "../../assets/img/gatos/logo.png"
import { TypeWriter } from "../TypeWriter"
export function Hero(){

  return(
      <section className="hero">
        <article className="hero__card">
          <h1 className="hero__title">
          <TypeWriter value="Aprenda front-end de forma completa" indice={1}/>
          </h1>
        </article>
        <article className="hero__card">
          <img className="hero__img" src={ logo }/>
        </article>
      </section>
  )
}