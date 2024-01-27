import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const poppins = Poppins({ 
  subsets: ['latin'] ,
  weight: ['300','400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'PT BAS',
  description: 'Landing Page PT BAS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
