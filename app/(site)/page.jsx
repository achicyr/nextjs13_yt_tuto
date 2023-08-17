'use client'

import Hello from '../content/hello.mdx'

const Home = () => {
  return (
    <section>
      <div className='container py-4'>
        <h1 className='text-2xl font-semibold tracking-tight'>Home page</h1>
        <Hello />
      </div>
    </section>
  )
}

export default Home
