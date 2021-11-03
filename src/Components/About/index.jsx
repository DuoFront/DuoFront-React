import React from "react"
import styles from './About.module.scss'
import '../Card/Card.scss'
import { Card } from '../Card'

export function About(){
  return(
    <section className={styles.about}>
      <h2 className={styles.about__title}>Sobre a plataforma</h2>
      <Card style="card">
      <p className={styles.about__text}>Aprenda com projetos
      ao fim de cada módulo!</p>
      </Card>
      <Card style="card card--left">
      <p className={styles.about__text}>Teste seus conhecimentos
      com nossos quizzes!</p>
      </Card>
    </section>
  )
}