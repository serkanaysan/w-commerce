import React, { useContext } from "react"
import { withTranslation } from "react-i18next"
import { AppBar, IconButton, Toolbar, Typography, Button, Switch } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { AppContext } from "../context/PageProvider"

const HomePage = ({ t }) => {
    
    const title = t('title')

    const context = useContext(AppContext)
    const wcommerceCore = context.wcommerceCore
    const persistentStore = wcommerceCore.persistentStore
    const themeMode = persistentStore.getTheme()
    const checked = themeMode === 'light' ? false : true

    const onChangeSwitch = (e) => {
        const checked = e.target.checked
        
        if(checked) {
            persistentStore.setTheme('dark')
            context.setTheme('dark')
        } else {
            persistentStore.setTheme('light')
            context.setTheme('light')
        }
    }
    

    return (
        <AppBar position="sticky">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <Switch checked={checked} onChange={onChangeSwitch} />
            </Toolbar>
        </AppBar>
    )
}

export default withTranslation()(HomePage)