import React from 'react'


const Footer = () => {
  return (
    <footer className='my-4 space-y-1 mt-10 px-4 text-center text-gray=500'>
        <small className='text-xs block'>&copy; 2023 Dharmi Chand, All right reserved</small>
        <p className="text-xs ">
            <span className='font-semibold'>
                Built with React & Next.js (App Router & Server Actions),
                Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
            </span>
        </p>
    </footer>
  )
}

export default Footer