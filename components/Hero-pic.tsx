import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Hero() {
  const t = await getTranslations("Info");
  return (
    <div className="bg2">
      <div className="container py-25! min-h-screen flex flex-col z-1 items-center gap-[20px] md:flex-row md:justify-between">
        <Image
          src="/hero.png"
          alt="profile image"
          width={300}
          height={400}
          className="w-full bg-2 md:w-[40%]"
        />
        <div className="hero-profile text-center w-full md:text-start md:w-[50%] ">
          <TextGenerateEffect
            duration={2}
            filter={false}
            className="text-[42px] font-bold mb-1"
            words={t("name")}
          />
          <TextGenerateEffect
            duration={2}
            filter={false}
            className="mb-5 text-[14px] tracking-wide"
            words={t("job")}
          />
          <TextGenerateEffect
            duration={3}
            filter={true}
            className="mb-5 text-[18px] leading-8 tracking-wider"
            words={t("description")}
          />
        </div>
      </div>
    </div>
  );
}
