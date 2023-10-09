import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiBulma } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-evenly w-full">
      <div className="flex flex-col items-center w-full">
        <h1 className="border-l-4 rounded-l-full border-ltGray bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-2/3">
          <span className="pl-10">SKILLS</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-yellow rounded-l-full h-1/3 w-full">
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-htmlOrange text-7xl" />
          <p>HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-cssBlue text-7xl" />
          <p>CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <DiJavascript className="text-jsYellow text-7xl" />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-twBlue text-7xl" />
          <p>Tailwind</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-bsPurple text-7xl" />
          <p>Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <SiBulma className="text-bulmaGreen text-7xl" />
          <p>Bulma</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-reactBlue text-7xl" />
          <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-njsBlack text-7xl" />
          <p>Next JS</p>
        </div>
      </div>
    </div>
  );
}
