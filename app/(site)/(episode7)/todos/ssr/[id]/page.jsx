import { getTodoById } from '@/lib/prisma/todos'
import { notFound } from 'next/navigation'

const Page = async ({ params }) => {
  const { todo } = await getTodoById(params.id)

  if (!todo) {
    notFound()
  }

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Dynamic (SSR)</h1>
        <p className='text-lg font-medium mt-6 border p-4'>{todo?.title}</p>
      </div>
    </section>
  )
}

export default Page
