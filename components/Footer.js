import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="text-mdGray body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/Joseph_Stanion_Resume.pdf"
          className="flex title-font font-medium items-center md:justify-start justify-center text-mdGray"
          download
        >
          <AiOutlineDownload size={32} />
          <span className="ml-3 text-mdGray">Download My Resume</span>
        </a>
        <p className="text-xs text-mdGray sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-mdGray sm:py-2 sm:mt-0 mt-4">
          © 2023 JOSEPH STANION
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="mailto:joseph.stanion@gmail.com" className="text-mdGray">
            <AiOutlineMail size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/josephstanion/"
            className="ml-3 text-mdGray"
          >
            <BsLinkedin size={24} />
          </Link>
          <Link href="https://github.com/Jstanion" className="ml-3 text-mdGray">
            <BsGithub size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/digital_alchemy7/"
            className="ml-3 text-mdGray"
          >
            <BsInstagram size={24} />
          </Link>
        </span>
      </div>
    </footer>
  );
}
