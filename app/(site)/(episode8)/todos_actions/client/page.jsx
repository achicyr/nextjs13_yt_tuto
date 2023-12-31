import NewTodoFormClient from '../../components/NewTodoForm_client'
import { getAllTodos } from '@/lib/prisma/todos'
import {create} from "../../_actions"


async function action(formData){
  "use server"
  await create(formData)
  
}

export const dynamic = 'force-dynamic'

const Page = async () => {
  const { todos } = await getAllTodos()

  return (
    <section className='py-20'>
        <h1>TODOS CLIENT COMPONENT</h1>
      <div className='container'>
        <h1 className='text-3xl font-bold mb-10 bg-slate-100 w-fit px-2 text-slate-800'>
          Todos
        </h1>

        <NewTodoFormClient action={action} />

        <h2 className='text-xl font-semibold mt-10 border-b pb-2'>
          Previous todos:
        </h2>
        <ul className='mt-4 flex flex-col gap-1'>
          {todos?.map(todo => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
