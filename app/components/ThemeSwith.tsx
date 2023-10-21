"use client"

import { useThemeContext } from '@/context/ThemeContext'
import { BsMoon, BsSun } from 'react-icons/bs'



const ThemeSwith = () => {
    const {theme,toggleTheme} = useThemeContext()
    
  return (
    <button className="
    fixed 
    right-5 
    h-[3rem] 
    w-[3rem] 
    bottom-5 
    bg-opacity-80 
    backdrop-blur-[0.5rem] 
    bg-white border 
    border-white 
    border-opacity-40 
    shadow-2xl 
    rounded-full 
    flex 
    items-center 
    justify-center
    hover:scale-[1.15]
    active:scale-[1.15]
    transition-all
    dark:bg-gray-950
    dark:border-gray-950
    "
    onClick={toggleTheme}
    >
        {theme === 'dark' ? <BsSun/>:<BsMoon/>}
    </button>
  )
}

export default ThemeSwith