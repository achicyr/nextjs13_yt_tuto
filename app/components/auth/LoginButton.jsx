'use client'

import {useSession, signIn, signOut} from 'next-auth/react'
import Image from 'next/image'

const SignInButton = () => {
    const {data: session} = useSession()

    if(session){
        return (
            <div className="relative">
                {session?.user?.image ? (
                    <Image
                        src={session.user.imageUrl}
                        alt={session.user.name}
                        className='inline-block'
                        fill
                    />
                ) : (
                    <span className="inline-block">
                        NOT LOGGEDIN :(
                    </span>
                )}
            </div>
        )
    }

    
    return (
        // LA FONCTION singnIn() (sans aucun argument) RETOURNE LE USER VERS LA PAGES DE CONNEXION
        // ET MET DANS L'URL L'ADRESSE OÙ ÉTAIT LE USER AVANT L'APPEL À signIn()
        <button className='text-sm' onClick={() => signIn()}>
            SIGNIN
        </button>
    )
}


export default SignInButton


