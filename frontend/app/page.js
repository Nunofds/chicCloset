"use client";
import React from "react";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between p-0">
            {/* <NavBar /> */}
            <Footer />
        </main>
    );
};

export default Page;
