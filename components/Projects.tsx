"use client";

import { Carousel, Card } from "@/components/ui/projects/AppleCardsCarousel";
import { projects } from "@/data";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="bg2 py-25" id="projects">
      <div className="container h-full">
        <h2 className="mx-auto text-xl md:text-4xl font-bold">
          {t("heading")}
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}
