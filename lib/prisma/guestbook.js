import { cache } from 'react'
import prisma from "."


export const getGuestbookEntries = cache(async () => {
  try {

    const entries = await prisma.guestbook.findMany()
    // const entries = await guestbook
    // .find({})
    // .map(entry => ({ ...entry, _id: entry._id.toString() }))
    // .toArray()
    return { entries }
  } catch (error) {
    return { error: 'Failed to fetch guestbook!' }
  }
})

export const createGuestbookEntry = async ({ name, message }) => {
  try {
    return await prisma.guestbook.create({ data: { name, message, updatedAt: new Date() } })
    // return await guestbook.insertOne({ name, message, updatedAt: new Date() })
  } catch (error) {
    return { error: 'Failed to create entry!' }
  }
}
