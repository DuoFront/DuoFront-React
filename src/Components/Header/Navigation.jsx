import React, {useState} from "react"
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../../hooks/Auth"
import { Link } from "react-router-dom"

export function Navigation({lista}) {

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
             {item.icon}
             {item.text}
            </Link>
        </li>
      ))
    }
    {user &&
    <>
      <li onClick={signOut} className={styles.header__menu__card}>Logout</li>
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
  </ul>)
  }

  return (
    <>
    <div className="header2__ative">
    <nav>
    <FontAwesomeIcon 
    icon={iconOpen}
    className={styles.header__icon}
    onClick={ () => (setShowMenu(!showMenu))}
    />
    { menu }
    </nav>
    </div>
  </>
  )
}