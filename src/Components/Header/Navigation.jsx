import React, {useState} from "react"
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../../hooks/Auth"
import { Link } from "react-router-dom"

const listaMenu = [
  { id: 1, link: '#', text: 'Layouts' },
  { id: 3, link: '#', text: 'Cadastrar' },
]

export function Navigation({ lista = listaMenu}) {

  let iconOpen = faBars
  const [showMenu, setShowMenu] = useState(false)
  const { user, signOut, signUrl } = useAuth()

  let menu

  if (showMenu) {
    iconOpen = faTimes
    menu =  
    (<ul className={styles.header__menu}>
    {
      lista.map((item) => (
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
    
      <li className={styles.header__link}><Link to="/login">Entrar</Link></li>
    }
  </ul>)
  }

  return (
    <nav>
    <FontAwesomeIcon 
    icon={iconOpen}
    className={styles.header__icon}
    onClick={ () => (setShowMenu(!showMenu))}
    />
    { menu }
  </nav>
  )
}