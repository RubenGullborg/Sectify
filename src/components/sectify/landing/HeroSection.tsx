import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Radial Dark Sun",
      src: "/Radial_splash.png",
      href: "/components/Hero-sections/radial",
    },
    {
      title: "Split Hero",
      src: "/Splithero_splash_2.png",
      href: "/components/Hero-sections/SplitHero",
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
