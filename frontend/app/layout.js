import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/general/navbar/NavBar";
import Footer from "./components/general/footer/Footer";

import { getServerSession } from "next-auth";
import SessionProvider from "../app/utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chiccloset",
    description: "",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();
    return (
        <html lang="fr">
            <body className={inter.className}>
                <SessionProvider session={session}>
                    <NavBar />
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
