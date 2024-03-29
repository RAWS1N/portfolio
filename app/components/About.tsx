"use client"
import React from 'react'
import SectionHeading from './Section-Heading'
import {motion} from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'



const About = () => {
  const {ref} = useSectionInView('About')


  return (
    <motion.section
    id="about"
    ref={ref}
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
     className="mb-28 scroll-mt-28 max-w-[45rem] text-center leading-8 sm:mb-40">
        <SectionHeading heading="About Me"/>
        <p className="mb-3">After droping out with a degree in{" "}
        <span className="font-medium">Accounting</span> cause of unfortunate circumstances, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Express.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.</p>
        <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and management</span>.</p>
    </motion.section>
  )
}

export default About