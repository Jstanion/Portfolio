import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex height-fix">
        <p className="text-4xl text-ltGray text-center">
          Hello, I&apos;m <span className="text-yellow dark:drop-shadow-[0_0_0.3rem_#ffffff70] animate-pulse">Joseph Stanion.</span>
          <br />
          I&apos;m a full-stack web developer.
        </p>
      </div>
    </>
  );
}
