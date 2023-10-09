import { TbBrandJavascript } from "react-icons/tb";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-evenly w-full">
      <div className="flex flex-col items-center w-full">
        <h1 className="border-l-4 rounded-l-full border-ltGray bg-gradient-to-r from-blue text-4xl text-ltGray py-4 w-2/3">
          <span className="pl-10">SKILLS</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-blue border-l-8 border-yellow rounded-l-full h-2/3 w-full">
        <div>
          <TbBrandJavascript className="text-yellow text-8xl" />
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
}
