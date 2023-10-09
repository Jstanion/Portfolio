import { DiJavascript } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTailwindcss,
  SiBulma,
  SiFirebase,
  SiHeroku,
  SiWebpack,
  SiPostman,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import Styles from "./styles.module.css";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-col items-center w-full">
        <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-2/3">
          <span className="pl-10">SKILLS</span>
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-1/4 w-full font-bold">
        <p className=" p-2">Unique and Interactive Client-Side Applications</p>
        <div className="flex flex-wrap justify-evenly items-center w-full">
          <div className="flex flex-col items-center hover:text-htmlOrange transition-colors duration-500">
            <FaHtml5 className="text-7xl" />
            <p className="">HTML5</p>
          </div>
          <div className="flex flex-col items-center hover:text-cssBlue transition-colors duration-500">
            <FaCss3Alt className="text-7xl" />
            <p className="">CSS3</p>
          </div>
          <div className="flex flex-col items-center hover:text-jsYellow transition-colors duration-500">
            <DiJavascript className="text-7xl" />
            <p className="">JavaScript</p>
          </div>
          <div className="flex flex-col items-center hover:text-twBlue transition-colors duration-500">
            <SiTailwindcss className="text-7xl" />
            <p className="">Tailwind</p>
          </div>
          <div className="flex flex-col items-center hover:text-bsPurple transition-colors duration-500">
            <FaBootstrap className="text-7xl" />
            <p className="">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center hover:text-bulmaGreen transition-colors duration-500">
            <SiBulma className="text-7xl" />
            <p className="">Bulma</p>
          </div>
          <div className="flex flex-col items-center hover:text-reactBlue transition-colors duration-500">
            <FaReact className="text-7xl" />
            <p className="">React</p>
          </div>
          <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
            <SiNextdotjs className="text-7xl" />
            <p className="">Next.js</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-1/4 w-full font-bold">
        <p className=" p-2"> Optimized and Scalable Back-End Applications</p>
        <div className="flex flex-wrap justify-evenly items-center w-full">
          <div className="flex flex-col items-center hover:text-nodeGreen transition-colors duration-500">
            <FaNodeJs className="text-7xl" />
            <p className="">Node.js</p>
          </div>
          <div className="flex flex-col items-center hover:text-jsYellow transition-colors duration-500">
            <SiExpress className="text-7xl" />
            <p className="">Express.js</p>
          </div>
          <div className="flex flex-col items-center hover:text-mdbGreen transition-colors duration-500">
            <SiMongodb className="text-7xl" />
            <p className="">MongoDB</p>
          </div>
          <div
            className={`${Styles.sqlAnchor} flex flex-col items-center transition-colors duration-500`}
          >
            <GrMysql className={`${Styles.sqlIcon}  text-7xl`} />
            <p className={`${Styles.sqlText} `}>MySQL</p>
          </div>
          <div className="flex flex-col items-center hover:text-mgRed transition-colors duration-500">
            <SiMongoose className="text-7xl" />
            <p className="">Mongoose</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-1/4 w-full font-bold">
        <p className=" p-2"> Additional Technologies and Tools...</p>
        <div className="flex flex-wrap justify-evenly items-center w-full">
          <div className="flex flex-col items-center hover:text-npmRed transition-colors duration-500">
            <FaNpm className="text-5xl" />
            <p className="text-center">
              Node Package
              <br /> Manager
            </p>
          </div>
          <div className="flex flex-col items-center hover:text-gitOrange transition-colors duration-500">
            <BsGit className="text-5xl" />
            <p>Git</p>
          </div>
          <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
            <BsGithub className="text-5xl" />
            <p>GitHub</p>
          </div>
          <div
            className={`${Styles.fbAnchor} flex flex-col items-center transition-colors duration-500`}
          >
            <SiFirebase className={`${Styles.fbIcon} text-5xl`} />
            <p className={Styles.fbStart}>
              Goog<span className={Styles.fbMid}>le Fire</span>
              <span className={Styles.fbEnd}>base</span>
            </p>
          </div>
          <div className="flex flex-col items-center hover:text-herokuPurple transition-colors duration-500">
            <SiHeroku className="text-5xl" />
            <p>Heroku</p>
          </div>
          <div
            className={`${Styles.wbAnchor} flex flex-col items-center transition-colors duration-500`}
          >
            <SiWebpack className={`${Styles.wbIcon} text-5xl`} />
            <p className={Styles.wbText}>Webpack.js</p>
          </div>
          <div className="flex flex-col items-center hover:text-pmOrange transition-colors duration-500">
            <SiPostman className="text-5xl" />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
}
