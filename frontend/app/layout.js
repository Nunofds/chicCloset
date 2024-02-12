import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/general/navbar/NavBar";
import Footer from "./components/general/footer/Footer";

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
