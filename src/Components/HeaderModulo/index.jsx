import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './styles.scss';
export function HeaderModulo({lista, modulo}){

  let iconOpen = faBars
  const [showMenu, setShowMenu] = useState(false)

  let menu

  if (showMenu) {
    iconOpen = faTimes
    menu =
      (      
      <ul className="header2__menu">
        <li className="header2__modulo">
          <h1>{modulo}</h1>
        </li>
        {
          lista.map((item) => (
            <li key={item.id}  className="header2__link">
              <Link
               
                to={item.link}>
                {item.text}
              </Link>
            </li>
          ))
        }
      </ul>
      )
  }



  return(
    <header className="header2">
      
      <h1 className="header2__title"><Link to="/">DuoFront</Link></h1>
    
      <div className="header2__ative">
      <nav>
      <FontAwesomeIcon
        icon={iconOpen}
        className="header2__icon"
        onClick={() => (setShowMenu(!showMenu))}
      />
      {menu}

      </nav>
      </div>
    </header>
  )
}