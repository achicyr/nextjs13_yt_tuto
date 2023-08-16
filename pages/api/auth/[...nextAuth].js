import NextAuth from "next-auth";
// import { PrismaClient } from "@prisma/client";
import PrismaClient from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

// export default NextAuth({
export default async function auth(req,res){
    return await NextAuth(req,res, {
        adapter: PrismaAdapter(prisma),
        providers: [
            GoogleProvider({
                // clientId: process.env.GOOGLE_CLIENT_ID,
                clientId: "691263586661-mrupcn36l086uvu09au4n0mhak43tmpl.apps.googleusercontent.com",
                // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                clientSecret: "XaURzxGBuTgbVqY0bIV6A7qo",
            }),
        ],
        pages: {
            aignin: "/signin"
        },
        adapter: PrismaAdapter(prisma),
        session: {
            strategy: "jwt"
        }
    })
}
// });