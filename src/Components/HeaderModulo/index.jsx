import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './styles.scss';
import { useArtigo } from '../../hooks/Artigo';
import image from '../../assets/img/gatos/logo.png'
export function HeaderModulo({lista, modulo}){

  const { artigoAtivo } = useArtigo() 
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
          lista.map((item, index) => {
            if(index+1 != artigoAtivo){
              return(
              <li  className="header2__link" key={item.id}>
                <Link to={item.link}>{item.text}</Link>
             </li>
              )              
            }
            return(
              <li  className="header2__link" key={item.id}>
                <Link to={item.link} className="ativo">{item.text}</Link>
             </li>
            )
          })
        }
      </ul>
      )
  }



  return(
    <header className="header2">
      <div className="header2__logoContainer">
      <img src={image} alt="logo" className="header2__logo"/>
      <h1 className="header2__title"><Link to="/">DuoFront</Link></h1>
      </div>
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