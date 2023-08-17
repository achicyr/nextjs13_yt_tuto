import { getUsers } from '@/lib/prisma/users'
import Users from './users'

// export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getData() {
  const { users, error } = await getUsers()
  if (!users) {
    console.log(error);
    // throw new Error('Failed to fetch data')
  }

  return users
}



export const metadata = {
  title: "User"
  , description: "welcome user"
}




const UsersLayout = async ({ children }) => {
  const users = await getData()

  return (
    <section className='flex'>
      <aside className='w-1/3 lg:w-1/4'>
        <Users users={users} />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default UsersLayout
