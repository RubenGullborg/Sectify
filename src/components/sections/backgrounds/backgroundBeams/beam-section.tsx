"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PathConfig = {
  count: number;
  opacity: number;
  width: number;
  animationDuration: number;
};

type BackgroundPathsProps = {
  /** Title text to animate (optional) */
  title?: string;
  /** Custom content to render instead of the default title and button */
  children?: ReactNode;
  /** Button text (if using default content) */
  buttonText?: string;
  /** Button click handler */
  onButtonClick?: () => void;
  /** Custom CSS class for the container */
  className?: string;
  /** Background color class (defaults to white/dark mode compatible) */
  bgColorClass?: string;
  /** Text gradient classes for the title */
  titleGradientClass?: string;
  /** Number of paths to render */
  pathCount?: number;
  /** Base opacity for paths */
  pathOpacity?: number;
  /** Base width for paths */
  pathWidth?: number;
  /** Animation speed multiplier (1 = default speed) */
  animationSpeed?: number;
  /** Reduce motion for accessibility */
  reduceMotion?: boolean;
  /** Custom button component */
  buttonComponent?: ReactNode;
};

function FloatingPaths({
  position,
  config,
  reduceMotion = false,
}: {
  position: number;
  config: PathConfig;
  reduceMotion?: boolean;
}) {
  // Generate deterministic paths with rounded numbers
  const paths = Array.from({ length: config.count }, (_, i) => {
    // Use simpler, rounded calculations
    const variance = Math.round(Math.sin(i * 0.5) * 100);
    const heightOffset = Math.round(Math.cos(i * 0.7) * 150);
    const widthScale = 0.8 + (i % 3) * 0.1;
    const duration = config.animationDuration * (0.7 + (i % 3) * 0.2);
    const delay = i * 0.2;
    const direction = i % 2 === 0 ? 1 : -1;

    // Simplified path with rounded numbers
    const startX = -380 - variance * position;
    const startY = -189 + heightOffset;
    const control1X = -350 - variance * position;
    const control1Y = -150 + heightOffset;
    const control2X = -200 - variance * position * widthScale;
    const control2Y = 100 + heightOffset;
    const control3X = 100 - variance * position * widthScale;
    const control3Y = 200 + heightOffset;
    const control4X = 400 - variance * position * 0.5;
    const control4Y = 300 + heightOffset;
    const control5X = 600 - variance * position * 0.3;
    const control5Y = 400 + heightOffset;
    const endX = 700 - variance * position * 0.2;
    const endY = 450 + heightOffset;

    return {
      id: i,
      d: `M${startX} ${startY}C${control1X} ${control1Y} ${control2X} ${control2Y} ${control3X} ${control3Y}C${control4X} ${control4Y} ${control5X} ${control5Y} ${endX} ${endY}`,
      color: `rgba(15,23,42,${config.opacity + i * 0.05})`,
      width: config.width + i * 0.08,
      duration,
      delay,
      direction,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.05}
            strokeLinecap="round"
            initial={{
              pathLength: reduceMotion ? 1 : 0.1,
              opacity: 0.3,
              scale: 0.95 + (path.id % 3) * 0.05,
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    pathLength: [0.1, 0.8, 0.2],
                    opacity: [0.3, 0.7, 0.3],
                    pathOffset: [0, path.direction, 0],
                    scale: [0.95, 1.05, 0.95],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    duration: path.duration,
                    delay: path.delay,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}

function AnimatedTitle({
  title,
  gradientClass,
  reduceMotion = false,
  className,
}: {
  title: string;
  gradientClass: string;
  reduceMotion?: boolean;
  className?: string;
}) {
  const words = title.split(" ");

  return (
    <h1
      className={cn(
        "text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter",
        className
      )}
    >
      <div className="pb-4 mb-12">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-4 last:mr-0">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`${wordIndex}-${letterIndex}`}
                initial={reduceMotion ? {} : { y: 100, opacity: 0 }}
                animate={reduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
                transition={
                  reduceMotion
                    ? {
                        duration: 0.5,
                      }
                    : {
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }
                }
                className={cn(
                  "inline-block text-transparent bg-clip-text leading-[1.2]",
                  gradientClass
                )}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </div>
    </h1>
  );
}

function DefaultButton({
  text,
  onClick,
  reduceMotion = false,
}: {
  text: string;
  onClick?: () => void;
  reduceMotion?: boolean;
}) {
  return (
    <div
      className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                  dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <button
        onClick={onClick}
        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                  bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                  text-black dark:text-white transition-all duration-300 
                  group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                  hover:shadow-md dark:hover:shadow-neutral-800/50"
      >
        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
          {text}
        </span>
        <span
          className={cn(
            "ml-3 opacity-70 group-hover:opacity-100",
            reduceMotion
              ? ""
              : "group-hover:translate-x-1.5 transition-all duration-300"
          )}
        >
          →
        </span>
      </button>
    </div>
  );
}

export default function BackgroundPaths({
  title,
  children,
  buttonText = "Discover Excellence",
  onButtonClick,
  className,
  bgColorClass = "bg-white dark:bg-neutral-950",
  titleGradientClass = "bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80",
  pathCount = 12, // Reduced from 36 to 12
  pathOpacity = 0.15, // Slightly increased opacity
  pathWidth = 0.8, // Slightly increased width
  animationSpeed = 1,
  reduceMotion = false,
  buttonComponent,
}: BackgroundPathsProps) {
  // Configure paths based on props
  const pathConfig: PathConfig = {
    count: pathCount,
    opacity: pathOpacity,
    width: pathWidth,
    animationDuration: 15 / animationSpeed, // Slightly faster base animation
  };

  // Rest of the component remains the same
  const [reduceMotionState, setReduceMotionState] =
    React.useState(reduceMotion);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReduceMotionState(true);
    }
  }, []);

  return (
    <div
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center overflow-hidden",
        bgColorClass,
        className
      )}
    >
      <div className="absolute inset-0">
        <FloatingPaths
          position={1}
          config={pathConfig}
          reduceMotion={reduceMotionState}
        />
        <FloatingPaths
          position={-1}
          config={pathConfig}
          reduceMotion={reduceMotionState}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotionState ? 0.5 : 2 }}
          className="max-w-4xl mx-auto"
        >
          {children ? (
            children
          ) : (
            <>
              {title && (
                <AnimatedTitle
                  title={title}
                  gradientClass={titleGradientClass}
                  reduceMotion={reduceMotionState}
                  className={className}
                />
              )}

              {buttonComponent || (
                <DefaultButton
                  text={buttonText}
                  onClick={onButtonClick}
                  reduceMotion={reduceMotionState}
                />
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
