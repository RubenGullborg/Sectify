import React from "react";
import Link from "next/link";
import { GradientSection } from "@/components/sections/backgrounds/radial/radial-section";
import BackgroundPaths from "@/components/sections/backgrounds/backgroundBeams/beam-section";
import { motion } from "framer-motion";

interface SectionCard {
  id: string;
  title: string;
  category: string;
  path: string;
  description: string;
  component?: React.ReactNode;
}

const sectionCards: SectionCard[] = [
  {
    id: "hero-1",
    title: "Radial Dark Sun",
    category: "Background",
    path: "/components/radial",
    description: "Explore the vibrant hero section of moon and sun in all colors.",
    component: (
      <GradientSection
        title="Another Style Variation"
        subtitle="Explore different color combinations for your sections"
        primaryColor="#000428"
        secondaryColor="#004e92"
        tertiaryColor="#000000"
        overlayOpacity={0.7}
        primaryButtonText="Get Access"
        secondaryButtonText="Read Docs"
        className="border-t border-white/10"
      />
    ),
  },
  {
    id: "hero-2",
    title: "Background Beams",
    category: "Background",
    path: "/components/backgroundBeams",
    description: "An interactive component featuring animated background beams with customizable colors and animations.",
    component: (
      <BackgroundPaths
        title="Dynamic Background"
        buttonText="Explore More"
        titleGradientClass="bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple"
        pathCount={10}
        pathOpacity={0.2}
        animationSpeed={0.5}
      />
    ),
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

        <div className="columns-1 sm:columns-2 lg:columns-1 gap-4 space-y-4">
          {sectionCards.map((card) => (
            <Link
              href={card.path}
              key={card.id}
              className="block mb-4 break-inside-avoid"
            >
              <div className="group bg-white rounded-2xl overflow-hidden border-b-8 border-sectifyLightPurple shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-screen w-full overflow-hidden">
                  {card.component || (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Preview not available</span>
                    </div>
                  )}
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
