"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  const values = [
    {
      title: "Simplicity First",
      description:
        "Strip back. Keep it clean. Make it work. Our components are designed to be understood at first glance.",
      icon: "⚡",
    },
    {
      title: "Copy & Paste Freedom",
      description:
        "No complex setup. No dependency hell. Just copy, paste, and ship. That's the Sectify way.",
      icon: "📋",
    },
    {
      title: "Open Source Forever",
      description:
        "Built by the community, for the community. Free today, free tomorrow, free forever.",
      icon: "🌟",
    },
    {
      title: "Your Code, Your Rules",
      description:
        "Modify, remix, resell - do whatever you want. We trust your creativity more than our restrictions.",
      icon: "🎨",
    },
    {
      title: "Modern by Default",
      description:
        "Fresh, contemporary design that stays ahead of trends without chasing them.",
      icon: "✨",
    },
    {
      title: "Developer Experience",
      description:
        "Life is too short for complicated components. If it's not easy to use, we're doing it wrong.",
      icon: "💻",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black">
        {/* Dot Pattern with Fade Overlays */}
        <div className="absolute inset-0">
          {/* Base dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Top fade overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/50 to-transparent" />

          {/* Bottom fade overlay */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl pb-2 md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sectifyLightPurple via-sectifyLightPurple to-sectifyFairyTale bg-clip-text text-transparent mb-6"
          >
            Our Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            We believe great UI should be accessible to everyone. No paywalls,
            no restrictions, just beautiful components ready to make your next
            project shine.
          </motion.p>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="group relative backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/10 p-8 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sectifyGreen/20 to-sectifyLightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <span className="text-4xl mb-6 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sectifyGreen transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <p className="text-white/90 text-lg mb-8">
            Ready to build amazing sections?
          </p>
          <a
            href="/docs"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-sectifyFairyTale to-sectifyLightPurple text-white font-medium hover:shadow-lg hover:shadow-sectifyGreen/20 transition-all duration-300 hover:scale-105"
          >
            Get Started →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
