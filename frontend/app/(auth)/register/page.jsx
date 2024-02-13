"use client";
import Link from "next/link";
import { useState } from "react";
import isValidEmail from "./validator";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
    // -----states-----
    const [error, setError] = useState("");
    const [info, setInfo] = useState({ username: "", email: "", password: "" });
    const [pending, setPending] = useState(false);
    // -----end states-----

    // -----Variables-----
    const api = "http://localhost:5000/user/auth/register";
    // -----End Variables-----

    // -----Events-----
    const handleInput = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!info.username || !info.email || !info.password) {
            setError("Must provide all the credentials.");
        }

        if (!info.username || info.username === "") {
            setError("This username is invalid");
            return;
        }

        if (!isValidEmail(info.email)) {
            setError("This email is invalid");
            return;
        }

        if (!info.password || info.password.length < 8) {
            setError("This password is invalid");
            return;
        }

        try {
            setPending(true);
            const res = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });

            if (res.status === 400 || res.status === 500) {
                setError("This username or email is already registered");
                return;
            }

            if (res.ok) {
                setPending(false);
                setError("");
                const form = e.target;
                form.reset();
                console.log("User registered.");
                // router.push("/auth/login");
            } else {
                const errorData = await res.json();
                setError(errorData.message);
                console.error(errorData.message);
                setPending(false);
            }
        } catch (error) {
            setPending(false);
            setError("Something went wrong.");
            console.log(error);
        }
    };
    // -----End Events-----

    return (
        <div className="h-full mt-20 my-32 flex justify-center items-center text-left">
            <div>
                <h2 className="my-6 text-2xl font-semibold">Create account</h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-start items-left border p-6"
                >
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required
                        className="w-full border my-3 p-2"
                        placeholder="votre.username"
                        onChange={(e) => {
                            handleInput(e);
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full border my-3 p-2"
                        placeholder="votre.email@gmail.com"
                        onChange={(e) => {
                            handleInput(e);
                        }}
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        className="w-full border mt-3 p-2"
                        placeholder="votre.password"
                        onChange={(e) => {
                            handleInput(e);
                        }}
                    />
                    <p className="text-[.6rem] ps-2">8 characters minimum</p>

                    <button
                        type="submit"
                        className="border p-1 mt-3 w-full bg-[#236964] text-white"
                    >
                        Sign up
                    </button>

                    {error && (
                        <p className="w-full text-red-600 text-[.7rem] text-center mt-2 py-3 bg-red-200">
                            {error}
                        </p>
                    )}
                </form>

                <div className="text-center mt-6">
                    <p className="text-[.8rem]">
                        Already have an account ?{" "}
                        <Link href={"/login"} className="underline italic">
                            Sign in
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
