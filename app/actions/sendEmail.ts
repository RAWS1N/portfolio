"use server"

import { getErrorMessage, validateString } from "@/lib/utils"
import { Resend } from "resend"
import ContactFormEmail from "@/email/ContactFormEmail"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)



const sendEmail = async (formData: FormData) => {
    const message = formData.get('message')
    const senderEmail = formData.get("senderEmail")

    const isValidEmail = validateString(senderEmail,500)
    const isValidMessage = validateString(message,5000)


    
    if(!isValidEmail) {
        return {error:"Invalid email address"};  
    } 

    if(!isValidMessage) {
        return {error:"Invalid message"}
    }
    let data
    try{
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "dharmicsinga@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            // text: message as string
            react :React.createElement(ContactFormEmail,{
                message:message as string,
                senderEmail:senderEmail as string
            })
        })
    }
    catch(e:any){
        return {
            error : getErrorMessage(e)
        }
    }
    return {data}
}


export default sendEmail