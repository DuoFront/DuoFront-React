import React, { createContext ,useContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

  const [user, setUser] = useState(null);

  function signIn(){
    const paola = {
      nome: 'paola',
      avatar_url: 'https:/github.com/paolaguedes.png'
    }

    setUser(paola)
  }
  function signOut(){
    setUser(null)
  }
  return(
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth}