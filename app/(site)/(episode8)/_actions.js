import {createTodo} from "@/lib/prisma/todos"
import {revalidatePath} from "next/cache"


export async function create(formData){
    "use server"
    const title = formData.get('title')
    await createTodo(title)
    revalidatePath("/todos")
}