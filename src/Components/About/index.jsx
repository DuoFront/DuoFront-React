import React from "react"
import './About.scss'
import '../Card/Card.scss'
import { Card } from '../Card'

export function About(){
  return(
    <section className="about">
      <h2 className="about__title">Sobre a plataforma</h2>
      <Card style="card">
      <p className="about__text">Aprenda com projetos
      ao fim de cada módulo!</p>
      </Card>
      <Card style="card card--left">
      <p className="about__text">Teste seus conhecimentos
      com nossos quizzes!</p>
      </Card>
    </section>
  )
}