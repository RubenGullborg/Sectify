"use client";

import { Code2, Copy, Layers, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import GlassmorphismCard from "../ui/glassmorph-card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-12 md:pt-36 bg-sectifyDark pb-36">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="relative flex flex-col items-center gap-16 md:gap-24">
          {/* Main content - Centered */}
          <div className="flex max-w-5xl flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block rounded-3xl border border-sectifyGreen/20 bg-sectifyFairyTale px-4 py-1.5 text-sm text-white font-medium"
              >
                About Sectify
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl font-bold text-white md:text-5xl lg:text-8xl"
              >
                <span className="inline-block">Prebuilt sections</span>{" "}
                <span className="mt-2 block text-sectifyGreen">
                  Effortless UI
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-[600px] text-lg font-thin text-white md:text-xl"
              >
                A community driven component library built with React and Tailwind.
                Designed with minimal dependencies for 
                developers who value simplicity, speed, and flexibility.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="group rounded-xl rotate-1 bg-sectifyFairyTale text-white hover:bg-sectifyFairyTale hover:text-sectifyGreen transition-all duration-300 hover:scale-105 hover:rotate-2"
                >
                  <span className="relative flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    View Components
                  </span>
                </Button>
                <Button
                  size="lg"
                  className="group rounded-3xl bg-sectifyLightPurple text-white hover:bg-white hover:text-sectifyFairyTale transition-all duration-300 hover:scale-95 hover:rotate-1"
                >
                  Learn More
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Features grid - Centered */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassmorphismCard
                icon={Layers}
                title="Community Driven"
                description="Contribute your own components and help improve the library."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassmorphismCard
                icon={Copy}
                title="Copy & Paste"
                description="Simply copy the code and paste it into your project. No complex setup."
                gradientFrom="sectifyLightPurple/10"
                gradientTo="transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassmorphismCard
                icon={PackageOpen}
                title="Fully Customizable"
                description="Easily modify colors, sizes, and behaviors to match your brand."
                gradientFrom="sectifyFairyTale/10"
                gradientTo="transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassmorphismCard
                icon={Code2}
                title="Developer Friendly"
                description="Clean, well-documented code that's easy to understand and modify."
                gradientFrom="sectifyGreen/10"
                gradientTo="transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
