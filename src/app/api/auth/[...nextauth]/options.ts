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

/**
 * Next auth setup with google auth
 * 1. - install next-auth i.e npm install next-auth
 * 2. - create auth folder and file inside the api i.e src/app/api/auth/[...nextauth]
 * 3. - create next-auth provider i.e src/app/api/auth/[...nextauth]/option.ts
 * 4. - create route for the next-auth i.e src/app/api/auth/[...nextauth]/router.ts
 * 5. - create middleware and define the matcher
 * 
 */