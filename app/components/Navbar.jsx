import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar flex flex-col w-fit">
      <div className="hidden lg:flex flex-col justify-evenly text-left w-fit">
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
          <p className={`m-0 max-w-[30ch] text-dkGray group-hover:text-yellow`}>
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
          <p className={`m-0 max-w-[30ch] text-ltGray group-hover:text-yellow`}>
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
          <p className={`m-0 max-w-[30ch] text-mdGray group-hover:text-yellow`}>
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
          <p className={`m-0 max-w-[30ch] text-ltGray group-hover:text-yellow`}>
            Let&apos;s connect to discuss how I can help grow your business.
          </p>
        </Link>
      </div>
      <div className="text-mdGray w-full">
        <div className="dropdown lg:hidden">
          <label
            tabindex="0"
            class="btn btn-ghost hover:bg-mdGray hover:text-ltGray lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-mdGray rounded-box bg-opacity-50 w-fit"
          >
            <Link
              href="/about"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2
                className={`text-lg font-semibold text-ltGray group-hover:text-yellow`}
              >
                About Me{" "}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
                  -&gt;
                </span>
              </h2>
            </Link>

            <Link
              href="/projects"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2
                className={`text-lg font-semibold text-ltGray group-hover:text-yellow`}
              >
                My{" "}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
                  -&gt;
                </span>
                Projects
              </h2>
            </Link>

            <Link
              href="/skills"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2
                className={`text-lg font-semibold text-ltGray group-hover:text-yellow`}
              >
                My{" "}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
                  -&gt;
                </span>
                Skills
              </h2>
            </Link>
            <Link
              href="/contact"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2
                className={`mb-3 text-lg font-semibold text-ltGray group-hover:text-yellow`}
              >
                Contact Me{" "}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-5 motion-reduce:transform-none group-hover:text-yellow">
                  -&gt;
                </span>
              </h2>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
