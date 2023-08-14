import {getUsers} from '@/lib/prisma/users'
import Link from 'next/link'

export default async function Users() {
    const {users} = await getUsers()
    console.log("users");
    console.log(getUsers);
    console.log(users);
    
    return (
        <section className='fixed'>
            <div className="center py-4">
                <h2 className="mb-4 text-x1">Users</h2>
                <ul className="flex">
                    {users?.map(user=><li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>)}
                </ul>
            </div>
        </section>
    )
}
