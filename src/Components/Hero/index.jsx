import React from "react"
import './Hero.scss'
import logo from "../../assets/img/logo.png"

export function Hero(){

  return(
      <section className="hero">
        <article className="hero__card">
          <h1 className="hero__title">
          Aprenda <span className="text--purple">front-end</span> de forma completa 
          </h1>
        </article>
        <article className="hero__card">
          <img className="hero__img" src={ logo }/>
        </article>
      </section>
  )
}