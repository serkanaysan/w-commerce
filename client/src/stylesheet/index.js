import { createTheme } from "@mui/material"

export const THEME_MODES = {
    LIGHT: 'light',
    DARK: 'dark'
}

const theme = createTheme({
    
})

export const lightTheme = createTheme({
    ...theme,
    direction: 'rtl',
    palette: {
        mode: THEME_MODES.LIGHT
    }
})

export const darkTheme = createTheme({
    ...theme,
    direction: 'ltr',
    palette: {
        mode: THEME_MODES.DARK
    }
})