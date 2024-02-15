"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import isValidEmail from "../register/validator";
import { signIn } from "next-auth/react";

export default function Login() {
    const router = useRouter();
    // -----states-----
    const [error, setError] = useState("");
    const [info, setInfo] = useState({
        email: "",
        password: "",
    });
    const [pending, setPending] = useState(false);
    // -----end states-----

    // -----Variables-----
    const api = "http://localhost:5000/user/auth/login";
    // -----End Variables-----

    // -----Events-----

    const handleInput = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // event declanched when the User submit the form to register
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!info.email || !info.password) {
            setError("Must provide all the credentials.");
        }

        if (!isValidEmail(info.email)) {
            setError("Email is invalid");
            return;
        }

        try {
            setPending(true);
            const res = await signIn("credentials", {
                email: info.email,
                password: info.password,
                redirect: false,
            });
            console.log("-------------------");
            console.log("-------------------");
            console.log("--- res page.js = ", res);
            console.log("-------------------");
            console.log("-------------------");

            if (res.error) {
                setError("Invalid credentials.");
                setPending(false);
                return;
            }

            // if success we redirect the user to your dashboard
            router.replace("/user/dashboard");
        } catch (error) {
            setPending(false);
            setError("Something went wrong.");
            console.error(error);
        }
    };
    // -----End Events-----

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
                        onChange={(e) => {
                            handleInput(e);
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        className="w-full border my-3 p-2"
                        placeholder="votre.password"
                        onChange={(e) => {
                            handleInput(e);
                        }}
                    />

                    {/* -----error message----- */}
                    {error && (
                        <p className="w-full text-red-600 text-[.7rem] text-center mt-2 py-3 bg-red-200">
                            {error}
                        </p>
                    )}
                    {/* -----END error message----- */}

                    <button
                        className="border p-1 mt-3 w-full bg-[#236964] text-white"
                        disabled={pending ? true : false}
                    >
                        {pending ? "Login in..." : "Login"}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-[.8rem]">
                        You don't have an account ?{" "}
                        <Link href={"/register"} className="underline italic">
                            Register
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
