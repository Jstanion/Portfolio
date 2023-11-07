import React from "react";

export default function Home() {
  return (
  <main className="flex w-full text-center items-center justify-center">
      <p className="text-4xl text-mdGray">
        Hello, I&apos;m{" "}
        <span className="text-yellow dark:drop-shadow-[0_0_0.3rem_#e8c54770] animate-pulse">
          Joseph Stanion.
        </span>
        <br />
        I&apos;m a{" "}
        <span className="text-blue dark:drop-shadow-[0_0_0.3rem_#5c80bc70] animate-pulse">
          Full-Stack Web Developer.
        </span>
      </p>
  </main>
  )
}
