import React from "react";
import NavBar from "./Components/NavBar.jsx";

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Home page</h1>
            <NavBar />
        </main>
    );
};

export default Page;
