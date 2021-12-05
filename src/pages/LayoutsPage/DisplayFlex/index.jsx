import React from 'react';
import { HeaderModulo } from '../../../Components/HeaderModulo';
import { SideBar } from '../../../Components/SideBar';
import { Footer } from '../../../Components/Footer';
import { Switch, Route } from 'react-router-dom';
import { Aula1 } from './Aula1';
export function DisplayFlex(){

  const listaMenu = [
    { id: 1, link: '/layouts/flexBox/aula1', text: 'Introdução' },
    { id: 2, link: '/layouts/flexBox/aula2', text: 'Tags de texto' },
    { id: 3, link: '/layouts/flexBox/aula3', text: 'Tags de conteúdo' },
    { id: 4, link: '/layouts/flexBox/aula4', text: 'Listas' },
    { id: 5, link: '/layouts/flexBox/aula5', text: 'Formulário' },
    { id: 6, link: '/layouts/flexBox/aula6', text: 'Tabela' },
    { id: 7, link: '/layouts/flexBox/aula7', text: 'Iframes, video e audio' },
    { id: 8, link: '/layouts/flexBox/teste', text: 'Teste de conhecimento' },
  ]

  return(
    <>
    <SideBar lista={listaMenu} modulo="FlexBox" />
      <HeaderModulo lista={listaMenu} modulo="FlexBox" />
      <Switch>
      <Route path="/layouts/flexBox/aula1">
        <Aula1 />
      </Route>
    </Switch>
    <Footer tipo="footerModulo" />
    </>
  )
}