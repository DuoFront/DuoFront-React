import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export function SideBar(){
  return(
    <aside className="aside2">
      <div className="aside2__title-container">
        <h2 className="aside2__title">HTML</h2>
      </div>
      <ul className="aside2__lista">
        <li  className="aside2__item">
          <Link to="#">Introdução</Link>
        </li>
        <li className="aside2__item">
          <Link to="#">Tags de Texto</Link>
        </li>
        <li className="aside2__item">
          <Link to="#">Tags de conteúdo</Link>
        </li>
        <li className="aside2__item">
          <Link to="#">Listas</Link>
        </li>
        <li className="aside2__item">
          <Link to="#">Formulário</Link>
        </li>
        <li className="aside2__item">
          <Link to="#">Tabela</Link>
        </li>
        <li className="aside2__item">
          <Link to="#">Iframes, video e audio</Link>
        </li>
        <li className="aside2__item">
          <Link to="#">Teste de conhecimento</Link>
        </li>
      </ul>
    </aside>
  )
}