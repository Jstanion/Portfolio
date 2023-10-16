import "../styles/globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        {/* <div className="flex min-h-screen py-10"> */}
          <Navbar />
          {children}
          <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
