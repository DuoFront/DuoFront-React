import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Hero } from '../../Components/Hero';
import { SideBar } from '../../Components/SideBar';
import { Aula1 } from './Aula1';
import { HeaderModulo } from '../../Components/HeaderModulo';
import { Footer } from '../../Components/Footer';
export function HTMLPage(){

  const listaMenu = [
    { id: 1, link: '#', text: 'Introdução' },
    { id: 2, link: '#', text: 'Tags de texto' },
    { id: 3, link: '#', text: 'Tags de conteúdo' },
    { id: 4, link: '#', text: 'Listas' },
    { id: 5, link: '#', text: 'Formulário' },
    { id: 6, link: '#', text: 'Tabela' },
    { id: 7, link: '#', text: 'Iframes, video e audio' },
    { id: 8, link: '#', text: 'Teste de conhecimento' },
  ]

  return(
 
    <>
      <SideBar />
      <HeaderModulo lista={listaMenu} modulo="HTML" />
      <Switch>
      <Route path="/html/aula1">
        <Aula1 />
      </Route>
      <Route path="/html/aula2">
        <Hero />
      </Route>
    </Switch>
    <Footer tipo="footerModulo" />
    </>
 
  )
}