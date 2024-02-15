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
        <div className={`${Styles.titleDiv} flex justify-end w-full`}>
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue md:text-4xl text-ltGray font-extralight pt-1 lg:py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10 text-yellow">TOOLS</span>
            <span className="text-xs"> </span>
            <span className="text-2xl font-thin align-middle text-dkGray">
              &
            </span>
            <span className="text-xs"> </span>
            <span className="font-bold">SKILLS</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-end h-5/6 w-full">
        <div className={`${Styles.titleFadeIn} flex justify-start w-full`}>
          <p class="text-ltGray text-xl">What I use to create...</p>
        </div>
        <div
          className={`${Styles.backEndFadeIn} flex flex-col lg:flex-row justify-between items-end lg:items-center w-full`}
        >
          <p className="text-ltGray text-xl text-center">
            Optimized and Scalable
            <br />
            Back-End Applications
          </p>
          <div
            className={`${Styles.backEndDiv} flex justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-11/12 lg:w-7/12 font-bold p-4 shadow-lg shadow-dkGray`}
          >
            <div className="flex flex-wrap justify-evenly items-center w-full">
              <div className="flex flex-col items-center hover:text-nodeGreen transition-colors duration-500">
                <FaNodeJs className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Node.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-jsYellow transition-colors duration-500">
                <SiExpress className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Express.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-mdbGreen transition-colors duration-500">
                <SiMongodb className="lg:text-5xl" />
                <p className="text-xs lg:text-base">MongoDB</p>
              </div>
              <div
                className={`${Styles.sqlAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <GrMysql className={`${Styles.sqlIcon}  lg:text-5xl`} />
                <p className={`${Styles.sqlText} text-xs lg:text-base`}>MySQL</p>
              </div>
              <div className="flex flex-col items-center hover:text-mgRed transition-colors duration-500">
                <SiMongoose className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Mongoose</p>
              </div>
              <div
                className={`${Styles.fbAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiFirebase className={`${Styles.fbYellow} lg:text-5xl`} />
                <p className={`${Styles.fbBlue} text-xs lg:text-base`}>
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
        <div
          className={`${Styles.frontEndFadeIn} flex justify-between items-center w-full`}
        >
          <p className="text-ltGray text-xl text-center">
            Dynamic and Interactive
            <br />
            Client-Side Applications
          </p>
          <div
            className={`${Styles.frontEndDiv} flex justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-8/12 font-bold p-4 shadow-lg shadow-dkGray`}
          >
            <div className="flex flex-col items-center hover:text-htmlOrange transition-colors duration-500">
              <FaHtml5 className="lg:text-5xl" />
              <p className="text-xs lg:text-base">HTML5</p>
            </div>
            <div className="flex flex-col items-center hover:text-cssBlue transition-colors duration-500">
              <FaCss3Alt className="lg:text-5xl" />
              <p className="text-xs lg:text-base">CSS3</p>
            </div>
            <div className="flex flex-col items-center hover:text-jsYellow transition-colors duration-500">
              <DiJavascript className="lg:text-5xl" />
              <p className="text-xs lg:text-base">JavaScript</p>
            </div>
            <div className="flex flex-col items-center hover:text-twBlue transition-colors duration-500">
              <SiTailwindcss className="lg:text-5xl" />
              <p className="text-xs lg:text-base">Tailwind</p>
            </div>
            <div className="flex flex-col items-center hover:text-bsPurple transition-colors duration-500">
              <FaBootstrap className="lg:text-5xl" />
              <p className="text-xs lg:text-base">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center hover:text-bulmaGreen transition-colors duration-500">
              <SiBulma className="lg:text-5xl" />
              <p className="text-xs lg:text-base">Bulma</p>
            </div>
            <div className="flex flex-col items-center hover:text-reactBlue transition-colors duration-500">
              <FaReact className="lg:text-5xl" />
              <p className="text-xs lg:text-base">React</p>
            </div>
            <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
              <SiNextdotjs className="lg:text-5xl" />
              <p className="text-xs lg:text-base">Next.js</p>
            </div>
          </div>
        </div>
        <div
          className={`${Styles.otherToolsFadeIn} flex justify-between items-center w-full`}
        >
          <p className="text-ltGray text-xl text-center">
            Additional Technologies
            <br />
            and Tools...
          </p>
          <div
            className={`${Styles.otherToolsDiv} flex flex-col justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-9/12 font-bold p-4 shadow-lg shadow-dkGray`}
          >
            <div className="flex justify-evenly items-center w-full">
              <div className="flex flex-col items-center hover:text-npmRed transition-colors duration-500">
                <FaNpm className="lg:text-5xl" />
                <p className="text-center text-xs lg:text-base">
                  Node Package
                  <br /> Manager
                </p>
              </div>
              <div className="flex flex-col items-center hover:text-gitOrange transition-colors duration-500">
                <BsGit className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Git</p>
              </div>
              <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
                <BsGithub className="lg:text-5xl" />
                <p className="text-xs lg:text-base">GitHub</p>
              </div>
              <div className="flex flex-col items-center hover:text-herokuPurple transition-colors duration-500">
                <SiHeroku className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Heroku</p>
              </div>
              <div
                className={`${Styles.wbAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiWebpack className={`${Styles.wbIcon} lg:text-5xl`} />
                <p className={`${Styles.wbText} text-xs lg:text-base`}>Webpack.js</p>
              </div>
              <div
                className={`${Styles.rdxAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiRedux className={`${Styles.rdxIcon} lg:text-5xl`} />
                <p className={`${Styles.rdxText} text-xs lg:text-base`}>Redux</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-full">
              <div className="flex flex-col items-center hover:text-pmOrange transition-colors duration-500">
                <SiPostman className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Postman</p>
              </div>
              <div className="flex flex-col items-center hover:text-jstPurple transition-colors duration-500">
                <SiJest className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Jest</p>
              </div>
              <div
                className={`${Styles.handlebarAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiHandlebarsdotjs
                  className={`${Styles.handlebarIcon} lg:text-5xl`}
                />
                <p className={`${Styles.handlebarText} text-xs lg:text-base`}>Handlebar.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-graphQL transition-colors duration-500">
                <SiGraphql className="lg:text-5xl" />
                <p className="text-xs lg:text-base">GraphQL</p>
              </div>
              <div
                className={`${Styles.sequelizeAnchor} flex flex-col items-center transition-colors duration-500`}
              >
                <SiSequelize
                  className={`${Styles.sequelizeIcon} lg:text-5xl`}
                />
                <p className={`${Styles.sequelizeText} text-xs lg:text-base`}>Sequelize.js</p>
              </div>
              <div className="flex flex-col items-center hover:text-seoBlue transition-colors duration-500">
                <TbSeo className="lg:text-5xl" />
                <p className="text-center text-xs lg:text-base">
                  Search Engine <br />
                  Optimization
                </p>
              </div>
              <div className="flex flex-col items-center hover:text-njsBlack transition-colors duration-500">
                <SiApollographql className="lg:text-5xl" />
                <p className="text-xs lg:text-base">Apollo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
