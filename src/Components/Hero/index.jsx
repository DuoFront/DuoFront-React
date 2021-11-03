import React from "react"
import styles from './Hero.module.scss'
import logo from "../../assets/img/gatos/logo.png"

export function Hero(){

  return(
      <section className={styles.hero}>
        <article className={styles.hero__card}>
          <h1 className={styles.hero__title}>
          Aprenda <span className={styles.hero__title__purple}>front-end</span> de forma completa 
          </h1>
        </article>
        <article className={styles.hero__card}>
          <img className={styles.hero__img} src={ logo }/>
        </article>
      </section>
  )
}