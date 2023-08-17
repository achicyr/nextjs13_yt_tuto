import NextAuth from 'next-auth'
import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: "691263586661-mrupcn36l086uvu09au4n0mhak43tmpl.apps.googleusercontent.com",
        clientSecret: "XaURzxGBuTgbVqY0bIV6A7qo"
      })
    ],

    pages: {
      signIn: '/signin'
    },
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: 'jwt'
    }
  })
}
