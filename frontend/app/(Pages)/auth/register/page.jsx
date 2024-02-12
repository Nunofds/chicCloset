"use client";
import Link from "next/link";
import React, { useState } from "react";
import isValidEmail from "./validator";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
    // -----states-----
    const [error, setError] = useState("");
    // -----end states-----

    // -----Variables-----
    const apiUrl = "http://localhost:5000/user/auth/register";

    // -----End Variables-----

    // -----Events-----
    const handleSubmit = async (e) => {
        e.preventDefault();

        const [username, email, password] = e.target;

        if (!username || username === "") {
            setError("This username is invalid");
            return;
        }

        if (!isValidEmail(email.value)) {
            setError("This email is invalid");
            return;
        }

        if (!password || password.length < 8) {
            setError("This password is invalid");
            return;
        }

        try {
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            res.status === 400 &&
                setError("This username or email is already registered");

            if (res.status === 200) {
                setError("");
                router.push("/auth/login");
            }
        } catch (error) {
            setError("Error, Try again.");
            console.log(error);
        }
    };
    // -----End Events-----

    return (
        <div className="h-full mt-20 my-32 flex justify-center items-center text-center">
            <div>
                <h2 className="my-6 text-2xl font-semibold">Create account</h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center"
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

                    <button
                        type="submit"
                        className="border p-1 w-full bg-[#236964] text-white"
                    >
                        SIGN UP
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p>
                        Already have an account ?{" "}
                        <Link href={"/auth/login"} className="underline italic">
                            Login
                        </Link>
                    </p>
                </div>

                <div className="w-[22rem] text-[.6rem] text-start my-3 pt-3">
                    Please review the{" "}
                    <Link href={""} className="underline">
                        Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href={""} className="underline hover:italic">
                        Privacy Policy
                    </Link>
                    . By clicking SIGN UP below to create your Blurb Account,
                    you are agreeing to the Terms & Conditions and acknowledging
                    that you have read and understood our Privacy Policy.
                </div>
            </div>
        </div>
    );
}
