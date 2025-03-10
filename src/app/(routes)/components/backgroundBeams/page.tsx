import BeamSection from "@/components/sections/backgrounds/backgroundBeams/beam-section";

export default function BackgroundBeamsPage() {
  return (
    <div className="flex flex-col space-y-8 py-8 px-8 mt-32">
      <h1 className="text-8xl font-bold pb-12 mx-24 text-center mb-8 bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple bg-clip-text text-transparent">
        Background Beams Component
      </h1>

      {/* Example 1: Standard with title */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-800 relative z-20">
          <h2 className="font-medium text-black dark:text-white">
            Standard Example
          </h2>
        </div>
        <div className="h-[70vh] flex items-center justify-center relative">
          <BeamSection title="Elegant Animation" buttonText="Explore More" />
        </div>
      </div>

      {/* Example 2: Custom color theme */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-800 relative z-20">
          <h2 className="font-medium text-black dark:text-white">
            Custom Color Theme
          </h2>
        </div>
        <div className="h-[70vh] flex items-center justify-center relative">
          <BeamSection
            title="Creative Design"
            buttonText="View Details"
            titleGradientClass="bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple"
            pathCount={18}
            pathOpacity={0.2}
            animationSpeed={1.2}
          />
        </div>
      </div>

      {/* Example 3: Darker theme with more paths */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-800 relative z-20">
          <h2 className="font-medium text-black dark:text-white">
            Dark Theme with More Paths
          </h2>
        </div>
        <div className="h-[70vh] flex items-center justify-center relative">
          <BeamSection
            title="Dynamic Interaction"
            buttonText="Try Now"
            bgColorClass="bg-gray-900"
            titleGradientClass="bg-gradient-to-r from-blue-400 to-purple-400"
            pathCount={24}
            pathWidth={1.2}
            animationSpeed={0.8}
          />
        </div>
      </div>
    </div>
  );
}
