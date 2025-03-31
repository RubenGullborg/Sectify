import {Roadmap} from "@/components/ui/roadmap";
import type { RoadmapItem } from "@/types/roadmap";

const roadmapItems: RoadmapItem[] = [
  {
    title: "Section wrapper",
    description:
        "A simple, flexible container that handles layout. Padding, margins, background colors, and borders will all be easily adjustable via props. This will be the foundation for creating clean, responsive and structured sections.",
    status: "in-progress",
    date: "End of march - 2025",
  },
  {
    title: "Scroll animation section",
    description:
        "A section that triggers animations as the user scrolls. This will include parallax effects, elements fading in/out, or sliding into place as they enter the viewport. The section will be perfect for showcasing content in a creative and engaging way.",
    status: "planned",
    date: "May 2025",
  },
  {
    title: "Accordion-Based Media Gallery Section",
    description:
        "A section where images, videos, or GIFs are organized into an accordion-style layout. When clicked, the selected media will expand with smooth animations, providing an engaging way to explore media content.",
    status: "planned",
    date: "August 2025",
  },
  {
    title: "Carousel case study",
    description:
        "A carousel section that allows users to slide between different case studies or project examples. Each carousel item will be able to feature either images, text or video and have an optional animation for the transitions between items",
    status: "planned",
    date: "October 2025",
  },
];

export default function roadmapPage(){
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-sectifyFairyTale/80 to-black py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sectifyLightPurple/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10">
          <Roadmap
            items={roadmapItems}
            title="The Sectify component development roadmap"
          />
          <div className="pt-8">
            <p className="font-light text-center text-sectifyEggWhite/80">
              💡 Want to <a href="https://github.com/rubengullborg/sectify" className="text-sectifyLightPurple hover:text-sectifyFairyTale transition-colors duration-300">contribute</a>? Reach out to me on{" "}
              <a
                href="https://x.com/RubenGullborg"
                className="text-sectifyLightPurple hover:text-sectifyFairyTale transition-colors duration-300"
              >
                X
              </a>
            </p>
            <p className="font-light text-sm text-center py-2 text-sectifyEggWhite/60">
              GitHub Contributions are open, help the library mature a bit more 🚀
            </p>
          </div>
        </div>
      </div>
    );
}