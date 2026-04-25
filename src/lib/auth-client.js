import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.MY_UI
})

export const { signIn, signUp, signOut , useSession } = createAuthClient()