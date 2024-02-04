import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/general/NavBar";
import Footer from "@/app/components/general/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chiccloset",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
