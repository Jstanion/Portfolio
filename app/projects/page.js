import Image from "next/image";

export default function Project() {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <h1 className="border-y border-ltGray text-4xl text-ltGray py-5">
          PROJECTS
        </h1>
        <div className="flex justify-evenly items-start text-ltGray text-xl w-full pt-10">
          <button className="hover:text-blue">ALL</button>
          <button className="hover:text-blue">JAVASCRIPT</button>
          <button className="hover:text-blue">REACT JS</button>
          <button className="hover:text-blue">NEXT JS</button>
        </div>
        <div className="flex flex-wrap grid grid-cols-3 gap-x-20 gap-y-2 jusitfy-center items-center h-full w-full">
          

          <div>
            <Image
              className="rounded-lg"
              src="/thisLittlePiggy.png"
              width={300}
              height={300}
              alt="This Little Piggy app thumbnail"
            />
          </div>

          <div>
            <Image
              className="rounded-lg"
              src="/mrMovie.png"
              width={300}
              height={300}
              alt="Mr Movie app thumbnail"
            />
          </div>

          <div>
            <Image
              className="rounded-lg"
              src="/weatherForecast.png"
              width={300}
              height={300}
              alt="Weather Forecast app thumbnail"
            />
          </div>

          <div>
            <Image
              className="rounded-lg"
              src="/taskScheduler.png"
              width={300}
              height={300}
              alt="Task Scheduler app thumbnail"
            />
          </div>

          <div>
            <Image
              className="rounded-lg"
              src="/passwordGenerator.png"
              width={300}
              height={300}
              alt="Password Generator app thumbnail"
            />
          </div>
        </div>
      </div>
    </>
  );
}
