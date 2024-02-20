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
          <p class="text-ltGray text-sm lg:text-xl p-3 lg:p-0">
            What I use to create...
          </p>
        </div>
        {/* FIRST SECTION */}
        <div
          className={`${Styles.backEndFadeIn} flex flex-col lg:flex-row justify-between items-end lg:items-center w-full`}
        >
          <p className="text-ltGray text-sm lg:text-xl px-3 lg:p-0 text-center">
            Optimized and Scalable
            <br />
            Back-End Applications
          </p>
          <div
            className={`${Styles.backEndDiv} flex flex-wrap justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-11/12 lg:w-7/12 font-bold p-4 shadow-lg shadow-dkGray`}
          >
            <div className="flex flex-wrap justify-evenly items-center w-full">
              <div className={`${Styles.skillIcon} text-nodeGreen`}>
                <FaNodeJs />
                <p>Node.js</p>
              </div>
              <div className={`${Styles.skillIcon} text-jsYellow`}>
                <SiExpress />
                <p>Express.js</p>
              </div>
              <div className={`${Styles.skillIcon} text-mdbGreen`}>
                <SiMongodb />
                <p>MongoDB</p>
              </div>
              <div className={Styles.skillIcon}>
                <GrMysql className="text-sqlBlue" />
                <p className="text-sqlText">MySQL</p>
              </div>
              <div className={`${Styles.skillIcon} text-mgRed`}>
                <SiMongoose />
                <p>Mongoose</p>
              </div>
              <div
                className={`${Styles.skillIcon} flex flex-col items-center `}
              >
                <SiFirebase className="text-fbYellow" />
                <p className="text-fbGreen">
                  G<span className="text-fbRed">o</span>
                  <span className="text-fbYellow">o</span>
                  <span className="text-fbBlue">g</span>
                  <span>l</span>
                  <span className="text-fbRed">e</span>
                  <span className="text-fbYellow"> F</span>
                  <span className="text-fbBlue">i</span>
                  <span>r</span>
                  <span className="text-fbRed">e</span>
                  <span className="text-fbYellow">b</span>
                  <span className="text-fbBlue">a</span>
                  <span>s</span>
                  <span className="text-fbRed">e</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SECOND SECTION */}
        <div
          className={`${Styles.frontEndFadeIn} flex flex-col lg:flex-row justify-between items-end lg:items-center w-full`}
        >
          <p className="text-ltGray text-sm lg:text-xl px-3 pt-3 lg:p-0 text-center">
            Dynamic and Interactive
            <br />
            Client-Side Applications
          </p>
          <div
            className={`${Styles.frontEndDiv} flex flex-wrap justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-11/12 lg:w-8/12 font-bold p-4 shadow-lg shadow-dkGray`}
          >
            <div className={`${Styles.skillIcon} text-htmlOrange`}>
              <FaHtml5 />
              <p>HTML5</p>
            </div>
            <div className={`${Styles.skillIcon} text-cssBlue`}>
              <FaCss3Alt />
              <p>CSS3</p>
            </div>
            <div className={`${Styles.skillIcon} text-jsYellow`}>
              <DiJavascript />
              <p>JavaScript</p>
            </div>
            <div className={`${Styles.skillIcon} text-twBlue`}>
              <SiTailwindcss />
              <p>Tailwind</p>
            </div>
            <div className={`${Styles.skillIcon} text-bsPurple`}>
              <FaBootstrap />
              <p>Bootstrap</p>
            </div>
            <div className={`${Styles.skillIcon} text-bulmaGreen`}>
              <SiBulma />
              <p>Bulma</p>
            </div>
            <div className={`${Styles.skillIcon} text-reactBlue`}>
              <FaReact />
              <p>React</p>
            </div>
            <div className={`${Styles.skillIcon} text-njsBlack`}>
              <SiNextdotjs />
              <p>Next.js</p>
            </div>
          </div>
        </div>
        {/* THIRD SECTION */}
        <div
          className={`${Styles.otherToolsFadeIn} flex flex-col lg:flex-row justify-between items-end lg:items-center w-full`}
        >
          <p className="text-ltGray text-sm lg:text-xl px-3 pt-3 lg:p-0 text-center">
            Additional Technologies
            <br />
            and Tools...
          </p>
          <div
            className={`${Styles.otherToolsDiv} flex flex-col justify-evenly items-center bg-gradient-to-r from-blue border-l-8 border-y border-yellow rounded-l-full h-full w-11/12 lg:w-9/12 font-bold p-4 shadow-lg shadow-dkGray`}
          >
            <div className="flex flex-wrap justify-evenly items-center w-full">
              <div className={`${Styles.skillIcon} text-npmRed`}>
                <FaNpm />
                <p className="text-center text-xs lg:text-base">
                  Node Package
                  <br /> Manager
                </p>
              </div>
              <div className={`${Styles.skillIcon} text-gitOrange`}>
                <BsGit />
                <p>Git</p>
              </div>
              <div className={`${Styles.skillIcon} text-njsBlack`}>
                <BsGithub />
                <p>GitHub</p>
              </div>
              <div className={`${Styles.skillIcon} text-herokuPurple`}>
                <SiHeroku />
                <p>Heroku</p>
              </div>
              <div className={Styles.skillIcon}>
                <SiWebpack className="text-wbBlue" />
                <p className="text-wbText">Webpack.js</p>
              </div>
              <div className={Styles.skillIcon}>
                <SiRedux className="text-rdxIcon" />
                <p className="text-rdxText">Redux</p>
              </div>
              <div className={`${Styles.skillIcon} text-pmOrange`}>
                <SiPostman />
                <p>Postman</p>
              </div>
              <div className={`${Styles.skillIcon} text-jstPurple`}>
                <SiJest />
                <p>Jest</p>
              </div>
              <div className={`${Styles.skillIcon} text-njsBlack`}>
                <SiApollographql />
                <p>Apollo</p>
              </div>
              <div className={Styles.skillIcon}>
                <SiHandlebarsdotjs className="text-hdbIcon" />
                <p className="text-hdbText">Handlebar.js</p>
              </div>
              <div className={`${Styles.skillIcon} text-graphQL`}>
                <SiGraphql />
                <p>GraphQL</p>
              </div>
              <div className={Styles.skillIcon}>
                <SiSequelize className="text-seqIcon" />
                <p className="text-seqText">Sequelize.js</p>
              </div>
              <div className={`${Styles.skillIcon} text-seoBlue`}>
                <TbSeo />
                <p>
                  Search Engine <br />
                  Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
