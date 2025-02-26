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
    <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg shadow-xl p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:scale-[1.02] border border-white/10">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex flex-col gap-6">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110`}
        >
          <Icon className={`h-7 w-7 ${iconColor}`} />
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-white text-xl lg:text-2xl tracking-wide">
            {title}
          </h3>
          <p className="text-sectifyEggWhite/90 text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GlassmorphismCard;
