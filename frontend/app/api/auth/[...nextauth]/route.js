import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { mongodbConnect } from "../../../utils/mongodb";
import { log } from "console";

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

                const user = await response.json();

                console.log("**************");
                console.log("**************");
                console.log(user);
                console.log("**************");
                console.log("**************");

                if (response.status == 200) {
                    console.log("**************");
                    console.log(" email correct? =", user.email);
                    console.log(" user psw correct? =", user.password);
                    console.log("**************");

                    console.log("**************");
                    console.log(
                        " credentials.password ? =",
                        credentials.password
                    );
                    console.log("**************");

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
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };
