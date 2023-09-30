import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header className="flex min-h-screen flex-col items-center justify-center p-24">
        <Hero />
      </header>
      <Navbar />
    </>
  );
}
