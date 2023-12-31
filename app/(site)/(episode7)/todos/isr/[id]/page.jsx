import { getAllTodos, getTodoById } from '@/lib/prisma/todos'
import { notFound } from 'next/navigation'

export const revalidate = 10
// export const dynamicParams = false

export async function generateStaticParams() {
  const { todos } = await getAllTodos()
  return todos.map(todo => ({ id: todo._id }))
}

const Page = async ({ params }) => {
  const { todo } = await getTodoById(params.id)

  if (!todo) {
    notFound()
  }

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>ISR (revalidate)</h1>
        <p className='text-lg font-medium mt-6 border p-4'>{todo?.title}</p>
      </div>
    </section>
  )
}

export default Page
