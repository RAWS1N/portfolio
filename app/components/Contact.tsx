"use client"

import React from 'react'
import SectionHeading from './Section-Heading'
import {motion} from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import sendEmail from '../actions/sendEmail'
import {toast} from 'react-hot-toast'

import SubmitButton from './SubmitButton'

const Contact = () => {
    const {ref} = useSectionInView('Contact')

   

    return (
        <motion.section
         ref={ref} 
         id="contact" 
         className="mb:20 text-center w-[min(100%,38rem)]"
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1}}
         viewport={{once:true}}
         >
            <SectionHeading heading='contact' />
            <p className="text-gray-700 -mt-5 dark:text-white/80">Please contact me directly at {" "}
                <a href="mailto:dharmicsinga@gmail.com" className="underline text-blue-500">dharmicsinga@gmail.com </a>
                or through this form.
            </p>
            <form className='mt-10 flex flex-col dark:text-black' action={async(formData) => {
                const {data,error} = await sendEmail(formData)
                if(error){
                toast.error(error)
                    return 
                }
                toast.success("Email sent successfully!")
                return data
                
                }}>
                <input 
                className="h-14 px-4 dark:text-[#40E0D0] dark:bg-white dark:bg-opacity-10 dark:focus:bg-opacity-20 transition-all dark:outline-none rounded-lg borderBlack" type="email"
                placeholder="Your email"
                name="senderEmail"
                required
                maxLength={500}
                />
                <textarea 
                placeholder="Your message"
                className="h-52 my-3 p-4 dark:text-[#40E0D0] rounded-lg borderBlack  dark:bg-white dark:bg-opacity-10 dark:focus:bg-opacity-20 transition-all dark:outline-none"
                name="message"
                required
                spellCheck={false}
                maxLength={5000}
                />
                <SubmitButton/>
            </form>
        </motion.section>
    )
}

export default Contact