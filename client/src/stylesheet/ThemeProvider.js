import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvicer } from "@mui/material"
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { withTranslation } from "react-i18next"
import { AppContext } from '../context/PageProvider'
import { lightTheme, darkTheme, THEME_MODES } from './'

const ThemeProvider = ({ children, i18n }) => {

    const context = useContext(AppContext)
    const persistentStore = context.wcommerceCore.persistentStore
    const themeMode = persistentStore.getTheme()
    const [theme, setTheme] = useState(themeMode === THEME_MODES.LIGHT ? lightTheme : darkTheme)

    const rtl = i18n.language === 'ar'
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [rtlPlugin],
    });
    
    useEffect(() => {
        setTheme(themeMode === THEME_MODES.LIGHT ? lightTheme : darkTheme)
    }, [context.theme])
    
    return (
        <MuiThemeProvicer theme={theme}>
            <div dir={rtl ? 'rtl' : 'ltr'}>
                {rtl && <CacheProvider value={cacheRtl}>{children}</CacheProvider>}
                {!rtl && children}
            </div>
        </MuiThemeProvicer>
    )
}

export default withTranslation()(ThemeProvider)