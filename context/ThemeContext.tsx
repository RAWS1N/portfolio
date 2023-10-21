"use client"
import  { createContext, useContext, useEffect, useState } from 'react'

type ThemeType = "light" | "dark"
interface ThemeContextTypes {
    theme : ThemeType,
    toggleTheme : () => void
}

interface ThemeContextProps {
    children : React.ReactNode
}

const ThemeContext = createContext<ThemeContextTypes | null >(null)

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useThemeContext context must be used within an ThemeContextProvider")
    }
    return context
}

const ThemeContextProvider:React.FC<ThemeContextProps> = ({children}) => {
    const [theme,setTheme] = useState<ThemeType>('light')

    useEffect(() => {
        const themeValue = localStorage.getItem('theme') as ThemeType | null
        if(themeValue){
            setTheme(themeValue)
            if(themeValue === 'dark'){
                document.documentElement.classList.add("dark")
            }
        }else if(window.matchMedia('(prefers-color-scheme:dark)').matches) {
            setTheme('dark')
            document.documentElement.classList.add("dark")
        }
        
    },[])

    const toggleTheme = () => {
        setTheme(prevState => {
            if(prevState === 'dark'){
                localStorage.setItem("theme","light")
                document.documentElement.classList.remove("dark")
                return "light"
            }
            else {
                localStorage.setItem('theme','dark')
                document.documentElement.classList.add("dark")
                return 'dark'
            }
        })
    }

    return (
        <ThemeContext.Provider value={{toggleTheme,theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider