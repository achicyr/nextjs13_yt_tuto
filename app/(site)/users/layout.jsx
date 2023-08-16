import { getUsers } from '@/lib/prisma/users'
import Users from './users'

//ROUTE SEGMENT CONFIG OPTIONS:
//dynamic, dynamicParams, revalidate, fetchCache, runtime, preferredRegion
export const revalidate = 3600
// export const revalidate = 0 // ==>> RERENDU DYNAMIQUEMENT À CHAQUE REQUETE

async function getData() {
  const { users } = getUsers()
  if (!users) {
    throw new Error('Failed to fetch data')
  }

  return users
}


export default async function UsersLayout({ children }) {
  const {users} = await getUsers()
  
  return (
    <section className='flex'>
      <aside className="w-1/4">
        <Users users={users} />
      </aside>
      <main>{children}</main>
    </section>
  )
}
