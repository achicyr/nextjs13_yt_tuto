'use server'

import {createGuestbookEntry} from "@/lib/prisma/guestbook"
import {revalidatePath} from 'next/cache'

export const addEntry = async (data) => {
    const {name, message} = Object.fromEntries(data)

    // if(!name || !message) throw new Error('Invalid input.')
    if(!name || !message) return {error: "Toutes les propriétés doivent être rempli."}

    const { insertedId, error } = await createGuestbookEntry({ name, message })
    if(error) throw new Error(error)
    revalidatePath("/")
}


