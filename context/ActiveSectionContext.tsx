"use client"
import React, { createContext, useContext, useState } from 'react'
import { SectionName } from '@/types'



interface ActiveSectionContextProps {
    children : React.ReactNode
}

interface ActiveSectionContextType {
    activeSection : SectionName
    setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick : number,
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>
}
const ActiveSectionContext = createContext<ActiveSectionContextType | null >(null)

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext)
    if(context === null){
        throw new Error("useActiveSection context must be used within an ActiveContextSectionProvider")
    }
    return context
}



const ActiveSectionContextProvider:React.FC<ActiveSectionContextProps> = ({children}) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick,setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider