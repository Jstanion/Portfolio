import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-evenly text-left w-fit">
      <Link
        href="/about"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2
          className={`mb-3 text-2xl font-semibold text-dkGray group-hover:text-yellow`}
        >
          About{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p
          className={`m-0 max-w-[30ch] text-dkGray group-hover:text-yellow`}
        >
          Learn more about my background, interests, and goals as a developer.
        </p>
      </Link>

      <Link
        href="/projects"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      >
        <h2
          className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-yellow`}
        >
          Projects{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p
          className={`m-0 max-w-[30ch] text-ltGray group-hover:text-yellow`}
        >
          Check out my work, ranging from simple static sites to dynamic web
          applications.
        </p>
      </Link>

      <Link
        href="/skills"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2
          className={`mb-3 text-2xl font-semibold text-mdGray group-hover:text-yellow`}
        >
          Skills{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p
          className={`m-0 max-w-[30ch] text-mdGray group-hover:text-yellow`}
        >
          Explore the skills and technologies I use to create an engaging user
          experience.
        </p>
      </Link>

      <Link
        href="/contact"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2
          className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-yellow`}
        >
          Contact{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p
          className={`m-0 max-w-[30ch] text-ltGray group-hover:text-yellow`}
        >
          Let&apos;s connect to discuss how I can help grow your business.
        </p>
      </Link>
    </div>
  );
}
