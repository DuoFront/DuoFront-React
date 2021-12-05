import React from 'react';
import styles from './styles.module.scss';
export function ArtigoLayout({children, link, title}) {
  return (
    <div className={styles.main}>
    <div className={styles.main__video}>
      <h2 className={styles.main__title}>{title}</h2>
      <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      {children}
    </div>
    </div>
  )
}