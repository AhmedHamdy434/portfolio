import BackgroundBeams from "./ui/BackgroundBeams";
import { ColourfulText } from "./ui/ColourfulText";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  const description =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique eum beatae officiis error! Itaque inventore recusandae";
  return (
    <>
      <BackgroundBeams />
      <div className="container py-[50px] flex flex-col items-center gap-[20px] md:flex-row md:justify-between">
        <div className="w-screen h-[600px] bg-red-500 md:w-[40%]"></div>
        <div className="hero-profile text-center md:text-start">
          <ColourfulText
            className="text-[32px] font-bold mb-3"
            text="Ahmed Hamdy"
          />
          <h3 className="mb-5">Front End Developer</h3>
          <TextGenerateEffect
            duration={2}
            filter={false}
            className="mb-5"
            words={description}
          />
        </div>
      </div>
    </>
  );
}
