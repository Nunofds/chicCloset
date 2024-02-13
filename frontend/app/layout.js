import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/general/navbar/NavBar";
import Footer from "./components/general/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chiccloset",
    description: "",
};

export default async function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="fr">
                <body className={inter.className}>
                    <NavBar />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
