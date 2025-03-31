import React from "react";
import Link from "next/link";
import { GradientSection } from "@/components/sections/backgrounds/radial/radial-section";


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

        
      </div>
    </div>
  );
}
