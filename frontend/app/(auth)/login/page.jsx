"use client";
import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const session = useSession();

    console.log("session = ", session);

    // -----Effects-----
    useEffect(() => {
        if (session?.status === "authenticated") {
            router.replace("/user/dashboard");
        }
    }, [session, router]);
    // -----End Effects-----
    return <LoginForm />;
}
