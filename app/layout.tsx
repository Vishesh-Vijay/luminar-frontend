import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Home/Navbar'
import Dashboard from '@/components/Home/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-poppins'
 })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <div className='w-full h-[100vh] flex flex-col justify-between items-center'>
          <div className='w-full'>
            <Navbar />
          </div>
          <div className='w-full h-full flex justify-between items-center'>
            <div className='w-1/4'><Dashboard /></div>
            <div className='w-3/4'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
