import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from '@fortawesome/free-solid-svg-icons'
import React from "react"
import './Layout.scss'

export function Layout() {
  return(
    <section className="layout">
      <div className="layout__img"></div>
      <div className="layout__text">
        <p className="layout__title">Pratique com nossos layouts</p>
        <a className="layout__link" href="">
          Galeria de layouts
          <FontAwesomeIcon className="layout__icon" icon={faLink}/>
        </a>
      </div>
    </section>
  )
}