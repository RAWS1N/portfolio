"use client"
import React from 'react'
import SectionHeading from './Section-Heading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import useSectionInView from '@/hooks/useSectionInView'


const Projects = () => {
  const {ref} = useSectionInView("Projects",0.2)

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading  heading='My projects' />
            <div>
                {projectsData.map((project, idx) => (
                    <React.Fragment key={idx}>
                        <Project  {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}


export default Projects