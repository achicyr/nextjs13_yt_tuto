// import Provider from '../(site)/provider'
import Link from 'next/link'
// import {} from 'first'

export default function AuthLayout({ children }) {

    return (
        <html lang="en">
            <head />
            <body>
                {/* <Provider> */}
                    <main className="flex">
                        <div className="mx-auto flex">
                            <Link href='/' className="flex">
                                <span className="w-5">&lt;</span>
                                <span className="uppercase">Home</span>
                            </Link>
                            <div className="relative">
                                <h1 className="text-center">
                                    Sign in to your account
                                </h1>
                            </div>
                            <div className="-mx-4 mt-10">
                                {children}
                            </div>
                        </div>
                    </main>
                {/* </Provider> */}
            </body>
        </html>
    )
}
