import React from 'react';
import { Route, Switch} from 'react-router-dom'
import { Home } from './Home';
import { DisplayFlex } from './DisplayFlex';
export function LayoutsPage(){
  return(
    <Switch>
      <Route path="/layouts/home">
        <Home/>
      </Route>
      <Route path="/layouts/flexBox/aula1">
        <DisplayFlex/>
      </Route>
    </Switch>
  )
}