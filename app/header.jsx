import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-stone-100 py12">
        <nav className="center">
            <ul className="flex justify-center gap-8">
                <li>
                    <Link className="text-sm font-medium uppercase" href="/">Home</Link>
                </li>
                <li>
                    <Link className="text-sm font-medium uppercase" href="/users">Users</Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}
