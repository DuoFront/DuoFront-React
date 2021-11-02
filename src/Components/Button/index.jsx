import React from "react"
import './Button.scss'
import { Link } from "react-router-dom"

export function Button({link,text}){
  return(
    <Link
    to={link} 
    className="courses__btn" 
    >{text}</Link>
  )
}