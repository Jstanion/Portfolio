import Image from "next/image";
import Styles from "./styles.module.css";

export default function About() {
  return (
    <div className="flex flex-col items-end w-full h-full">
      <div className="flex justify-end w-full">
        <div className="flex justify-end w-full">
          <h1 className="border-l-4 rounded-l-full border-y border-yellow bg-gradient-to-r from-blue text-4xl text-ltGray font-extralight py-4 w-9/12 shadow-lg shadow-black">
            <span className="pl-10 text-yellow">ABOUT</span>
            <span className="text-xs"> </span>
            <span className="font-bold">ME</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex justify-center pt-4">
          <div className="flex justify-between items-start w-3/4 h-full">
            <div
              className={`${Styles.fadeInTitle} flex flex-col justify-between items-center w-1/2`}
            >
              <div className="flex justify-center w-full border-l bg-gradient-to-r from-blue rounded-l-full border-blue p-4">
                <span className="text-yellow text-6xl">J</span>
                <p className="text-ltGray text-4xl">
                  oseph
                  <br />
                  <span className="text-yellow text-6xl">S</span>tanion
                </p>
              </div>
              <p
                className={`${Styles.fadeInIntro} text-md text-center leading-7 p-6 w-5/6`}
              >
                <span className="text-dkGray">
                  As a full-stack web developer, I have a strong passion for
                  creating unique, modern user interfaces and optimized
                  backend databases to give you the best web experience
                  possible.{" "}
                </span>
                <span className="text-ltGray">
                  As a former restaurant manager and team leader, I have over
                  ten years of experience in delivering customer satisfaction,
                  maintaining a positive attitude, and solving problems
                  creatively.
                </span>
              </p>
            </div>
            <Image
              id={Styles.profile}
              className={`${Styles.fadeInImage} bg-gradient-to-l from-blue border-r rounded-r-full border-blue h-fit`}
              width={370}
              height={300}
              src="/profile-3.jpg"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
