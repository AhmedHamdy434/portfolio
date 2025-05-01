import { hero } from "@/data";
import BackgroundBeams from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <>
      <BackgroundBeams />
      <div className="container py-25! flex flex-col z-1 items-center gap-[20px] md:flex-row md:justify-between">
        <div className="w-full h-[400px] bg-red-500 md:w-[40%]"></div>
        <div className="hero-profile text-center w-full md:text-start md:w-[50%] ">
          <TextGenerateEffect
            duration={2}
            filter={false}
            className="text-[42px] font-bold mb-1"
            words={hero.head}
          />
          <TextGenerateEffect
            duration={2}
            filter={false}
            className="mb-5 text-[14px] tracking-wide"
            words={hero.job}
          />
          <TextGenerateEffect
            duration={3}
            filter={true}
            className="mb-5 text-[18px] leading-8 tracking-wider"
            words={hero.description}
          />
        </div>
      </div>
    </>
  );
}
