"use client";
import { RetroGrid } from "@/components/ui/retro-grid";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <RetroGrid />
      <div className="relative text-center ">
        <h1 className="text-7xl font-bold text-sectifyAsh">Welcome to Sectify</h1>
        <p className="mt-4 text-lg text-sectifyAsh">Build beautiful sections with ease.</p>
      </div>
    </section>
  );
};

export default HeroSection;
