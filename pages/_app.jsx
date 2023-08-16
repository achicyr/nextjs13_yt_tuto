// import "./globals.css"
import "./globals_.css"
import {Montserrat} from '@next/font/google'
import localFont from '@next/font/local'

const montserrat = Montserrat({
    subsets: ["latin"]
    // , weight: [400,700]
    , variable: '--font-montserrat_aaa'
})

const customFont = localFont({src: "./TiltPrism-Regular.ttf"})

function MyApp({ Component, pageProps }) {
    // <main>
    // <main className={montserrat.className}>
    // <main className={customFont.className}>
    // <main className={`${montserrat.variable} font-montserrat-iufds`}>
    // <main className={`${montserrat.variable} font-joijfdsfds_montserrat`}>
    return (
        <main>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
