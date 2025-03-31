"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SplitHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  layout?: "imageRight" | "imageLeft";
  accentColor?: string;
  darkMode?: boolean;
  animationSpeed?: "slow" | "medium" | "fast";
  height?: "auto" | "full" | "screen";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function SplitHero({
  title = "Bring your ideas to life with ease",
  subtitle = "A modern, split-layout hero section that balances captivating visuals with compelling copy to drive conversion.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "See Examples",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
  imageSrc = "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  imageAlt = "Abstract design",
  layout = "imageRight",
  accentColor = "#3b82f6", // Blue by default
  darkMode = true,
  animationSpeed = "medium",
  height = "screen",
  onPrimaryClick,
  onSecondaryClick,
}: SplitHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const animationDuration = {
    slow: "duration-1000",
    medium: "duration-700",
    fast: "duration-500",
  }[animationSpeed];

  const heightClasses = {
    auto: "min-h-[500px]",
    full: "min-h-[700px]",
    screen: "min-h-screen",
  }[height];

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const subtitleColor = darkMode ? "text-gray-300" : "text-gray-600";

  const accentStyle = {
    backgroundColor: accentColor,
  };

  return (
    <section className={`relative ${heightClasses} ${bgColor} overflow-hidden flex flex-col lg:flex-row`}>
      {/* Content column */}
      <div 
        className={`w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:px-16 py-16 ${
          layout === "imageRight" ? "order-1 lg:order-1" : "order-2 lg:order-2"
        }`}
      >
        <div className="max-w-xl mx-auto lg:mx-0">
          {/* Accent line */}
          <div 
            className={`h-1.5 w-12 mb-8 rounded ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            } transition-all ${animationDuration} ease-out`}
            style={accentStyle}
          ></div>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${textColor} mb-6 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all ${animationDuration} ease-out`}
          >
            {title}
          </h1>
          
          <p 
            className={`text-lg md:text-xl ${subtitleColor} mb-8 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all ${animationDuration} delay-100 ease-out`}
          >
            {subtitle}
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all ${animationDuration} delay-200 ease-out`}
          >
            <Link
              href={primaryButtonLink}
              onClick={onPrimaryClick}
              className="px-8 py-3.5 rounded-lg text-white font-medium transition-all duration-200 text-center hover:shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              {primaryButtonText}
            </Link>
            
            <Link
              href={secondaryButtonLink}
              onClick={onSecondaryClick}
              className={`px-8 py-3.5 rounded-lg border ${
                darkMode ? "border-gray-700 text-white hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-100"
              } font-medium transition-all duration-200 text-center`}
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Image column */}
      <div 
        className={`w-full lg:w-1/2 relative overflow-hidden ${
          layout === "imageRight" ? "order-2 lg:order-2" : "order-1 lg:order-1"
        } ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity ${animationDuration} ease-out`}
      >
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            background: layout === "imageRight" 
              ? `linear-gradient(to right, ${darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"}, transparent 30%)`
              : `linear-gradient(to left, ${darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"}, transparent 30%)`
          }}
        ></div>
        
        {/* Accent dots overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: `radial-gradient(${accentColor} 1px, transparent 1px)`,
            backgroundSize: "20px 20px"
          }}
        ></div>
        
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div 
        className={`absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl z-0 opacity-20 ${
          isLoaded ? "opacity-20" : "opacity-0"
        } transition-opacity ${animationDuration} delay-300`}
        style={{ backgroundColor: accentColor }}
      ></div>
      
      <div 
        className={`absolute -top-16 -left-16 w-64 h-64 rounded-full blur-3xl z-0 opacity-10 ${
          isLoaded ? "opacity-10" : "opacity-0"
        } transition-opacity ${animationDuration} delay-500`}
        style={{ backgroundColor: accentColor }}
      ></div>
    </section>
  );
} 