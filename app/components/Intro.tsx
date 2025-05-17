"use client"
import Image from 'next/image'
import React from 'react'
import Profile from '@/public/profile.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

import useSectionInView from '@/hooks/useSectionInView'


const Intro = () => {
   const {ref} = useSectionInView('Home',0.5)

    return (
        <section ref={ref} id="home" className="mb-28 scroll-mt-[100rem] max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Image
                            src={Profile}
                            alt="Dharmi Chand"
                            height="192"
                            width="192"
                            quality="95"
                            priority
                            className=" h-32 w-32 rounded-full border-[0.35rem] object-cover shadow-xl border-white "
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                        className="absolute right-0 bottom-0 text-3xl">
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-3xl">
                <span className="font-bold">{`Hello, I'm Dharmi Chand,`}</span>{" "}
                I&apos;m a{" "}
                <span className="font-bold capitalize text-blue-500 dark:text-white/80">full stack developer</span> with{" "}
                <span className="font-bold">2 year </span>of experience. I enjoy building
                <span className="font-italic"> sites & apps.</span>
            </motion.h1>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay:0.1}}
            className="flex flex-col gap-2 sm:flex-row justify-center items-center  text-lg font-medium">
                <Link href="#contact" className="group mx-4 bg-gray-900 outline-none focus:scale-110 border-0 hover:scale-110 hover:bg-gray-950 active:scale-105 transition  text-white px-7 py-3 flex items-center gap-2 rounded-full">
                    Contact Me <BsArrowRight className="opacity-70 transition group-hover:translate-x-1"/>
                </Link>
                <a href="/Dharmi_Chand_CV.pdf" download className="bg-white dark:text-white/60 dark:bg-white/10 mr-2 border border-black/10 cursor-pointer px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110  hover:scale-110 group active:scale-105 transition">
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>
                <Link
                    href="https://www.linkedin.com/in/dharmi-chand-a90b25257"
                    target="_blank"
                    className="bg-white dark:text-white/60 dark:bg-white/10 p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]  active:scale-105 transition">
                    <BsLinkedin />
                </Link>
                <Link
                    href="https://github.com/RAWS1N"
                    target="_blank"
                    className="bg-white dark:text-white/60 dark:bg-white/10 p-4 text-[1.35rem] text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]  active:scale-105 transition">
                    <FaGithubSquare  />
                </Link>
            </motion.div>
        </section>
    )
}

export default Intro
