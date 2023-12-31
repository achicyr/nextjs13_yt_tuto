import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (<>
    <Providers>
      {children}
      {/* 
        HERE IT WORKS 
        (A SERVER COMPONENT INTO A CLIENT COMPONENT, E.G {children} ou page.jsx INTO <Providers/>) 
        BECAUSE THE SERVER COMPONENT IS INSIDE THE CLIENT COMPONENT AS A {children}
      */}
    </Providers>
    </>)
}
