import Image from "next/image";
import Styles from "./styles.module.css";
import { FaDesktop, FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center w-full">
          <h1 className="border-y rounded-l-full border-ltGray bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-2/3">
            <span className="pl-10">PROJECTS</span>
          </h1>
          <div className="flex justify-evenly text-ltGray text-xl w-full pt-10">
            <button className={Styles.button}>ALL</button>
            <button className={Styles.button}>JAVASCRIPT</button>
            <button className={Styles.button}>REACT JS</button>
            <button className={Styles.button}>NEXT JS</button>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <section className="flex justify-center items-center text-blue ">
            <div className={Styles.icons}>
              <a href="https://shortstack.vercel.app/">
                <FaDesktop className="text-5xl" />
                <p>Website</p>
              </a>
              <a href="https://github.com/Jstanion/ShortStack">
                <FaGithub className="text-5xl" />
                <p>GitHub</p>
              </a>
            </div>
            <Image
              className={Styles.img}
              src="/shortStack.png"
              width={350}
              height={200}
              alt="Short Stack Videos app thumbnail"
            />
          </section>
          <section className="flex justify-center items-center text-blue">
            <div className={Styles.icons}>
            <a href="https://shortstack.vercel.app/">
                <FaDesktop className="text-5xl" />
                <p>Website</p>
              </a>
              <a href="https://github.com/Jstanion/ShortStack">
                <FaGithub className="text-5xl" />
                <p>GitHub</p>
              </a>
            </div>
            <Image
              className={Styles.img}
              src="/thisLittlePiggy.png"
              width={350}
              height={350}
              alt="This Little Piggy app thumbnail"
            />
          </section>
          <section className="flex justify-center items-center text-blue">
            <div className={Styles.icons}>
            <a href="https://shortstack.vercel.app/">
                <FaDesktop className="text-5xl" />
                <p>Website</p>
              </a>
              <a href="https://github.com/Jstanion/ShortStack">
                <FaGithub className="text-5xl" />
                <p>GitHub</p>
              </a>
            </div>
            <Image
              className={Styles.img}
              src="/mrMovie.png"
              width={350}
              height={350}
              alt="Mr Movie app thumbnail"
            />
          </section>
          <section className="flex justify-center items-center text-blue">
            <div className={Styles.icons}>
            <a href="https://jstanion.github.io/Mr-Movie/">
                <FaDesktop className="text-5xl" />
                <p>Website</p>
              </a>
              <a href="https://github.com/Jstanion/Mr-Movie">
                <FaGithub className="text-5xl" />
                <p>GitHub</p>
              </a>
            </div>
            <Image
              className={Styles.img}
              src="/weatherForecast.png"
              width={350}
              height={350}
              alt="Weather Forecast app thumbnail"
            />
          </section>
          <section className="flex justify-center items-center text-blue">
            <div className={Styles.icons}>
            <a href="https://shortstack.vercel.app/">
                <FaDesktop className="text-5xl" />
                <p>Website</p>
              </a>
              <a href="https://github.com/Jstanion/ShortStack">
                <FaGithub className="text-5xl" />
                <p>GitHub</p>
              </a>
            </div>
            <Image
              className={Styles.img}
              src="/taskScheduler.png"
              width={350}
              height={350}
              alt="Task Scheduler app thumbnail"
            />
          </section>
          <section className="flex justify-center items-center text-blue">
            <div className={Styles.icons}>
            <a href="https://shortstack.vercel.app/">
                <FaDesktop className="text-5xl" />
                <p>Website</p>
              </a>
              <a href="https://github.com/Jstanion/ShortStack">
                <FaGithub className="text-5xl" />
                <p>GitHub</p>
              </a>
            </div>
            <Image
              className={Styles.img}
              src="/passwordGenerator.png"
              width={350}
              height={350}
              alt="Password Generator app thumbnail"
            />
          </section>
        </div>
      </div>
    </>
  );
}
