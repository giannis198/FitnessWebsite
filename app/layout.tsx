import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Widget from '../components/Widget'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import { TextSizeProvider } from '@/components/textSize-provider'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Essential Fitness',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <TextSizeProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            disableTransitionOnChange
            enableSystem
          >
            <div className='flex flex-grow flex-col justify-between'>
              <Navbar />
              <main className='flex-1'>{children}</main>
              <Widget />
              <Footer />
            </div>
          </ThemeProvider>
        </TextSizeProvider>
      </body>
    </html>
  )
}
