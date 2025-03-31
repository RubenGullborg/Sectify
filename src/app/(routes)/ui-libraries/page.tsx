"use client";

import React from "react";
import Link from "next/link";

interface UILibrary {
  name: string;
  description: string;
  url: string;
  category: "Component Library" | "Design System" | "Inspiration";
}

const uiLibraries: UILibrary[] = [
  {
    name: "shadcn/ui",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    url: "https://ui.shadcn.com/",
    category: "Component Library",
  },
  {
    name: "Chakra UI",
    description:
      "A simple, modular and accessible component library that gives you the building blocks to build React applications.",
    url: "https://chakra-ui.com/",
    category: "Component Library",
  },
  {
    name: "Material UI",
    description:
      "React components for faster and easier web development. Build your own design system, or start with Material Design.",
    url: "https://mui.com/",
    category: "Component Library",
  },
  {
    name: "Mantine",
    description:
      "A fully featured React components library with 100+ customizable components and hooks.",
    url: "https://mantine.dev/",
    category: "Component Library",
  },
  {
    name: "daisyUI",
    description: "The most popular component library for Tailwind CSS.",
    url: "https://daisyui.com/",
    category: "Component Library",
  },
  {
    name: "Primer",
    description: "GitHub's design system and component library.",
    url: "https://primer.style/",
    category: "Design System",
  },
  {
    name: "Ant Design",
    description:
      "A design system for enterprise-level products. Create an efficient and enjoyable work experience.",
    url: "https://ant.design/",
    category: "Design System",
  },
  {
    name: "Radix UI",
    description:
      "Unstyled, accessible components for building high-quality design systems and web apps in React.",
    url: "https://www.radix-ui.com/",
    category: "Component Library",
  },
  {
    name: "NextUI",
    description: "Beautiful, fast and modern React UI library.",
    url: "https://nextui.org/",
    category: "Component Library",
  },
  {
    name: "TailwindUI",
    description:
      "Beautiful UI components, crafted by the creators of Tailwind CSS.",
    url: "https://tailwindui.com/",
    category: "Component Library",
  },
  {
    name: "Flowbite",
    description:
      "Build websites even faster with components on top of Tailwind CSS.",
    url: "https://flowbite.com/",
    category: "Component Library",
  },
  {
    name: "Headless UI",
    description:
      "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
    url: "https://headlessui.com/",
    category: "Component Library",
  },
  {
    name: "Origin UI",
    description:
      "An open-source collection of copy-and-paste components for quickly build application UIs.",
    url: "https://originui.com/",
    category: "Component Library",
  },
  {
    name: "Skiper UI",
    description: "Mostly animated components crafted for modern Websites",
    url: "https://skiper-ui.com/",
    category: "Component Library",
  },
  {
    name: "Fancy Components",
    description:
      "A growing free & open source library of ready-to-use react components & microinteractions.",
    url: "https://www.fancycomponents.dev/",
    category: "Component Library",
  },
  {
    name: "Franken UI",
    description:
      "A rather unknown UI Library based on shadcn that uses UIkit 3 extended with LitElement.",
    url: "https://franken-ui.dev/",
    category: "Component Library",
  },
  {
    name: "Base-UI",
    description:
      "Unstyled UI components from the creators of Radix and Material UI, that can serve as a shadcn alternative.",
    url: "https://base-ui.com/",
    category: "Component Library",
  },
  {
    name: "Starwind",
    description:
      "A set of powerful, accessible components for Astro projects. Styled with Tailwind CSS v4.",
    url: "https://starwind.dev/",
    category: "Component Library",
  },
  {
    name: "Awwwards",
    description:
      "The awards for design, creativity and innovation on the internet.",
    url: "https://www.awwwards.com/",
    category: "Inspiration",
  },
  {
    name: "Dribbble",
    description:
      "Discover the world's top designers & creatives. Find design inspiration for your next project.",
    url: "https://dribbble.com/",
    category: "Inspiration",
  },
  {
    name: "Mobbin",
    description:
      "Mobbin is a great resource for finding design inspiration and getting ideas for your next project.",
    url: "https://mobbin.com/",
    category: "Inspiration",
  },
];

export default function UILibrariesPage() {
  const categories = [...new Set(uiLibraries.map(lib => lib.category))];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pb-24 pt-40">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            UI Libraries & Inspiration
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the best UI libraries, design systems, and resources to enhance your projects
            and find inspiration for your next masterpiece.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map(category => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-2">
                {category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uiLibraries
                  .filter(lib => lib.category === category)
                  .map(library => (
                    <a
                      key={library.name}
                      href={library.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col h-full bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-4">
                        {library.name}
                      </h3>
                      
                      <p className="text-sm text-gray-300 flex-grow">
                        {library.description}
                      </p>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
