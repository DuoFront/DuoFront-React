import React from 'react'
import styles from './Header.module.scss'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'
import { useAuth } from "../../hooks/Auth"


const listaMenu = [
  { id: 1, link: '#', text: 'Layouts' },
  { id: 3, link: '#', text: 'Cadastrar' },
]

export function Header(){

  const { user, signOut, signUrl } = useAuth()

  return(
    <header className={styles.header}>
      <h1 
      className={styles.header__title}
      >
        <Link to="/">DuoFront</Link>
      </h1>
      <nav className={styles.header__desktop}>
      <ul className={styles.header__menu__desktop}>
      {
      listaMenu.map((item) => (
        <li key={item.id} className={styles.header__link}>
          <Link
          to={item.link}>
             {item.text}
            </Link>
        </li>
      ))
      }
      {user &&
      <>
        <li onClick={signOut} className={styles.header__link}>Logout</li>
        <img src={user.avatar_url} alt={user.name} className={styles.avatar}/>
        <li>{user.name}</li>
      </>
      }
      {!user &&
        <li className={styles.header__link}>
          <Link to="/login">
            Entrar
          </Link>
        </li>
      }
      </ul>
      </nav>
      <Navigation lista={listaMenu}/>
    </header>
  )
}