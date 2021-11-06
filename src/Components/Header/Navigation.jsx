import React, {useState} from "react"
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../../hooks/Auth"
import { Link } from "react-router-dom"

export function Navigation({lista}) {

  let iconOpen = true
  const [showMenu, setShowMenu] = useState(false)
  const { user, signOut, signUrl } = useAuth()

  let menu

  if (showMenu) {
    iconOpen = null
    menu =  
    (<ul className={styles.header__menu}>
      <FontAwesomeIcon 
    icon={faTimes}
    className={styles.iconMenu} //posiciona com position fixed aki 
    onClick={ () => (setShowMenu(!showMenu))}
    />
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
      <li className={styles.header__menu__card}>
      <li className={styles.header__menu__card__img}>
        <img src={user.avatar_url} alt={user.name} className={styles.avatar}/>
        {user.name}
      </li>
      <span className={styles.header__menu__card__btn} onClick={signOut} >
        <FontAwesomeIcon icon={faSignOutAlt}/>
        Sair
      </span>
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
  </ul>)
  }

  return (
    <>
    <div className="header2__ative">
    <nav>
      {
        iconOpen &&
        <FontAwesomeIcon 
    icon={faBars}
    className={styles.header__icon}
    onClick={ () => (setShowMenu(!showMenu))}
    />
      }
    
    { menu }
    </nav>
    </div>
  </>
  )
}