"use client";

import BeamSection from "@/components/sections/backgrounds/backgroundBeams/beam-section";
import ComponentDocLayout from "@/components/Layout/ComponentDocLayout";

export default function BackgroundBeamsPage() {
  return (
    <ComponentDocLayout
      title="Background Beams Section"
      description="An interactive component featuring animated background beams, perfect for creating modern and dynamic hero sections with customizable colors and animations."
      badges={[
        { label: "UI Component", color: "blue" },
        { label: "Animation", color: "purple" },
        { label: "Stable", color: "green" },
      ]}
      dependencies={{
        packages: ["framer-motion", "clsx", "tailwind-merge"],
        setup: {
          file: "src/lib/utils.ts",
          code: `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,
        },
      }}
      overview={{
        description:
          "The Background Beams Section creates a dynamic and interactive background with animated beams that respond to user interactions. The component is designed to be both visually appealing and performant.",
        tip: "For best results, adjust pathCount and animationSpeed to achieve the desired balance between visual effect and performance.",
      }}
      examples={[
        {
          title: "Basic Example",
          code: `<BeamSection
  title="Elegant Animation"
  buttonText="Explore More"
  titleGradientClass="bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple"
  pathCount={18}
  pathOpacity={0.2}
  animationSpeed={1.2}
/>`,
          component: (
            <BeamSection
              title="Elegant Animation"
              buttonText="Explore More"
              titleGradientClass="bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple"
              pathCount={18}
              pathOpacity={0.2}
              animationSpeed={1.2}
            />
          ),
        },
        {
          title: "Dark Theme with More Paths",
          code: `<BeamSection
  title="Dynamic Interaction"
  buttonText="Try Now"
  bgColorClass="bg-gray-900"
  titleGradientClass="bg-gradient-to-r from-blue-400 to-purple-400"
  pathCount={24}
  pathWidth={1.2}
  animationSpeed={0.8}
/>`,
          component: (
            <BeamSection
              title="Dynamic Interaction"
              buttonText="Try Now"
              bgColorClass="bg-gray-900"
              titleGradientClass="bg-gradient-to-r from-blue-400 to-purple-400"
              pathCount={24}
              pathWidth={1.2}
              animationSpeed={0.8}
            />
          ),
        },
      ]}
      props={[
        {
          name: "title",
          type: "string",
          default: "-",
          description: "The animated title text",
        },
        {
          name: "buttonText",
          type: "string",
          default: '"Discover Excellence"',
          description: "Text for the primary button",
        },
        {
          name: "pathCount",
          type: "number",
          default: "12",
          description: "Number of animated beams in the background",
        },
        {
          name: "pathOpacity",
          type: "number",
          default: "0.15",
          description: "Base opacity for the beams",
        },
        {
          name: "pathWidth",
          type: "number",
          default: "0.8",
          description: "Base width for the beams",
        },
        {
          name: "animationSpeed",
          type: "number",
          default: "1",
          description: "Animation speed multiplier (1 = default speed)",
        },
        {
          name: "titleGradientClass",
          type: "string",
          default: '"bg-gradient-to-r from-neutral-900 to-neutral-700/80"',
          description: "CSS classes for the title gradient",
        },
        {
          name: "bgColorClass",
          type: "string",
          default: '"bg-white dark:bg-neutral-950"',
          description: "CSS classes for the background color",
        },
        {
          name: "reduceMotion",
          type: "boolean",
          default: "false",
          description: "Disables animations for accessibility",
        },
      ]}
      guidelines={{
        do: [
          "Use appropriate pathCount for optimal performance",
          "Adjust animationSpeed based on user experience",
          "Use as a hero section or call-to-action area",
        ],
        dont: [
          "Use too many paths on mobile devices",
          "Forget to handle reduceMotion for accessibility",
          "Place complex components inside the paths",
        ],
      }}
    />
  );
}
