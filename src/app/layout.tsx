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
  title: 'PT Bintang Andalas Selatan',
  description: 'Menyediakan berbagai layanan konstruksi, mulai dari pembangunan rumah tinggal, gedung, hingga infrastruktur. Dengan tim yang berpengalaman dan berdedikasi, kami siap mewujudkan impian Anda untuk memiliki hunian atau bangunan yang nyaman dan berkualitas.',
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
