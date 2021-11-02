import React from 'react';
import erro from '../../assets/img/404.png'
import './Page404.scss'

export function Page404(){
  return(
    <div className="main">
    <h1 className="main__text">Oops, essa página não existe</h1>
    <img className="main__img" src={erro}/>
    </div>
  )
}