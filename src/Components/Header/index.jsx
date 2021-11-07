import React from 'react'
import styles from './Header.module.scss'
import { Navigation }  from './Navigation'
import { Link } from 'react-router-dom'
import { useAuth } from "../../hooks/Auth"
import logo from '../../assets/img/Duo.png'

const listaMenu = [
  { id: 8, link: '/', text: <img className={styles.header__menu__logo} src={logo}/> },
  { id: 1, link: '/layouts', text: 'Layouts' },
  { id: 2, link: '/', text: <h3 className={styles.header__menu__title}>Módulos</h3> },
  { id: 3, link: '/html/aula1', text: 'HTML' },
  { id: 4, link: '/css', text: 'CSS' },
  { id: 5, link: '/javascript', text: 'JavaScript' },
  { id: 6, link: '#', text: <hr className={styles.header__menu__hr}/> },
  { id: 7, link: '/login', text: 'Cadastrar' },
]

const listaDesktop = [
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
      listaDesktop.map((item) => (
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
        <li onClick={signOut} className={styles.header__menu__card__desk}>
        <li  className={styles.header__link}>
          <img src={user.avatar_url} alt={user.name} className={styles.avatar}/>
        </li>
        </li>
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