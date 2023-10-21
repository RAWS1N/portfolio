import { useActiveSectionContext } from "@/context/ActiveSectionContext"
import type { SectionName } from "@/types"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"


const useSectionInView = (sectionName:SectionName,threshold=0.75) => {
    const {setActiveSection,timeOfLastClick} = useActiveSectionContext()
    const {ref,inView} = useInView({threshold})
  
    useEffect(() => {
      if(inView && Date.now() - timeOfLastClick > 1000){
        setActiveSection(sectionName)
      }
    },[inView,setActiveSection,timeOfLastClick,sectionName])

    return {
        ref
    }
}

export default useSectionInView