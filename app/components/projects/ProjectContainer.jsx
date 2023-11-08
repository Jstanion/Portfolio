import React from "react";
import Image from "next/image";
import Styles from "./styles.module.css";
import { FaDesktop, FaGithub } from "react-icons/fa";

const ProjectContainer = () => {
  return (
    <section
      id={Styles.shortStack}
      className={`${Styles.projectSection} text-blue`}
    >
      <div className={`${Styles.icons} place-self-center`}>
        <a className="hover:text-yellow" href="https://shortstack.vercel.app/">
          <FaDesktop className="text-5xl ml-2" />
          <p>Website</p>
        </a>
        <a
          className="hover:text-yellow"
          href="https://github.com/Jstanion/ShortStack"
        >
          <FaGithub className="text-5xl ml-1" />
          <p>GitHub</p>
        </a>
      </div>
      <Image
        className={Styles.img}
        src="/shortStack.png"
        width={325}
        height={200}
        alt="Short Stack Videos app thumbnail"
      />
    </section>
  );
};

export default ProjectContainer;
