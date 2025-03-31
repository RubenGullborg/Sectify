import React from "react";
import Link from "next/link";

interface SectionComponent {
  id: string;
  title: string;
  path: string;
}

interface SectionCategory {
  name: string;
  components: SectionComponent[];
}

const sectionCategories: SectionCategory[] = [
  {
    name: "Hero Sections",
    components: [
      {
        id: "hero-1",
        title: "Radial Dark Sun",
        path: "/components/Hero-sections/radial",
      },
    ]
  },
  {
    name: "Background Components",
    components: [
      {
        id: "bg-1",
        title: "Background Beams",
        path: "/components/backgroundBeams",
      },
      {
        id: "bg-2",
        title: "Hypno Background",
        path: "/components/hypno",
      },
    ]
  },
  {
    name: "Testimonial Sections",
    components: [
      {
        id: "testimonial-1",
        title: "Simple Testimonials",
        path: "/components/testimonials/simple",
      },
    ]
  },
  {
    name: "Gallery Sections",
    components: [
      {
        id: "gallery-1",
        title: "Grid Gallery",
        path: "/components/gallery/grid",
      },
    ]
  },
  {
    name: "Feature Sections",
    components: [
      {
        id: "feature-1",
        title: "Feature Grid",
        path: "/components/features/grid",
      },
    ]
  }
];

export default function SectionsOverview() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-7xl font-bold pb-4 bg-gradient-to-r from-sectifyGreen via-sectifyLightPurple to-sectifyFairyTale bg-clip-text text-transparent mb-6">
            Component Library
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            A collection of elegant, responsive, and highly customizable UI components
            for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {sectionCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl"
            >
              <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">
                {category.name}
              </h2>
              <ul className="space-y-2">
                {category.components.map((component) => (
                  <li key={component.id}>
                    <Link 
                      href={component.path}
                      className="flex items-center text-white/80 hover:text-sectifyGreen transition-colors py-2 group"
                    >
                      <span className="text-sm mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {component.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
