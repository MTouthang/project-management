import type {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string, // google ID
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string // google client secret
        })
    ],
    secret: process.env.NEXTAUTH_SECRET // next auth secret
}