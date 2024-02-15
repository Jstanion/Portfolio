import React from "react";

export default function Home() {
  return (
  <main className="flex w-full text-center items-center justify-center">
      <p className="text-2xl lg:text-4xl p-2 text-ltGray">
        Hello, I&apos;m{" "}
        <br/>
        <span className="text-yellow text-3xl lg:text-5xl dark:drop-shadow-[0_0_0.3rem_#e8c54770] animate-pulse">
          Joseph Stanion.
        </span>
        <br/>
        <br/>
        I&apos;m a{" "}
        <br/>
        <span className="text-blue text-3xl lg:text-5xl dark:drop-shadow-[0_0_0.3rem_#5c80bc70] animate-pulse">
          Full-Stack <br/>Web Developer.
        </span>
      </p>
  </main>
  )
}
