import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Footer from '@/components/Footer'
import CustomNavbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Econo Market',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={`flex flex-col min-h-screen`}>
          <CustomNavbar />
          <div className='flex grow'>
            {children}
          </div>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
