import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvicer } from "@mui/material"
import { AppContext } from '../context/PageProvider'
import { lightTheme, darkTheme } from './'

const ThemeProvider = ({ children }) => {

    const context = useContext(AppContext)
    const persistentStore = context.wcommerceCore.persistentStore
    const themeMode = persistentStore.getTheme()
    const [theme, setTheme] = useState(themeMode === 'light' ? lightTheme : darkTheme)
    
    useEffect(() => {
        setTheme(themeMode === 'light' ? lightTheme : darkTheme)
    }, [context.theme])
    
    return (
        <MuiThemeProvicer theme={theme}>
            {children}
        </MuiThemeProvicer>
    )
}

export default ThemeProvider