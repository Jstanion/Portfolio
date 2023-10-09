import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiBulma } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-evenly w-full">
      <div className="flex flex-col items-center w-full">
        <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-2/3">
          <span className="pl-10">SKILLS</span>
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-1/3 w-full">
        <p className="text-2xl p-4"> Client-Side Applications</p>
        <div className="flex flex-wrap justify-evenly items-center w-full">
          <div className="flex flex-col items-center hover:text-htmlOrange transition-colors duration-500">
            <FaHtml5 className="text-7xl" />
            <p className="text-xl">HTML5</p>
          </div>
          <div className="flex flex-col items-center hover:text-cssBlue transition-colors duration-500">
            <FaCss3Alt className="text-7xl" />
            <p className="text-xl">CSS3</p>
          </div>
          <div className="flex flex-col items-center hover:text-jsYellow transition-colors duration-500">
            <DiJavascript className="text-7xl" />
            <p className="text-xl">JavaScript</p>
          </div>
          <div className="flex flex-col items-center hover:text-twBlue transition-colors duration-500">
            <SiTailwindcss className="text-7xl" />
            <p className="text-xl">Tailwind</p>
          </div>
          <div className="flex flex-col items-center hover:text-bsPurple transition-colors duration-500">
            <FaBootstrap className="text-7xl" />
            <p className="text-xl">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center hover:text-bulmaGreen transition-colors duration-500">
            <SiBulma className="text-7xl" />
            <p className="text-xl">Bulma</p>
          </div>
          <div className="flex flex-col items-center hover:text-reactBlue transition-colors duration-500">
            <FaReact className="text-7xl" />
            <p className="text-xl">React</p>
          </div>
          <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
            <SiNextdotjs className="text-7xl" />
            <p className="text-xl">Next JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
