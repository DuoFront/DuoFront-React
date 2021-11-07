import React from "react"
import styles from './Hero.module.scss'
import logo from "../../assets/img/gatos/logo.png"
import { TypeWriter } from "../TypeWriter"
export function Hero(){

  return(
      <section className={styles.hero}>
        <article className={styles.hero__card}>
          <h1 className={styles.hero__title}>
          <TypeWriter value="Aprenda front-end de forma completa" indice={1}/>
          </h1>
        </article>
        <article className={styles.hero__card}>
          <img className={styles.hero__img} src={ logo }/>
        </article>
        <div className={styles.baloon}></div>
      </section>
  )
}