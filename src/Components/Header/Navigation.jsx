import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../../hooks/Auth"
const listaMenu = [
  {id:1, link: 'https://www.google.com', text: 'Layouts'},
  {id:2, link: 'https://www.google.com', text: 'Teste'},
  {id:3, link: 'https://www.google.com', text: 'Cadastrar'},
]

export function Navigation({lista = listaMenu}){

  let iconOpen = faBars
  const [showMenu, setShowMenu] = useState(false)
  const {user, signOut, signIn} = useAuth()

  let menu

  if(showMenu){
    iconOpen = faTimes
    menu =  
    (<ul className="header__menu">
    {
      lista.map((item) => (
        <li key={item.id}>
          <a
          className="header__link"
          href={item.link}>
            {item.text}
            </a>
        </li>
      ))
    }
    {user &&
    <>
      <li onClick={signOut} className="header__link">Logout</li>
      <img src={user.avatar_url} alt={user.nome} className="avatar"/>
      <li>{user.nome}</li>
    </>
    }
    {!user &&
    
      <li onClick={signIn} className="header__link">Entrar</li>
    }
  </ul>)
  }
  
  return(
    <nav>
    <FontAwesomeIcon 
    icon={iconOpen}
    className="header__icon"
    onClick={ () => (setShowMenu(!showMenu))}
    />
    { menu }
  </nav>
  )
}