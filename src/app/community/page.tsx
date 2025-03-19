"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Component specific animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// The actual Community component that can be copied
const CommunitySection = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black">
        {/* Dot Pattern with Fade Overlays */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-sectifyGreen/25 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-sectifyLightPurple/25 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen pt-32">
        {/* Hero Section */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-7xl font-bold bg-gradient-to-r from-sectifyLightPurple via-sectifyLightPurple to-sectifyFairyTale bg-clip-text text-transparent pb-4">
            Sectify Community
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Built by the community, for the community. Join in developing the next generation of web sections.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-16 hover:bg-white/[0.05] transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Sectify is built on the belief that the best solutions come from an active and engaged community. 
            We strive to create an inclusive environment where developers can share their knowledge, contribute code, 
            and help each other build better web applications.
          </p>
          <Link 
            href="/community/contribute"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-sectifyFairyTale to-sectifyLightPurple text-white font-medium hover:shadow-lg hover:shadow-sectifyGreen/20 transition-all duration-300 hover:scale-105"
          >
            Contribute to the Project →
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Hall of Fame */}
          <div className="group relative backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/10 p-8 hover:bg-white/[0.05] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sectifyGreen/20 to-sectifyLightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sectifyGreen transition-colors">Hall of Fame</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                See the most valuable contributors to Sectify's development.
              </p>
              <Link 
                href="/community/hall-of-fame"
                className="text-sectifyGreen hover:text-sectifyFairyTale transition-colors inline-flex items-center"
              >
                View Hall of Fame →
              </Link>
            </div>
          </div>

          {/* Discord Community */}
          <div className="group relative backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/10 p-8 hover:bg-white/[0.05] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sectifyGreen/20 to-sectifyLightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sectifyGreen transition-colors">Discord Community</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Join our Discord server for live discussions and support.
              </p>
              <Link 
                href="/community/discord"
                className="text-sectifyGreen hover:text-sectifyFairyTale transition-colors inline-flex items-center"
              >
                Join Discord →
              </Link>
            </div>
          </div>

          {/* Contribution Guide */}
          <div className="group relative backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/10 p-8 hover:bg-white/[0.05] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sectifyGreen/20 to-sectifyLightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sectifyGreen transition-colors">Contribution Guide</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Learn how you can contribute to Sectify's development.
              </p>
              <Link 
                href="/community/contribute"
                className="text-sectifyGreen hover:text-sectifyFairyTale transition-colors inline-flex items-center"
              >
                Read Guide →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Participate?</h2>
          <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
            Sectify is an open source project, and we love new contributors! Whether you're an experienced developer or just getting started, 
            there's always a place for you in our community.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/community/contribute"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-sectifyFairyTale to-sectifyLightPurple text-white font-medium hover:shadow-lg hover:shadow-sectifyGreen/20 transition-all duration-300 hover:scale-105"
            >
              Contribute to Code →
            </Link>
            <Link 
              href="/community/discord"
              className="inline-flex items-center px-8 py-3 rounded-full border border-sectifyGreen text-sectifyGreen hover:bg-sectifyGreen/10 transition-all duration-300"
            >
              Join Discord →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Component showcase page with description, preview and code
export default function CommunityPage() {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Component Description */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Community Section Component</h1>
        
        <div className="prose prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-semibold mb-4">About this Component</h2>
          <p className="text-gray-300 leading-relaxed">
            The Community Section is a full-page component designed to showcase community engagement and participation.
            It features a modern, gradient-based design with animated orbs, interactive cards, and clear call-to-actions.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Animated gradient background with floating orbs</li>
            <li>Dot pattern overlay with fade effects</li>
            <li>Responsive grid layout for feature cards</li>
            <li>Interactive hover states and transitions</li>
            <li>Optimized for accessibility and performance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Usage Requirements</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Next.js 13+ with App Router</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion for animations</li>
          </ul>
        </div>

        {/* Preview/Code Toggle */}
        <div className="flex items-center justify-end gap-4 mb-8">
          <button
            onClick={() => setShowCode(false)}
            className={`px-4 py-2 rounded-lg transition-all ${
              !showCode ? 'bg-sectifyGreen text-black' : 'text-sectifyGreen'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={`px-4 py-2 rounded-lg transition-all ${
              showCode ? 'bg-sectifyGreen text-black' : 'text-sectifyGreen'
            }`}
          >
            Code
          </button>
        </div>

        {/* Component Preview/Code */}
        <div className="relative rounded-xl overflow-hidden border border-white/10">
          {showCode ? (
            <pre className="p-4 bg-gray-900 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`// Copy this code to use the component
import { motion } from 'framer-motion';

export const CommunitySection = () => {
  // Component code here...
  // Full code available in the GitHub repository
}`}
              </code>
            </pre>
          ) : (
            <div className="w-full aspect-[16/9] bg-black">
              <iframe
                className="w-full h-full"
                src="/preview/community-section"
                title="Community Section Preview"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 