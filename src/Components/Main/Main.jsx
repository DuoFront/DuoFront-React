import React from "react"

import { Hero } from './Hero/Hero'
import { Courses } from './Courses/Courses'
import { About } from './About/About'
import { Layout } from "./Layouts/Layout"
import { Footer } from "../Footer/Footer"

export function Main(){

  return(
      <main>
        <Hero/>
        <Courses/>
        <About/>
        <Layout/>
        <Footer/>
      </main>
  )
}