"use client";

import { Carousel, Card } from "@/components/ui/projects/AppleCardsCarousel";
import { projects } from "@/data";

export default function Projects() {
  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="container h-full py-25!">
      <h2 className="mx-auto text-xl md:text-4xl font-bold" id="projects">
        Personal Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
