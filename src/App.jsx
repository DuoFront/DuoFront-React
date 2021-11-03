import React from "react"
import './styles/global.scss'
import { AuthProvider } from "./hooks/Auth"
import { LandingPage} from './pages/LadingPage'
import { HTMLPage } from "./pages/HtmlPage"
import { LoginPage } from "./pages/LoginPage"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Page404 } from "./pages/Page404"

function App() {
  
  const listaInicial = [
    {id:1, link: 'https://www.google.com', text: 'aff'},
    {id:3, link: 'https://www.google.com', text: 'Cadastrar'},
  ]

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route path='/html'>
            <HTMLPage/>
          </Route>
          <Route path='/'>
            <LoginPage/>
          </Route>
          <Route>
            <Page404/>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
