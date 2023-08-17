import Link from 'next/link'

const Page = () => {
  return (
    <>
      <nav className='container py-10'>
        <ul className='mt-6 flex gap-12'>
          <li>
            <Link
              href='/todos/ssg'
              className='font-medium underline text-emerald-800'
            >
              SSG (static site generation (static))
            </Link>
          </li>
          <li>
            <Link
              href='/todos/isr'
              className='font-medium underline text-emerald-800'
            >
              ISR (incremental static regeneration (revalidate))
            </Link>
          </li>
          <li>
            <Link
              href='/todos/ssr'
              className='font-medium underline text-emerald-800'
            >
              SSR (server side rendering (dynamic))
            </Link>
          </li>
        </ul>
      </nav>
      <section className='py-10'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>Home page</h1>
        </div>
      </section>
    </>
  )
}

export default Page
