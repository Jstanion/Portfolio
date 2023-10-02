import Image from "next/image";
import Styles from "./styles.module.css";

export default function About() {
  return (
    <div className="flex justify-evenly w-full">
      <div className="flex justify-center h-fit w-2/5 border-y border-mdGray p-4">
      <span className="text-yellow text-8xl">J</span>
      <p className="text-ltGray text-6xl">oseph 
      <br />
      <span className="text-yellow text-8xl">S</span>tanion</p>

      </div>
      <Image
      className={`${Styles.blurImage} rounded-full h-fit self-center`}
      width={500}
      height={300}
      src="/profile.jpg"
      alt="Picture of the author"
      />
    </div>
  );
}
