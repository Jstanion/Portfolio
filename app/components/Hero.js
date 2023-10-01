import NextImage from "next/image";

export default function Hero() {
  const words = ["JavaScript specialist's...", "React ..."];

  return (
    <div className="flex height-fix">
      <p className="text-4xl text-ltGray">
        Hello, I&apos;m <span className="text-yellow">Joseph Stanion</span>
        <br />
        {words}
      </p>
    </div>
  );
}
