import React from 'react'
import { useContext } from 'react'

export const ContextProvider = React.createContext({
    themeMode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{}
})
  

export const ThemeProvider = ContextProvider.Provider

// custom hooks
export default function useTheme(){
    return useContext(ContextProvider)
}
