import Image from "next/image";
import Styles from "./styles.module.css";
import { FaDesktop, FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full">
        <div className="flex flex-col items-center w-full">
          <h1 className="border-y rounded-l-full border-ltGray bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-2/3">
            <span className="pl-10">PROJECTS</span>
          </h1>
          <div className="flex justify-evenly items-start text-ltGray text-xl w-full pt-10">
            <button className="hover:bg-blue py-1 px-6">ALL</button>
            <button className="hover:bg-blue py-1 px-6">JAVASCRIPT</button>
            <button className="hover:bg-blue py-1 px-6">REACT JS</button>
            <button className="hover:bg-blue py-1 px-6">NEXT JS</button>
          </div>
        </div>
        <div className="flex flex-wrap grid grid-cols-3 bg-white">
          <button className="flex justify-center items-center text-blue">
            <p className="absolute">Learn More</p>
            <Image
              className={`${Styles.img} relative`}
              src="/shortStack.png"
              width={350}
              height={350}
              alt="Short Stack Videos app thumbnail"
            />
          </button>
          <button className="flex justify-center items-center text-blue">
            <p className="absolute">Learn More</p>
            <Image
              className={`${Styles.img} relative`}
              src="/thisLittlePiggy.png"
              width={350}
              height={350}
              alt="This Little Piggy app thumbnail"
            />
          </button>
          <button className="flex justify-center items-center text-blue">
            <p className="absolute">Learn More</p>
            <Image
              className={`${Styles.img} relative`}
              src="/mrMovie.png"
              width={350}
              height={350}
              alt="Mr Movie app thumbnail"
            />
          </button>
          <button className="flex justify-center items-center text-blue">
            <p className="absolute">Learn More</p>
            <Image
              className={`${Styles.img} relative`}
              src="/weatherForecast.png"
              width={350}
              height={350}
              alt="Weather Forecast app thumbnail"
            />
          </button>
          <button className="flex justify-center items-center text-blue">
            <p className="absolute">Learn More</p>
            <Image
              className={`${Styles.img} relative`}
              src="/taskScheduler.png"
              width={350}
              height={350}
              alt="Task Scheduler app thumbnail"
            />
          </button>
          <button className="flex justify-center items-center text-blue">
            <p className="absolute">Learn More</p>
            <Image
              className={`${Styles.img} relative`}
              src="/passwordGenerator.png"
              width={350}
              height={350}
              alt="Password Generator app thumbnail"
            />
          </button>
        </div>
      </div>
    </>
  );
}
