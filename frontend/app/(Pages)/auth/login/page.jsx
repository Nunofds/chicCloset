"use client";
import Link from "next/link";
import React from "react";

export default function page() {
    const handleClick = () => {};

    return (
        <div className="h-full mt-20 my-32 flex justify-center items-center text-center">
            <div>
                <h2 className="my-6 text-2xl font-semibold">Login</h2>

                <form className="flex flex-col justify-center items-center">
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

                    <button className="border p-1 w-full bg-[#236964] text-white">
                        SIGN IN
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p>
                        You don't have an account ?{" "}
                        <Link
                            href={"/auth/register"}
                            className="underline italic"
                        >
                            Register
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