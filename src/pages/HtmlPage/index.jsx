import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { SideBar } from '../../Components/SideBar';
import { Aula1 } from './Aula1';
import { Aula2 } from './Aula2';
import { HeaderModulo } from '../../Components/HeaderModulo';
import { Footer } from '../../Components/Footer';
import { Aula3 } from './Aula3';
import { Aula4 } from './Aula4';
import { Page404 } from '../Page404';
import { ArtigoProvider } from '../../hooks/Artigo';
export function HTMLPage(){

  const listaMenu = [
    { id: 1, link: '/html/aula1', text: 'Introdução' },
    { id: 2, link: '/html/aula2', text: 'Tags de texto' },
    { id: 3, link: '/html/aula3', text: 'Tags de conteúdo' },
    { id: 4, link: '/html/aula4', text: 'Listas' },
    { id: 5, link: '/html/aula5', text: 'Formulário' },
    { id: 6, link: '/html/aula6', text: 'Tabela' },
    { id: 7, link: '/html/aula7', text: 'Iframes, video e audio' },
    { id: 8, link: '/html/teste', text: 'Teste de conhecimento' },
  ]

  return(
 
    <ArtigoProvider>
      <SideBar lista={listaMenu} modulo="HTML" />
      <HeaderModulo lista={listaMenu} modulo="HTML" />
      <Switch>
      <Route path="/html/aula1">
        <Aula1 />
      </Route>
      <Route path="/html/aula2">
        <Aula2/>
      </Route>
      <Route path="/html/aula3">
        <Aula3/>
      </Route>
      <Route path="/html/aula4">
        <Aula4/>
      </Route>
      <Route>
        <Page404/>
      </Route>
    </Switch>
    <Footer tipo="footerModulo" />
    </ArtigoProvider>
 
  )
}