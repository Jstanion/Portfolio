import Image from "next/image";
import { FaDesktop, FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-evenly">
        <h1 className="border-y border-ltGray text-4xl text-ltGray py-5">
          PROJECTS
        </h1>
        <div className="flex justify-evenly items-start text-ltGray text-xl w-full pt-10">
          <button className="hover:bg-blue py-1 px-6">ALL</button>
          <button className="hover:bg-blue py-1 px-6">JAVASCRIPT</button>
          <button className="hover:bg-blue py-1 px-6">REACT JS</button>
          <button className="hover:bg-blue py-1 px-6">NEXT JS</button>
        </div>
        <div className="flex flex-wrap grid grid-cols-3 bg-white">
          <Image
            className=""
            src="/shortStack.png"
            width={350}
            height={350}
            alt="Short Stack Videos app thumbnail"
          />
          <Image
            className=""
            src="/thisLittlePiggy.png"
            width={350}
            height={350}
            alt="This Little Piggy app thumbnail"
          />
          <Image
            className=""
            src="/mrMovie.png"
            width={350}
            height={350}
            alt="Mr Movie app thumbnail"
          />
          <Image
            className=""
            src="/weatherForecast.png"
            width={350}
            height={350}
            alt="Weather Forecast app thumbnail"
          />
          <Image
            className=""
            src="/taskScheduler.png"
            width={350}
            height={350}
            alt="Task Scheduler app thumbnail"
          />
          <Image
            className=""
            src="/passwordGenerator.png"
            width={350}
            height={350}
            alt="Password Generator app thumbnail"
          />
        </div>
      </div>
    </>
  );
}
