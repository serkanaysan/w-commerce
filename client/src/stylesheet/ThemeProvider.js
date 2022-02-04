import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvicer } from "@mui/material"
import { withTranslation } from "react-i18next"
import { AppContext } from '../context/PageProvider'
import { lightTheme, darkTheme } from './'

const ThemeProvider = ({ children, i18n }) => {

    const context = useContext(AppContext)
    const persistentStore = context.wcommerceCore.persistentStore
    const themeMode = persistentStore.getTheme()
    const [theme, setTheme] = useState(themeMode === 'light' ? lightTheme : darkTheme)
    
    useEffect(() => {
        setTheme(themeMode === 'light' ? lightTheme : darkTheme)
    }, [context.theme])
    
    return (
        <MuiThemeProvicer theme={theme}>
            <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </MuiThemeProvicer>
    )
}

export default withTranslation()(ThemeProvider)