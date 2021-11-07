import React, { createContext ,useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){

  const [user, setUser] = useState(      
  {name: 'Paola',
  avatar_url: 'https:/github.com/paolaguedes.png'}
  );

  const signUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=52b1114afd0fcfd479e7`

  async function signIn(githubCode){
    const paola = {
      nome: 'paola',
      avatar_url: 'https:/github.com/paolaguedes.png'
    }
    const response = await api.post('authenticate',{code: githubCode})
    const {token , user } = response.data;

    localStorage.setItem('usuario:token',token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    setUser(user)

    //setUser(paola)
  }
  function signOut(){
    setUser(null)
    localStorage.removeItem('usuario:token')
  }
  useEffect(() => {
    const token = localStorage.getItem('usuario:token')

    if(token){
      api.defaults.headers.common.authorization = `Bearer ${token}`
      api.get('profile').then(response => {
        setUser(response.data)
      })
    }
  },[])

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");
    if(hasGithubCode){
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);
      signIn(githubCode)
    }
  })

  return(
    <AuthContext.Provider value={{user, signIn, signOut, signUrl}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth}