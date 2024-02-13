"use client";
import Link from "next/link";
import { useState } from "react";
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

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        if (!username || username === "") {
            setError("This username is invalid");
            return;
        }

        if (!isValidEmail(email)) {
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
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (res.status === 400 || res.status === 500) {
                setError("This username or email is already registered");
                return;
            }

            if (res.status === 200 || res.status === 201) {
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
                        type="text"
                        name="username"
                        id="username"
                        required
                        className="w-full border my-3 p-2"
                        placeholder="votre.username"
                    />
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

                    <p className="text-red-600 text-[.7rem] mt-2">
                        {error && error}
                    </p>
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
                    <Link href={""} className="underline">
                        Privacy Policy
                    </Link>
                    . By clicking SIGN UP below to create your Account,
                    you are agreeing to the Terms & Conditions and acknowledging
                    that you have read and understood our Privacy Policy.
                </div>
            </div>
        </div>
    );
}
