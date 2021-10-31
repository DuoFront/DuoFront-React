import React from "react"
import { Button } from "../Button/Button"
import './Courses.scss'

const btns = [
  {id:1, href:'',text:'HTML'},
  {id:2, href:'',text:'CSS'},
  {id:3, href:'',text:'JavaScript'},
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
          href={item.href}
          text={item.text}/>
        ))
      }
      </div>
    </section>
  )
}