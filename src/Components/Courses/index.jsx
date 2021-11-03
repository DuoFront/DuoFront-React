import React from "react"
import { Button } from "../Button"
import styles from './Courses.module.scss'

const btns = [
  {id:1, link:'/html',text:'HTML'},
  {id:2, link:'#',text:'CSS'},
  {id:3, link:'#',text:'JavaScript'},
]

export function Courses(){
  return(
    <section className={styles.courses}>
      <h2 className={styles.courses__title}>Nossos módulos</h2>
      <div className={styles.courses__buttons}>
      {
        btns.map((item) => (
          <Button 
          key={item.id}
          link={item.link}
          text={item.text}/>
        ))
      }
      </div>
    </section>
  )
}