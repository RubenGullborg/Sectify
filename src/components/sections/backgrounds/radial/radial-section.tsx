"use client"

import type React from "react"

interface GradientSectionProps {
  title?: string
  subtitle?: string
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
  overlayOpacity?: number
  fullHeight?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
  children?: React.ReactNode
}

export function GradientSection({
  title = "Elevate Your Experience",
  subtitle = "Discover a new dimension of possibilities with our innovative solutions",
  primaryColor = "#26004d",
  secondaryColor = "#6b00d6",
  tertiaryColor = "#06000d",
  overlayOpacity = 0.5,
  fullHeight = true,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
  children,
}: GradientSectionProps) {
  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      className={`relative flex flex-col items-center justify-center w-full overflow-hidden ${fullHeight ? "min-h-screen" : "py-24"} ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at top, ${primaryColor} 45%, ${secondaryColor} 55%, ${tertiaryColor} 70%)`,
      }}
    >
      <div className="relative z-10 container px-4 md:px-6 py-10 mx-auto text-center">
        {title && (
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">{title}</h2>
        )}
        {subtitle && <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">{subtitle}</p>}

        {children || (
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
              <button
                onClick={onPrimaryClick}
                className="px-8 py-3 rounded-full text-base font-medium transition-all
                bg-gradient-to-r from-white/90 to-white 
                text-purple-900 hover:shadow-lg hover:shadow-white/20 
                hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-8 py-3 rounded-full text-base font-medium transition-all
                bg-white/10 backdrop-blur-sm border border-white/20
                text-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/10
                hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                {secondaryButtonText}
              </button>
            </div>

            <div className="mt-12 animate-bounce cursor-pointer" onClick={scrollToContent}>
              <svg
                className="h-8 w-8 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-700" />

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-96 z-[1]"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,${overlayOpacity}) 40%, #000000)`,
        }}
      />
    </section>
  )
}

