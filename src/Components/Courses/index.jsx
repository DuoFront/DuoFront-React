import React from "react"
import { Button } from "../Button"
import './Courses.scss'

const btns = [
  {id:1, link:'/html',text:'HTML'},
  {id:2, link:'#',text:'CSS'},
  {id:3, link:'#',text:'JavaScript'},
]

export function Courses(){
  return(
    <section className="courses">
      <h2 className="courses__title">Nossos módulos</h2>
      <div className="courses__buttons">
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