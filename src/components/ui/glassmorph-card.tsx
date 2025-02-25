import React, { ReactNode } from "react";

interface GlassmorphismCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for the icon component (SVG icon)
  title: string;
  description: string;
  gradientFrom?: string;
  gradientTo?: string;
  iconColor?: string;
  children?: ReactNode;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  icon: Icon,
  title,
  description,
  gradientFrom = "white/10", // default value if not provided
  gradientTo = "transparent", // default value if not provided
  iconColor = "text-sectifyGreen", // default value if not provided
  children,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/20">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex flex-col gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 transition-colors duration-300 group-hover:bg-white/20`}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-white text-lg lg:text-xl">
            {title}
          </h3>
          <p className="text-sectifyAsh text-base lg:text-lg">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GlassmorphismCard;
