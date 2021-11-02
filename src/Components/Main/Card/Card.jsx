import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Card({children, style}){
  return(
    <article data-aos="flip-up" className={style}>
      {children}
      {AOS.init()}
    </article>
  )
}