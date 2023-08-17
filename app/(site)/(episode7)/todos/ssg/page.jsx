// STATIC SITE GENERATION

import { getAllTodos } from '@/lib/prisma/todos'
import Link from 'next/link'
import NewTodoForm from '../components/NewTodoForm'

//////// DYNAMIC = 'auto' (DEFAULT)| 'force-static' | 'error' | 'force-static'

// export const dynamic = 'auto' // DEFAULT VALUE (it will cache as much as possible unless the dev try acces dynamique functions such as cookies headers or dynamicly fetched datas, for rendering built time static files)
// export const dynamic = 'force-static' // SAME AS 'error' (only difference seems to be that it doesnt render 404, but empty datas from dynamic functions)
// export const dynamic = 'error' // IT FORCES STATIC RENDERING (and render a 404 if a dynamic function are used inside the page components)

const Page = async () => {
  const { todos } = await getAllTodos()

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-3xl font-bold mb-10 bg-emerald-100 w-fit px-2 text-emerald-800'>
          SSG — Static
        </h1>

        <NewTodoForm />

        <h2 className='text-xl font-semibold mt-10 border-b pb-2'>Todos</h2>
        <ul className='mt-4 flex flex-col gap-1'>
          {todos?.map(todo => (
            <li key={todo._id}>
              <Link href={`todos//ssg/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
