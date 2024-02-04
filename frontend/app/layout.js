import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
=======
import NavBar from "./components/general/navbar/NavBar";
import Footer from "./components/general/footer/Footer";
>>>>>>> 879038954db29d307a1a9c436378fe655ae7a93e

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
