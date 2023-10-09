import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex w-full text-center items-center justify-center">
        <p className="text-4xl text-ltGray">
          Hello, I&apos;m{" "}
          <span className="text-yellow dark:drop-shadow-[0_0_0.3rem_#ffffff70] animate-pulse">
            Joseph Stanion.
          </span>
          <br />
          I&apos;m a{" "}
          <span className="text-dkGray dark:drop-shadow-[0_0_0.3rem_#ffffff70] animate-pulse">
            Full-Stack Web Developer.
          </span>
        </p>
      </div>
    </>
  );
}
