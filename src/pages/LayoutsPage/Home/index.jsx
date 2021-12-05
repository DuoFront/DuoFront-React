import React from 'react';
import { Header } from '../../../Components/Header';
import { Footer } from '../../../Components/Footer';
import flexBox from '../../../assets/img/Layouts/flexBox.jpg';
import { CardLayout } from '../../../Components/CardLayout';
import styles from './styles.module.scss'

export function Home(){
  return(
    <>
    <Header/>
    <main className={styles.main}>
      <h2 className={styles.main__title}>O <strong>segredo</strong> é praticar!!</h2>
      <section className={styles.main__cards}>

      <CardLayout title="FlexBox - music" level="iniciante" module="html/css" image={flexBox}link="flexBox"/>
      <CardLayout title="FlexBox - music" level="iniciante" module="html/css" image={flexBox}link="flexBox"/>
      <CardLayout title="FlexBox - music" level="iniciante" module="html/css" image={flexBox}link="flexBox"/>
      <CardLayout title="FlexBox - music" level="iniciante" module="html/css" image={flexBox}link="flexBox"/>
      <CardLayout title="FlexBox - music" level="iniciante" module="html/css" image={flexBox}link="flexBox"/>
      <CardLayout title="FlexBox - music" level="iniciante" module="html/css" image={flexBox}link="flexBox"/>
      </section> 

      </main>
    <Footer/>
    </>
  )
}