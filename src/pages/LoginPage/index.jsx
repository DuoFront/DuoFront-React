import React from 'react';
import { Login } from '../../Components/Login/Login'
import { AsideLogin } from '../../Components/AsideLogin/AsideLogin'
import './index.scss'

export function LoginPage() {
  return (
    <main className="mainContent">
      <Login/>
      <AsideLogin/>
    </main>
  )
}