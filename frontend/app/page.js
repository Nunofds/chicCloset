"use client";
import React from "react";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between p-0">
            <HomePage />
        </main>
    );
};

export default Page;
