import React from 'react';
import erro from '../../assets/img/404.png'
import './Page404.scss'
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
export function Page404() {
  return (
    <>
      <Header />
      <div className="main">
        <h1 className="main__text">Oops, essa página não existe</h1>
        <img className="main__img" src={erro} />
      </div>
      
    </>
  )
}