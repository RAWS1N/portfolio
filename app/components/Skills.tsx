"use client"

import React from 'react'
import SectionHeading from './Section-Heading'
import { skillsData } from '@/lib/data'
import useSectionInView from '@/hooks/useSectionInView'
import {motion} from 'framer-motion'


const Skills = () => {
    const {ref} = useSectionInView("Skills")

    const fadeInAnimationVariants =  {
        initial : {opacity:0,y:100},
        animate :(idx:number) =>  ({opacity:1,y:0,transition:{delay:0.05*idx}}),
    }

  return (
    <section ref={ref} id="skills" className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40">
        <SectionHeading heading='My Skills'/>
        <ul className="flex items-center flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill,idx) => (
                <motion.li 
                variants={fadeInAnimationVariants} 
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                custom={idx}
                key={idx} 
                className='dark:bg-white/10 dark:text-white/80 bg-white border borderBlack rounded-sm px-5 py-2'>
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills