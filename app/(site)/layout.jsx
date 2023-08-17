import './globals.css'
import Footer from './footer'
import Header from './header'
import Provider from './provider'


export const metadata = {
  title: "Home"
  , description: "welcome home"
}


import {Nunito_Sans} from 'next/font/google'
import localFont from 'next/font/local'
const nunito = Nunito_Sans({
  subsets: ['latin']
  , weight: ["300", "400", "600", "700", "800", "900", ]
  , style: ["normal", "italic"]
  // , variable: "--font-nunito_aaaa"
})
const localfont = localFont({
  src: "../../public/TiltPrism-Regular.ttf"
})


export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full scroll-smooth antialiased'>
      <head />
      <body className={`${localfont.className} flex h-full flex-col`}>
        <Provider>
          <Header />
          <main className={`${nunito.className} grow`}>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
