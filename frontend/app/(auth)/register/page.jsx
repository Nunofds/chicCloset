import React from "react";
import RegisterForm from "./RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default function page() {
    const session = getServerSession();

    if (session) {
        redirect("/");
    }
    return <RegisterForm />;
}
