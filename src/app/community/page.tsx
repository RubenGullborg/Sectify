"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CommunityPage() {
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
            Bygget af fællesskabet, for fællesskabet. Deltag i udviklingen af den næste generation af web-sektioner.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-16 hover:bg-white/[0.05] transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Vores Vision</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Sectify er bygget på troen om, at de bedste løsninger kommer fra et aktivt og engageret fællesskab. 
            Vi stræber efter at skabe et inklusivt miljø, hvor udviklere kan dele deres viden, bidrage med kode, 
            og hjælpe hinanden med at bygge bedre web-applikationer.
          </p>
          <Link 
            href="/community/contribute"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-sectifyFairyTale to-sectifyLightPurple text-white font-medium hover:shadow-lg hover:shadow-sectifyGreen/20 transition-all duration-300 hover:scale-105"
          >
            Bydrag til Projektet →
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
                Se de mest værdifulde bidragydere til Sectify's udvikling.
              </p>
              <Link 
                href="/community/hall-of-fame"
                className="text-sectifyGreen hover:text-sectifyFairyTale transition-colors inline-flex items-center"
              >
                Se Hall of Fame →
              </Link>
            </div>
          </div>

          {/* Discord Community */}
          <div className="group relative backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/10 p-8 hover:bg-white/[0.05] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sectifyGreen/20 to-sectifyLightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sectifyGreen transition-colors">Discord Fællesskab</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Join vores Discord server for live diskussioner og support.
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
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sectifyGreen transition-colors">Bidrag Guide</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Lær hvordan du kan bidrage til Sectify's udvikling.
              </p>
              <Link 
                href="/community/contribute"
                className="text-sectifyGreen hover:text-sectifyFairyTale transition-colors inline-flex items-center"
              >
                Læs Guide →
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
          <h2 className="text-2xl font-semibold text-white mb-4">Klar til at deltage?</h2>
          <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
            Sectify er et open source projekt, og vi elsker nye bidragydere! Uanset om du er en erfaren udvikler eller lige er begyndt, 
            er der altid plads til dig i vores fællesskab.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/community/contribute"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-sectifyFairyTale to-sectifyLightPurple text-white font-medium hover:shadow-lg hover:shadow-sectifyGreen/20 transition-all duration-300 hover:scale-105"
            >
              Bydrag til Koden →
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
} 