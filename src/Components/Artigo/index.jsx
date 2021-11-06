import React from 'react';
import styles from './styles.module.scss'

export function Artigo({children}){
  return(
    <article className={styles.container}>
      {children}
    </article>
  )
}