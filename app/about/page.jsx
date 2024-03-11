import Image from "next/image";
import Styles from "./styles.module.css";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-end w-full h-full">
      <div className="flex justify-end w-full">
        <div className={`${Styles.titleDiv} flex justify-end w-full`}>
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue sm:text-4xl text-ltGray font-extralight py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10 text-yellow">ABOUT</span>
            <span className="text-xs"> </span>
            <span className="font-bold">ME</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex justify-center pt-4 h-full">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start w-3/4 h-full">
            <div
              className={`${Styles.fadeInImage} flex justify-center lg:bg-gradient-to-r from-blue rounded-l-full border-blue`}
            >
              <Image
                id={Styles.profile}
                className="lg:rounded-l-full h-fit"
                width={370}
                height={300}
                src="/profile.png"
                alt="Picture of the author"
              />
            </div>
            <div
              className={`${Styles.fadeInTitle} flex flex-col justify-between items-center h-1/3 lg:w-1/2`}
            >
              <div className="flex justify-center w-full lg:border-r bg-gradient-to-r lg:bg-gradient-to-l from-blue rounded-l-full lg:rounded-l-none lg:rounded-r-full border-blue lg:p-4">
                <span className="text-yellow text-3xl md:text-6xl">J</span>
                <p className="text-ltGray md:text-4xl font-extralight">
                  oseph
                  <br/>
                  <span className="text-yellow text-3xl md:text-6xl font-normal">
                    S
                  </span>
                  tanion
                </p>
              </div>
              <p
                className={`${Styles.fadeInIntro} text-xs md:text-2xl lg:text-base text-center md:leading-loose lg:leading-7 py-2 w-full md:w-5/6`}
              >
                <span className="text-ltGray">
                  As a full-stack web developer, I have a strong passion for
                  creating unique, modern user interfaces and optimized backend
                  databases to give you the best web experience possible.{" "}
                </span>
                <br />
                <span className="text-mdGray">
                  As a former restaurant manager and team leader, I have over
                  ten years of experience in providing excellent customer
                  service, delivering high-quality products, and creative
                  problem solving.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
