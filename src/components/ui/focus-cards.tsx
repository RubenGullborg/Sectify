"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link"; // Import Link from Next.js

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    href, // Accept href as a prop
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    href: string; // The href for the card link
  }) => (
    <Link href={href}>
      {" "}
      {/* Wrap the card in the Link component */}
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative dark:bg-neutral-900 h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0 rounded-3xl"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 rounded-3xl",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  href?: string; // href can be optional
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full my-24">
      <div className="relative z-10 text-center mb-16">
        <span className="text-sm font-medium text-sectifyLightPurple/90 mb-4 block tracking-wide uppercase">
          Component Library
        </span>
        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sectifyGreen via-sectifyLightPurple to-sectifyFairyTale mb-6">
          Build the Future
        </h2>
        <p className="text-xl md:text-2xl text-sectifyEggWhite/80 max-w-3xl mx-auto font-light">
          Discover our collection of modern, interactive components designed for
          your next project
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            href={card.href || "/default-link"}
          />
        ))}
      </div>
    </div>
  );
}
