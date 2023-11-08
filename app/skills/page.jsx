import React from "react";
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
  SiRedux,
  SiJest,
  SiHandlebarsdotjs,
  SiGraphql,
  SiSequelize,
  SiApollographql,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";
import Styles from "./styles.module.css";

const Skills = () => {
  return (
    <div className="flex flex-col items-end w-full h-full">
      <div className="flex justify-end w-full">
        <div className="flex justify-end w-full">
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray font-extralight py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10">TOOLS </span>
            <span className="text-2xl font-normal align-middle">&</span>
            <span className="font-bold"> SKILLS</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-end h-5/6 w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-ltGray text-xl text-center">
            Optimized and Scalable
            <br />
            Back-End Applications
          </p>
          <div className="flex justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-7/12 font-bold p-4 shadow-lg shadow-dkGray">
            <div className="flex flex-wrap justify-evenly items-center w-full">
              <div className="flex flex-col items-center hover:text-nodeGreen transition-colors duration-500">
                <FaNodeJs className="text-5xl" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-jsYellow transition-colors duration-500">
                <SiExpress className="text-5xl" />
                <p>Express.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-mdbGreen transition-colors duration-500">
                <SiMongodb className="text-5xl" />
                <p>MongoDB</p>
              </div>
              <div
                className={`${Styles.sqlAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <GrMysql className={`${Styles.sqlIcon}  text-5xl`} />
                <p className={`${Styles.sqlText} `}>MySQL</p>
              </div>
              <div className="flex flex-col items-center hover:text-mgRed transition-colors duration-500">
                <SiMongoose className="text-5xl" />
                <p>Mongoose</p>
              </div>
              <div
                className={`${Styles.fbAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiFirebase className={`${Styles.fbYellow} text-5xl`} />
                <p className={Styles.fbBlue}>
                  G<span className={Styles.fbRed}>o</span>
                  <span className={Styles.fbYellow}>o</span>
                  <span className={Styles.fbBlue}>g</span>
                  <span className={Styles.fbGreen}>l</span>
                  <span className={Styles.fbRed}>e</span>
                  <span className={Styles.fbGray}> Firebase</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-ltGray text-xl text-center">
            Dynamic and Interactive
            <br />
            Client-Side Applications
          </p>
          <div className="flex justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-8/12 font-bold p-4 shadow-lg shadow-dkGray">
            <div className="flex flex-col items-center hover:text-htmlOrange transition-colors duration-500">
              <FaHtml5 className="text-5xl" />
              <p>HTML5</p>
            </div>
            <div className="flex flex-col items-center hover:text-cssBlue transition-colors duration-500">
              <FaCss3Alt className="text-5xl" />
              <p>CSS3</p>
            </div>
            <div className="flex flex-col items-center hover:text-jsYellow transition-colors duration-500">
              <DiJavascript className="text-5xl" />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center hover:text-twBlue transition-colors duration-500">
              <SiTailwindcss className="text-5xl" />
              <p>Tailwind</p>
            </div>
            <div className="flex flex-col items-center hover:text-bsPurple transition-colors duration-500">
              <FaBootstrap className="text-5xl" />
              <p>Bootstrap</p>
            </div>
            <div className="flex flex-col items-center hover:text-bulmaGreen transition-colors duration-500">
              <SiBulma className="text-5xl" />
              <p>Bulma</p>
            </div>
            <div className="flex flex-col items-center hover:text-reactBlue transition-colors duration-500">
              <FaReact className="text-5xl" />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
              <SiNextdotjs className="text-5xl" />
              <p>Next.js</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-ltGray text-xl text-center">
            Additional Technologies
            <br />
            and Tools...
          </p>
          <div className="flex flex-col justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-9/12 font-bold p-4 shadow-lg shadow-dkGray">
            <div className="flex justify-evenly items-center w-full">
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
              <div
                className={`${Styles.rdxAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiRedux className={`${Styles.rdxIcon} text-5xl`} />
                <p className={Styles.rdxText}>Redux</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-full">
              <div className="flex flex-col items-center hover:text-pmOrange transition-colors duration-500">
                <SiPostman className="text-5xl" />
                <p>Postman</p>
              </div>
              <div className="flex flex-col items-center hover:text-jstPurple transition-colors duration-500">
                <SiJest className="text-5xl" />
                <p>Jest</p>
              </div>
              <div
                className={`${Styles.handlebarAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiHandlebarsdotjs
                  className={`${Styles.handlebarIcon} text-5xl`}
                />
                <p className={Styles.handlebarText}>Handlebar.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-graphQL transition-colors duration-500">
                <SiGraphql className="text-5xl" />
                <p>GraphQL</p>
              </div>
              <div
                className={`${Styles.sequelizeAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiSequelize className={`${Styles.sequelizeIcon} text-5xl`} />
                <p className={Styles.sequelizeText}>Sequelize.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-seoBlue transition-colors duration-500">
                <TbSeo className="text-5xl" />
                <p className="text-center">
                  Search Engine <br />
                  Optimization
                </p>
              </div>
              <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
                <SiApollographql className="text-5xl" />
                <p>Apollo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
