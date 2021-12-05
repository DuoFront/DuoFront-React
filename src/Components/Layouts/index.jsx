import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import React from "react"
import styles from './Layout.module.scss'

export function Layout() {
  return(
    <section className={styles.layout}>
      <div className={styles.layout__img}></div>
      <div className={styles.layout__text}>
        <p className={styles.layout__title}>Pratique com nossos layouts</p>
        <Link className={styles.layout__link} to="/layouts/home">
          Galeria de layouts
          <FontAwesomeIcon className={styles.layout__icon} icon={faLink}/>
        </Link>
      </div>
    </section>
  )
}