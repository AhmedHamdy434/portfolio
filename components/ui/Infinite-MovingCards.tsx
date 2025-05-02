"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  en = true,
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: ReactNode;
    name: string;
  }[];
  en?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-full shrink-0 flex-nowrap gap-4 py-4",
          start && `${en ? "animate-scrollInfEn" : "animate-scrollInfAr"}`,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative w-[100px] shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)]
             dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] flex flex-col items-center justify-center gap-4 py-3
             hover:scale-110 hover:rotate-6 transition-all duration-300"
            key={`item.name${index}`}
          >
            <div
              aria-hidden="true"
              className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            {item.icon}
            <div className="text-[10px] z-20">{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
