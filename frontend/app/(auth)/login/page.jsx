"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import isValidEmail from "../register/validator";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState("");
    // const { data: session, status: sessionStatus } = useSession();

    // useEffect(() => {
    //     if (sessionStatus === "authenticated") {
    //         router.replace("/api/dashboard");
    //     }
    // }, [sessionStatus, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
        }

        if (!password || password.length < 8) {
            setError("Password is invalid");
            return;
        }

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid email or password");
            if (res?.url) router.replace("/api/dashboard");
        } else {
            setError("");
        }
    };

    // if (sessionStatus === "loading") {
    //     return <h1>Loading...</h1>;
    // }

    return (
        <div className="h-full mt-20 my-32 flex justify-center items-left">
            <div>
                <h2 className="my-6 text-2xl font-semibold">Login</h2>

                <form
                    className="flex flex-col justify-center border p-6 items-start"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full border my-3 p-2"
                        placeholder="votre.email@gmail.com"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        className="w-full border my-3 p-2"
                        placeholder="votre.password"
                    />

                    <button className="border p-1 mt-3 w-full bg-[#236964] text-white">
                        Sign in
                    </button>

                    {error && (
                        <p className="w-full text-red-600 text-[.7rem] text-center mt-2 py-3 bg-red-200">
                            {error}
                        </p>
                    )}
                </form>

                <div className="text-center mt-6">
                    <p className="text-[.8rem]">
                        You don't have an account ?{" "}
                        <Link href={"/register"} className="underline italic">
                            Sign up
                        </Link>
                    </p>
                </div>

                <div className="w-[22rem] text-[.6rem] text-start my-3 pt-3">
                    Please review the{" "}
                    <Link href={"/legal/conditionsTerms"} className="underline">
                        Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href={"/legal/privacyTerms"} className="underline">
                        Privacy Policy
                    </Link>
                    . By clicking SIGN UP below to create your Account, you are
                    agreeing to the Terms & Conditions and acknowledging that
                    you have read and understood our Privacy Policy.
                </div>
            </div>
        </div>
    );
}
