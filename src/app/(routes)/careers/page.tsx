"use client";

import SubPageLayout from "@/components/Layout/SubPageLayout";
import { motion } from "framer-motion";

export default function CareersPage() {
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
    <SubPageLayout
      title="Join the Community"
      subtitle="We're not hiring because we're all builders here"
    >
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="text-white/90 prose prose-lg prose-invert max-w-none prose-headings:text-sectifyGreen prose-headings:font-semibold prose-a:text-sectifyLightPurple hover:prose-a:text-sectifyGreen"
      >
        <div className="my-8 p-6 rounded-xl">
          <p className="text-xl italic mb-0 text-sectifyLightPurple">
            "We don't have job openings because Sectify isn't a company – it's a
            canvas for creators, built by the community, for the community."
          </p>
        </div>

        <h2 className="mt-8 mb-4 text-2xl font-bold">How to Contribute</h2>
        <p className="mb-6">
          While we don't have traditional job positions, we have something
          better: an open invitation to shape the future of web components.
          Whether you're a designer with an eye for detail, a developer who
          dreams in code, or just someone with great ideas – there's a place for
          you here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 bg-black/40 rounded-xl backdrop-blur-sm border border-sectifyLightPurple/20">
            <h3 className="text-sectifyLightPurple mb-3">Open Source Spirit</h3>
            <p className="text-sm text-sectifyEggWhite/70 m-0">
              Check our roadmap, pick a component you're excited about, and help
              us build it. Your code, your vision, your signature on Sectify UI.
            </p>
          </div>
          <div className="p-6 bg-black/40 rounded-xl backdrop-blur-sm border border-sectifyLightPurple/20">
            <h3 className="text-sectifyLightPurple mb-3">Community First</h3>
            <p className="text-sm text-sectifyEggWhite/70 m-0">
              Share ideas, provide feedback, or help with documentation. Every
              contribution, big or small, moves us forward together.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sectifyEggWhite/80">
            Ready to be part of something special? Check out our{" "}
            <a
              href="/roadmap"
              className="text-sectifyLightPurple hover:text-sectifyFairyTale transition-colors duration-300"
            >
              Roadmap
            </a>{" "}
            , our{" "}
            <a
              href="/https://github.com/RubenGullborg/Sectify"
              className="text-sectifyLightPurple hover:text-sectifyFairyTale transition-colors duration-300"
            >
              GitHub
            </a>{" "}
             or connect with me on{" "}
            <a
              href="https://x.com/RubenGullborg"
              className="text-sectifyLightPurple hover:text-sectifyFairyTale transition-colors duration-300"
            >
              X
            </a>
          </p>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}

