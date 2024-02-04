import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "ChicCloset HomePage",
        template: "%s | ChicCloset",
    },
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
