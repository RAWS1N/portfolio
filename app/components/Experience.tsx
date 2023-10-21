"use client"

import React from 'react'
import SectionHeading from './Section-Heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import useSectionInView from '@/hooks/useSectionInView';
import { useThemeContext } from '@/context/ThemeContext';

const Experience = () => {
    const {ref} = useSectionInView("Experience",0.5)
    const {theme} = useThemeContext()

    return (
        <section ref={ref} id="experience" className="scroll-mt-28">
            <SectionHeading heading="My Experience" />
            <VerticalTimeline lineColor={theme === 'light' ? '#e5e7eb' : "rgba(255,255,255,0.2)"} animate>
                {experiencesData.map((experience, idx) => (
                   <React.Fragment  key={idx}>
                        <VerticalTimelineElement  
                            contentStyle={{
                                background : theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                                boxShadow : "none",
                                border : "1px solid rgba(0,0,0,0.05)",
                                textAlign : "left",
                                padding : "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight : theme === 'light' ? "0.4rem solid #9ca3af" : "0.4 rem solid rgba(255,255,255,0.5)"
                            }}
                            date={experience.date}
                            icon={experience.icon}
                            iconStyle={{
                                background : theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                                fontSize : "1.5rem"
                            }}
                        >
                            <h3 className='font-semibold capitalize'>{experience.title}</h3>
                            <p className='font-normal !mt-0'>{experience.location}</p>
                            <p className='font-normal !mt-0 text-gray-700 dark:text-white/75'>{experience.description}</p>
                        </VerticalTimelineElement>
                   </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}

export default Experience