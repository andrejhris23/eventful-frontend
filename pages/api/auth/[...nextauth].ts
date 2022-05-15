import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import axios from '../../../utils/axios';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({user, account, profile}) {
            if(account.provider === 'google') {
                console.log(profile)
                axios.post('/user/create', {
                    email: profile.email,
                    displayName: profile.name,
                    firstName: profile.given_name,
                    lastName: profile.family_name,
                    image: profile.picture
                });
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