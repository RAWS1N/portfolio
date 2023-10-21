"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import type { SectionName } from '@/types'




const Header = () => {
  const {activeSection,setActiveSection,setTimeOfLastClick} = useActiveSectionContext()
  
  const handleClick = (link:SectionName) => {
    setActiveSection(link)
    setTimeOfLastClick(Date.now())
  }
  
  return (
    <header className='relative z-[999]'>
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed 
        top-0 left-1/2 
        h-[3.5rem] -translate-x-1/2
        w-full rounded-none 
        border border-white 
        border-opacity-40 bg-white bg-opacity-80
        shadow-lg shadow-black/[0.3] backgrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem]  sm:w-[36rem] sm:rounded-full
        dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75
        "></motion.div>
      <nav className="flex fixed left-1/2 h-12 top-[0.15rem] -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] py-4 gap-2 sm:py-0">
        <ul className="flex 
          items-center 
          justify-center 
          gap-y-1.5 
          text-[0.9rem] 
          w-[22rem] flex-wrap
          font-medium text-gray-500
          sm:w-[initial] sm:flex-nowrap
          sm:gap-5
          ">
          {links.map(link => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative h-3/4 flex items-center justify-center" key={link.hash}>
              <Link className={clsx(`flex 
                items-center 
                justify-center 
                px-3 py-3 
                transition 
                hover:text-gray-950 
                dark:text-gray-500
                dark:hover:text-gray-300
                w-full`, {
                "text-gray-950 dark:text-gray-200": activeSection === link.name,
                
              })}
                href={link.hash}
                onClick={() => handleClick(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                  layoutId='activeSection'
                  transition={{type:"spring",stiffness:380,damping:30}}
                  className="bg-gray-100 dark:bg-gray-800 rounded-full absolute inset-0 -z-10"></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header