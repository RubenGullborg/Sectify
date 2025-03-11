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
    image: "/images/sections/feature-1.jpg",
    category: "Features",
    path: "/sections/features/feature-1",
    description: "View the feature grid section.",
  },
  {
    id: "cta-1",
    title: "Call to Action",
    image: "/images/sections/cta-1.jpg",
    category: "CTA",
    path: "/sections/cta/cta-1",
    description: "View the call to action section.",
  },
  {
    id: "testimonial-1",
    title: "Testimonial Slider",
    image: "/images/sections/testimonial-1.jpg",
    category: "Testimonials",
    path: "/sections/testimonials/testimonial-1",
    description: "View the testimonial slider section.",
  },
  {
    id: "hero-2",
    title: "Hero Section 2",
    image: "/images/sections/hero-2.jpg",
    category: "Hero",
    path: "/sections/hero/hero-2",
    description: "View the second hero section.",
  },
  {
    id: "feature-2",
    title: "Feature List",
    image: "/images/sections/feature-2.jpg",
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
          <h1 className="text-7xl font-bold pb-4 bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple bg-clip-text text-transparent mb-6">
            Discover Our Component Library
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Discover elegant, responsive, and highly customizable UI components
            that seamlessly integrate into your projects. Each component is
            crafted with as few dependencies as possible, so you can copy +
            paste your way to beautiful interfaces faster.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {sectionCards.map((card) => (
            <Link
              href={card.path}
              key={card.id}
              className="block mb-4 break-inside-avoid"
            >
              <div className="group bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 hover:border-sectifyGreen/50 shadow-lg hover:shadow-sectifyGreen/20 transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
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
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sectifyGreen transition-colors">
                    {card.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm font-medium group-hover:text-sectifyGreen/80 transition-colors">
                      {card.description}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-gray-700/50 group-hover:bg-sectifyGreen/20 flex items-center justify-center transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-sectifyGreen"
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
