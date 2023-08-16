import { getUserById, getUsers } from '@/lib/prisma/users'
import User from './user'

export default async function Page({params}) {
    const {user} = await getUserById(params.userId)
    
    return <User user={user} />
}


export async function generateStaticParams(){
    const {users} = await getUsers()

    return users.map(user=>({
        userId: user.id
    }))
}