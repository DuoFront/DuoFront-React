import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const listaMenu = [
  {id:1, link: 'https://www.google.com', text: 'Layouts'},
  {id:2, link: 'https://www.google.com', text: 'Teste'},
  {id:3, link: 'https://www.google.com', text: 'Cadastrar'},
]

export function Navigation({lista = listaMenu}){

  let iconOpen = faBars
  const [showMenu, setShowMenu] = useState(false)
  
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