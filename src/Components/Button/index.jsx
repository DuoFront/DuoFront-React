import React from "react"
import styles from './Button.module.scss'
import { Link } from "react-router-dom"

export function Button({link,text}){
  return(
    <Link
    to={link} 
    className={styles.courses__btn}
    >{text}</Link>
  )
}