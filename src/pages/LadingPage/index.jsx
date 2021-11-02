import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../Components/Header';
import { About } from '../../Components/About';
import { Courses } from '../../Components/Courses';
import { Layout } from '../../Components/Layouts';
import { Hero } from '../../Components/Hero';
export function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Courses />
      <About />
      <Layout />
      <Footer />
    </main>
  )
}