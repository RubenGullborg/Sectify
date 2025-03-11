import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/abstract-black.png",
    },
    {
      title: "Valley of life",
      src: "/waveink.png",
    },
    {
      title: "Sala behta hi jayega",
      src: "/neon.jpeg",
    },
    {
      title: "Camping is for pros",
      src: "/strong.png",
      href: "sections",
    },
  ];

  return <FocusCards cards={cards} />;
}
