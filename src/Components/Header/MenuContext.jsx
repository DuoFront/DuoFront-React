import React, { useState, createContext } from 'react'

export const MenuContext = createContext('open')

export function MenuProvider(props){
    const [menu, setMenu] = useState('open')

    function handleToggleMenu(){
		setMenu((prevState) => (
		prevState == 'open' 
		? 'close' 
		: 'open'
		))
	}

    return(
        <MenuContext.Provider 
            value={{
                menu,
                onToggleMenu: handleToggleMenu,
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}
