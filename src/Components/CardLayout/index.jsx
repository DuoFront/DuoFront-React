import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
export function CardLayout({title, level, module, image, link}){
  return(
    <article className={styles.card}>
          <img src={image} alt="" />
          <div className={styles.card__text}>
            <h2 className={styles.card__text__title}>{title}</h2>
            <p className={styles.card__text__level}>{level}</p>
            <p className={styles.card__text__code}>{module}</p>
            <Link className={styles.card__text__btn} to={`/layouts/${link}/aula1`}>fazer</Link>
          </div>
        </article>
  )
}