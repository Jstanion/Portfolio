import Image from "next/image";
import Link from "next/link";
import Hero from "./hero/page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header className="flex min-h-screen py-10">
        <Navbar />
        <Hero />
      </header>
    </>
  );
}
