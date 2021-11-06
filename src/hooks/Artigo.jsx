import React, { createContext , useContext, useState} from 'react';

export const ArtigoContext = createContext({})

function ArtigoProvider({children}){

  const [artigoAtivo, setArtigoAtivo] = useState(0)

  return(
    <ArtigoContext.Provider value={{artigoAtivo, setArtigoAtivo}}>
    {children}
    </ArtigoContext.Provider>
  )
}
function useArtigo(){
  const context = useContext(ArtigoContext)
  return context
}


export { ArtigoProvider, useArtigo }