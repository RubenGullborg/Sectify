import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SectionCard {
  id: string;
  title: string;
  image: string;
  category: string;
  path: string;
}

const sectionCards: SectionCard[] = [
  {
    id: "hero-1",
    title: "Hero Section 1",
    image: "/neon.jpeg",
    category: "Hero",
    path: "/radial"
  },
  {
    id: "feature-1",
    title: "Feature Grid",
    image: "/images/sections/feature-1.jpg",
    category: "Features",
    path: "/sections/features/feature-1"
  },
  {
    id: "cta-1",
    title: "Call to Action",
    image: "/images/sections/cta-1.jpg",
    category: "CTA",
    path: "/sections/cta/cta-1"
  },
  {
    id: "testimonial-1",
    title: "Testimonial Slider",
    image: "/images/sections/testimonial-1.jpg",
    category: "Testimonials",
    path: "/sections/testimonials/testimonial-1"
  },
  {
    id: "hero-2",
    title: "Hero Section 2",
    image: "/images/sections/hero-2.jpg",
    category: "Hero",
    path: "/sections/hero/hero-2"
  },
  {
    id: "feature-2",
    title: "Feature List",
    image: "/images/sections/feature-2.jpg",
    category: "Features",
    path: "/sections/features/feature-2"
  }
];

export default function SectionsOverview() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-sectifyGreen mb-8">Section Components</h1>
      
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {sectionCards.map((card) => (
          <Link href={card.path} key={card.id} className="block mb-4 break-inside-avoid">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-sectifyGreen/20 hover:scale-[1.02] transition-all duration-300">
              <div className="relative h-48 w-full">
                <Image 
                  src={card.image} 
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-sectifyGreen text-white text-xs px-2 py-1 rounded-full">
                  {card.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">{card.title}</h3>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-gray-400 text-sm">View Component</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-sectifyGreen">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
