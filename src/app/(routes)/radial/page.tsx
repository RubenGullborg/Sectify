import { GradientSection } from "@/components/sections/backgrounds/radial/radial-section";

export default function radialPage() {
  return (
    <div className="container mx-auto p-40 rounded-3xl">
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
      <pre className="bg-gray-100 p-4 rounded">
        <code>
          {`<GradientSection
    title="Another Style Variation"
    subtitle="Explore different color combinations for your sections"
    primaryColor="#000428"
    secondaryColor="#004e92"
    tertiaryColor="#000000"
    overlayOpacity={0.7}
    primaryButtonText="Get Access"
    secondaryButtonText="Read Docs"
    className="border-t border-white/10"
/>`}
        </code>
      </pre>
      <GradientSection
        title="Another Style Variation"
        subtitle="Explore different color combinations for your sections"
        primaryColor="#000428"
        secondaryColor="#493d82"
        tertiaryColor="#000000"
        overlayOpacity={0.7}
        primaryButtonText="Get Access"
        secondaryButtonText="Read Docs"
        className="border-t border-white/10"
      />
    </div>

    
  );
}
