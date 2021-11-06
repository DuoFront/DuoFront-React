import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { useArtigo } from '../../hooks/Artigo';
export function SideBar({lista, modulo}){

  const { artigoAtivo } = useArtigo()

  return(
    <aside className="aside2">
      <div className="aside2__title-container">
        <h2 className="aside2__title">{modulo}</h2>
      </div>
      <ul className="aside2__lista">
        {
          lista.map((item, index) => {
            if(index+1 != artigoAtivo){
              return(
              <li  className="aside2__item" key={item.id}>
                <Link to={item.link}>{item.text}</Link>
             </li>
              )              
            }
            return(
              <li  className="aside2__item" key={item.id}>
                <Link to={item.link} className="ativo">{item.text}</Link>
             </li>
            )
          })
        }
        
      </ul>
    </aside>
  )
}