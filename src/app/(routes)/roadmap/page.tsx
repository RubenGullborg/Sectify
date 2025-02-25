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
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Roadmap
          items={roadmapItems}
          title="The Sectify component development roadmap"
        />
        <div className="pt-4">
          <p className="font-light text-center">
            💡 Want to contribute? Reach out to me on{" "}
            <a
              href="https://x.com/RubenGullborg"
              className="underline text-blue-500"
            >
              X
            </a>
          </p>
          <p className="font-light text-sm text-center py-2">
            I will open for GitHub Contributions as soon as the library has
            matured a bit more 🚀
          </p>
        </div>
      </div>
    );
}