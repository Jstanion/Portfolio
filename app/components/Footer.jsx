import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { AiOutlineMail, AiOutlineDownload, AiOutlineCodepen } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="text-mdGray body-font">
      <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/Joseph_Stanion_Resume.pdf"
          className="flex text-sm title-font font-medium items-center md:justify-start justify-center text-ltGray hover:text-yellow"
          download
        >
          <AiOutlineDownload size={24} className="mr-4"/>
          CVV Download
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="mailto:joseph.stanion@gmail.com" className="text-ltGray hover:text-yellow">
            <AiOutlineMail size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/josephstanion/"
            className="ml-3 text-ltGray hover:text-yellow"
          >
            <BsLinkedin size={24} />
          </Link>
          <Link href="https://github.com/Jstanion" className="ml-3 text-ltGray hover:text-yellow">
            <BsGithub size={24} />
          </Link>
          <Link
            href="https://codepen.io/Jstanion"
            className="ml-3 text-ltGray hover:text-yellow"
          >
            <AiOutlineCodepen size={24} />
          </Link>
          <Link
            href="https://stackoverflow.com/users/21083718/joey"
            className="ml-3 text-ltGray hover:text-yellow"
          >
            <BsStackOverflow size={24} />
          </Link>
          
        </span>
        <p className="text-xs text-ltGray sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-ltGray sm:py-2 sm:mt-0 mt-4">
          © 2023 JOSEPH STANION
        </p>
      </div>
    </footer>
  );
}
