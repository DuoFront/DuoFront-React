import React from "react"
import './Button.scss'

export function Button({link,text}){
  return(
    <a 
    href={link} 
    className="courses__btn" 
    >{text}</a>
  )
}