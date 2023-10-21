"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import { useScroll, motion, useTransform } from 'framer-motion'
import Link from 'next/link'

type ProjectProps = (typeof projectsData)[number]

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl,link, tags,srcCode }) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["0 1", "1.33 1"] })
    const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1])
    const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1])
    return (
        <motion.div
            ref={sectionRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            transition={{duration:3}}
            className='group mb-3 sm:mb-8 last:mb-0'
            
        >
            <section
                className="relative dark:text-white dark:bg-white/10 dark:hover:bg-white/20 rounded-lg sm:h-[20rem] bg-gray-100 max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 hover:bg-gray-200 transition">
                <div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:pl-8 sm:group-even:ml-[20rem] flex flex-col h-full">
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className="leading-relaxed mt-2 dark:text-white/70 text-gray-700">{description}</p>
                    <div className="space-x-2 my-4">
                        <Link target="_blank" className="btn bg-blue-500 text-white" href={link}>View Live</Link>
                        {srcCode ? <Link  target="_blank" className="btn bg-gray-950" href={srcCode}>Source Code</Link> : null}
                    </div>
                    <ul className="flex sm:mt-auto items-center flex-wrap mt-4 gap-2">
                        {tags.map((tag, idx) => (
                            <li className='dark:text-white/70 bg-black/[0.7] py-1 px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={idx}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={title} quality={95} className="group-even:right-[initial] 
        group-even:-left-40 
        w-[28.25rem] 
        hidden
        sm:block
        rounded-t-lg 
        shadow-2xl 
        absolute 
        top-8 
        -right-40
        transition
        group-hover:scale-105
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-2
        "/>
            </section>
        </motion.div>
    )
}

export default Project