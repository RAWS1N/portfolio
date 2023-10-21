import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import ThemeSwith from './components/ThemeSwith'
import ThemeContextProvider from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dharmi Chand | Personal Portfolio',
  description: 'Dharmi Chand is a full stack developer with mern and nextjs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`
      ${inter.className}
      bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
      dark:bg-gray-900
        dark:text-gray-50
        dark:text-opacity-90
        transition-colors
       `}>
        <div className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] rounded-full blur-[10rem]"></div>
        <div className="
        bg-[#dbd7fb] 
        dark:bg-[#676394] 
        absolute 
        -z-10
        top-[-1rem] 
        left-[-35rem] 
        h-[31.25rem] 
        w-[50rem] 
        sm:w-[68.75rem] 
        md:left-[-33rem]
        lg:left-[-28rem]
        xl:left[-15rem]
        2xl:left[-5rem]
        rounded-full 
        blur-[10rem]
        "></div>
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            <Header />
            <Toaster />
            {children}
            <Footer />
            <ThemeSwith />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
