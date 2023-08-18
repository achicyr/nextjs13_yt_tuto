'use client'

import { SessionProvider } from 'next-auth/react'
import {ThemeProvider} from 'next-themes'

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Provider


export function DarkModeProvider({children}) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}