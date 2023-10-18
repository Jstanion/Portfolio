import Image from "next/image";
import Styles from "./styles.module.css";

export default function About() {
  return (
    <div className="flex justify-evenly items-center w-full">
      <div className="flex flex-col w-2/5">
        <div
          className={`${Styles.fadeInTitle} flex justify-center h-fit border-l bg-gradient-to-r from-blue rounded-l-full border-blue p-4`}
        >
          <span className="text-yellow text-8xl">J</span>
          <p className="text-ltGray text-6xl">
            oseph
            <br />
            <span className="text-yellow text-8xl">S</span>tanion
          </p>
        </div>
        <p
          className={`${Styles.fadeInIntro} border-b border-dkGray text-2xl text-center leading-7 p-6`}
        >
          As a former restaurant manager and team leader, I have over ten years
          of experience in delivering customer satisfaction, maintaining a
          positive attitude, and solving problems creatively. As a full-stack
          web developer, I have the same passion for creating unique and modern
          user interfaces and optimize backend databases to give you the best
          web experience possible.
        </p>
      </div>
      <Image
        id={Styles.profile}
        className={`${Styles.fadeInImage} bg-gradient-to-l from-blue border-r rounded-r-full border-blue h-fit`}
        width={500}
        height={300}
        src="/profile-3.jpg"
        alt="Picture of the author"
      />
    </div>
  );
}
