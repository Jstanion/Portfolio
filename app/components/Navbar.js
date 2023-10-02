import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex flex-col justify-evenly text-center mx-5 lg:max-w-5xl lg:w-fit lg:mb-0  lg:text-left">
      <Link
        href="/about"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-blue`}>
          About{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-blue">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-ltGray`}>
          Information about the developer behind this website.
        </p>
      </Link>

      <Link
        href="/project"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-blue`}>
          Projects{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-blue">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-ltGray`}>
          Learn more about my past and current projects.
        </p>
      </Link>

      <Link
        href="/skills"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-blue`}>
          Skills{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-blue">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-ltGray`}>
          Explore a list of my skills and technologies.
        </p>
      </Link>

      <Link
        href="/contact"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-blue`}>
          Contact{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-blue">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-ltGray`}>
          Have any questions regarding my work? Contact me here.
        </p>
      </Link>
    </div>
  );
}
