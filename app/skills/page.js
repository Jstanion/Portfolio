import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiBulma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
          <FaHtml5 className="text-orange text-8xl" />
          <p>HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-yellow text-8xl" />
          <p>CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <DiJavascript className="text-yellow text-8xl" />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-orange text-8xl" />
          <p>Tailwind</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-orange text-8xl" />
          <p>Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <SiBulma className="text-orange text-8xl" />
          <p>Bulma</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-orange text-8xl" />
          <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandNextjs className="text-orange text-8xl" />
          <p>Next JS</p>
        </div>
      </div>
    </div>
  );
}
