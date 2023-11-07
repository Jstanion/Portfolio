import "../styles/globals.css";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JS | Joseph Stanion",
  description:
    "Empowering Your Business with Dynamic Solutions for the Digital Age",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between h-screen">
          <div className="flex h-full">
            <Navbar />
            <div className="flex justify-center items-center w-full pt-14">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
