"use client";

import React from "react";
import Link from "next/link";

interface BasicHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  alignment?: "left" | "center" | "right";
  backgroundClassName?: string;
  showPattern?: boolean;
  height?: "auto" | "full" | "screen";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function BasicHero({
  title = "Build beautiful websites faster than ever",
  subtitle = "A collection of professionally designed, pre-built, fully responsive components that you can drop into your projects and customize to your needs.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
  alignment = "center",
  backgroundClassName = "bg-gradient-to-br from-indigo-950 via-slate-900 to-black",
  showPattern = true,
  height = "auto",
  onPrimaryClick,
  onSecondaryClick,
}: BasicHeroProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[alignment];

  const heightClasses = {
    auto: "py-20 md:py-32",
    full: "py-24 md:py-40",
    screen: "min-h-screen",
  }[height];

  return (
    <section
      className={`relative ${heightClasses} overflow-hidden flex items-center ${backgroundClassName}`}
    >
      {/* Background pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      )}

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`flex flex-col ${alignmentClasses} max-w-3xl mx-auto gap-6`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href={primaryButtonLink}
              onClick={onPrimaryClick}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 text-center"
            >
              {primaryButtonText}
            </Link>

            <Link
              href={secondaryButtonLink}
              onClick={onSecondaryClick}
              className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium transition-colors duration-200 text-center"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
