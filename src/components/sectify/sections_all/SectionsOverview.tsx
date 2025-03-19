import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SectionCard {
  id: string;
  title: string;
  image: string;
  category: string;
  path: string;
  description: string;
}

const sectionCards: SectionCard[] = [
  {
    id: "hero-1",
    title: "Hero Section 1",
    image: "/neon.jpeg",
    category: "Hero",
    path: "/components/radial",
    description: "Explore the vibrant hero section.",
  },
  {
    id: "feature-1",
    title: "Feature Grid",
    image: "/strong.png",
    category: "Features",
    path: "/sections/features/feature-1",
    description: "View the feature grid section.",
  },
  {
    id: "cta-1",
    title: "Call to Action",
    image: "/waveink.png",
    category: "CTA",
    path: "/sections/cta/cta-1",
    description: "View the call to action section.",
  },
  {
    id: "testimonial-1",
    title: "Testimonial Slider",
    image: "/abstract-black.png",
    category: "Testimonials",
    path: "/sections/testimonials/testimonial-1",
    description: "View the testimonial slider section.",
  },
  {
    id: "hero-2",
    title: "Hero Section 2",
    image: "/waveink.png",
    category: "Hero",
    path: "/sections/hero/hero-2",
    description: "View the second hero section.",
  },
  {
    id: "feature-2",
    title: "Feature List",
    image: "/neon.jpeg",
    category: "Features",
    path: "/sections/features/feature-2",
    description: "View the feature list section.",
  },
];

export default function SectionsOverview() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-7xl font-bold pb-4 bg-gradient-to-r from-sectifyGreen via-sectifyLightPurple to-sectifyFairyTale bg-clip-text text-transparent mb-6">
            Discover our Component Library
          </h1>
          <p className="text-lg text-sectifyEggWhite/80 leading-relaxed">
            Discover elegant, responsive, and highly customizable UI components
            that seamlessly integrate into your projects. Each component is
            crafted with as few dependencies as possible, so you can copy +
            paste your way to beautiful interfaces faster.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-2 gap-4 space-y-4">
          {sectionCards.map((card) => (
            <Link
              href={card.path}
              key={card.id}
              className="block mb-4 break-inside-avoid"
            >
              <div className="group bg-white rounded-2xl overflow-hidden border-2 border-sectifyLightPurple shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                  <div className="absolute top-3 right-3 bg-sectifyGreen/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                    {card.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-sectifyFairyTale transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm font-medium group-hover:text-sectifyDarkPurple transition-colors duration-300">
                      {card.description}
                    </span>
                    <div className="h-10 w-10 rounded-full border-2 border-sectifyLightPurple flex items-center justify-center transition-all duration-300 group-hover:bg-sectifyFairyTale group-hover:border-sectifyFairyTale group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-sectifyGreen"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
