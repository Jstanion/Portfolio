import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/logo.svg"
        alt="alchemy Logo"
        width={300}
        height={300}
        priority
      />
    </div>

  );
}
