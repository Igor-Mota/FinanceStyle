import React, { createContext, useContext, useState } from 'react'
import styles from '../styles/index'

const ThemesContext = createContext()

export default function themeProvider({ children }) {
    const [changeTheme, setChangeTheme] = useState('dark')
    return (
        <ThemesContext.Provider
            value={{
                changeTheme,
                setChangeTheme,
            }}
        >
            {children}
        </ThemesContext.Provider>
    )
}
export function useTheme() {
    const context = useContext(ThemesContext)
    const { changeTheme, setChangeTheme } = context

    return { changeTheme, setChangeTheme }
}
