'use client'

import {useTheme} from 'next-themes'
import {useState,useEffect} from 'react'
import ServerComponentTest from './ServerComponentTest'


export default function ThemeButton({children}) {

    const {resolvedTheme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=>setMounted(true), [])

    if(!mounted)
        return null

    return (<>
        <button onClick={()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? 'light' : 'dark'}
        </button>
        <ServerComponentTest />
    </>)
}
