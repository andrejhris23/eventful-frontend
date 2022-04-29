import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            if(account.provider === 'google') {

                // user.accessToken = await getTokenFromYourAPIServer('github', githubUser)
                return true;
            }
            return false;
        },
        async jwt({token, user}) {
            if(user) {
                token = { accessToken: user.accessToken };
            }

            return token;
        },
        async session({session, token}) {
            session.accessToken = token.accessToken;
            // session.user = getUserFromTheAPIServer(session.accessToken)

            return session;
        }
    }
})  