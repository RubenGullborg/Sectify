"use client";

import { Code2, Copy, Layers, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import GlassmorphismCard from "../ui/glassmorph-card";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-12 md:py-36 bg-sectifyDark">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="relative flex flex-col items-center gap-16 md:gap-24">
          {/* Main content - Centered */}
          <div className="flex max-w-5xl flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-6">
              <div className="inline-block rounded-3xl border border-sectifyGreen/20 bg-sectifyFairyTale px-4 py-1.5 text-sm text-white font-medium">
                About Sectify
              </div>
              <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-8xl">
                <span className="inline-block">Prebuilt sections</span>{" "}
                <span className="mt-2 block text-sectifyGreen">
                  Effortless UI
                </span>
              </h2>
              <p className="mx-auto max-w-[600px] text-lg font-thin  text-white md:text-xl">
                Beautiful, responsive components built with React and Tailwind.
                Designed for developers who value simplicity, speed and
                flexibility.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
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
            </div>
          </div>

          {/* Features grid - Centered */}
          <div className="w-full max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}

              <GlassmorphismCard
                icon={PackageOpen}
                title="Minimalist & Lightweight"
                description="Zero bloat. Built on React, Tailwind, and essential dependencies only."
                gradientFrom="white/10"
                gradientTo="transparent"
                iconColor="text-sectifyGreen"
              />
              <GlassmorphismCard
                icon={Copy}
                title="Copy-Paste Ready"
                description="No installation needed. Just copy and paste, and you're ready to start building."
                gradientFrom="white/10"
                gradientTo="transparent"
                iconColor="text-sectifyGreen"
              />
              <GlassmorphismCard
                icon={Layers}
                title="Customizable & Interactive"
                description="Live prop tweaking with instant code export."
                gradientFrom="white/10"
                gradientTo="transparent"
                iconColor="text-sectifyGreen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
