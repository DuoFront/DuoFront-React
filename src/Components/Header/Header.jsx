import React, { useContext } from 'react'
import './Header.scss'
import {MenuContext} from './MenuContext'

const listaMenu = [
  {id:1, link: 'https://www.google.com', text: 'Layouts'},
  {id:2, link: 'https://www.google.com', text: 'Teste'},
  {id:3, link: 'https://www.google.com', text: 'Cadastrar'},
]

export function Header({lista = listaMenu, onClick}){

  const { menu } = useContext(MenuContext)
  console.log({menu})

  return(
    <header className="header">
      <h1 className="header__title">DuoFront</h1>
      <ion-icon
            class="menu-mobile-outline menu"
            name="menu-outline"
            onClick={menu}
            style={{
              display: menu == 'open' ? 'none' : 'block'
            }}
        ></ion-icon>
        <ion-icon
            class="menu-mobile-close close"
            name="close-outline"
            onClick={menu}
            style={{
              display: menu == 'open' ? 'none' : 'block'
            }}
          ></ion-icon>
      <nav>
        <ul className="header__menu">
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
        </ul>
      </nav>
    </header>
  )
}