import { getAllTodos, getTodoById } from '@/lib/prisma/todos'
import { notFound } from 'next/navigation'


//////// DYNAMICPARAMS = 'true' (DEFAULT)| 'force-static' | 'error' | 'force-static'

export const dynamicParams = false // EVERY SEGMENTS NOT INCLUDED IN generateStaticParams() WILL RESULT IN AN 404 RENDERING (IF 'true' WILL GENERATED ON DEMAND (dynamicly))




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
        <h1 className='text-3xl font-bold'>Static (SSG)</h1>
        <p className='text-lg font-medium mt-6 border p-4'>{todo?.title}</p>
      </div>
    </section>
  )
}

export default Page
