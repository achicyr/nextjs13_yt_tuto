'use client'

import Link from 'next/link'
import LoginButton from '../components/auth/SignInButton'

const Header = () => {
  return (
    <header className='bg-stone-100 py-10'>
      <nav className='container flex items-center text-sm font-medium tracking-wider uppercase text-stone-500'>
        <ul className='ml-auto flex justify-center gap-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/todos'>Todos</Link>
          </li>
          <li>
            <Link href='/todos_actions'>Todos actions</Link>
          </li>
          <li>
            <Link href='/darkMode'>Dark Mode</Link>
          </li>
          <li>
            <Link href='/home'>Exercice12: ServerActions</Link>
          </li>
        </ul>
        <ul className='ml-auto'>
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
