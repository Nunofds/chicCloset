import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

const handler = NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                // Add your own credentials logic here
                const response = await fetch(
                    "http://localhost:5000/user/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    }
                );

                try {
                    const user = await response.json();

                    if (response.status == 200) {
                        // Compare the provided password with the hashed password from the database
                        const passwordCorrect = await compare(
                            credentials.password,
                            user.password
                        );

                        if (!passwordCorrect) {
                            return Promise.resolve({
                                id: user.id,
                                email: user.email,
                            });
                        } else {
                            return Promise.resolve(null);
                        }
                    } else {
                        return Promise.resolve(null);
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };
