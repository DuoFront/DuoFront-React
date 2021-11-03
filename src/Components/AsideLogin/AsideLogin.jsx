import React from "react"
import styles from './AsideLogin.module.scss'

export function AsideLogin() {
  return (
    <aside className={styles.aside}>
        <h2 className={styles.aside__title}>
          Seja um desenvolvedor <strong>Front-end</strong>
        </h2>

        <div className={styles.aside__imagens}>
          <div>
            <img src="https://github.com/alexRicc2.png" alt="" />
            <p>Alex</p>
          </div>
          <div>
            <img src="https://github.com/paolaguedes.png" alt="" />
            <p>Paola</p>
          </div>
        </div>
        <div className={styles.traco1}></div>
        <div className={styles.traco2}></div>
        <div className={styles.circulo1}><span>&lt;</span></div>
        <div className={styles.circulo2}><span>/&gt;</span></div>
      </aside>
  )
}