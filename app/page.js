import Image from "next/image"
import Link from "next/link"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
          <Link
            href="/#projects"
            className="fixed justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >
            View my work
          </Link>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        </div>
      </main>
      <Navbar />
    </>
  );
}
