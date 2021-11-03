import React from "react"
import styles from './Button.module.scss'

export function ButtonDefault({children}) {
  return (
      <button className={styles.btnDefault}>
      {children}
      </button>
  )
}