import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex flex-col justify-evenly text-center mx-5 lg:max-w-5xl lg:w-fit lg:mb-0  lg:text-left">
      <Link
        href="/about"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-yellow`}>
          About{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-ltGray group-hover:text-yellow`}>
        Learn more about me, my background, my interests, and my goals as a web developer.
        </p>
      </Link>

      <Link
        href="/project"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-ltGray group-hover:text-yellow`}>
          Projects{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-ltGray group-hover:text-yellow`}>
        Check out some of the web projects I have worked on, ranging from simple static websites to complex dynamic web applications.
        </p>
      </Link>

      <Link
        href="/skills"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-dkGray group-hover:text-yellow`}>
          Skills{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-dkGray group-hover:text-yellow`}>
        Discover the skills and technologies I use to create engaging and responsive web experiences for users.
        </p>
      </Link>

      <Link
        href="/contact"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold text-dkGray group-hover:text-yellow`}>
          Contact{" "}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-dkGray group-hover:text-yellow`}>
        Get in touch with me via email, phone, or social media. I would love to hear from you and collaborate on future web projects.
        </p>
      </Link>
    </div>
  );
}
