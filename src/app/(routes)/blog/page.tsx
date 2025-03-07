"use client";

import SubPageLayout from "@/components/Layout/SubPageLayout";
import { motion } from "framer-motion";

export default function BlogPage() {
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
      title="Blog" 
      subtitle="The world's shortest blog (because we're too busy building components)"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="text-white/90 prose prose-lg prose-invert max-w-none prose-headings:text-sectifyGreen prose-headings:font-semibold prose-a:text-sectifyLightPurple hover:prose-a:text-sectifyGreen"
      >
        <div className="mb-8 p-6 ">
          <p className="text-xl italic text-sectifyLightPurple">
            "I considered writing blog posts, but then i realized i suck at writing, so ill just spend the time building some components and let them speak for me.
          </p>
        </div>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Why No Blog?</h2>
        <p className="mb-6">
          While other libraries spend time crafting elaborate blog posts about their development process, 
          we're actually, you know, developing. We believe in showing, not telling – which is why we 
          put all our energy into making components that make you go "wow" instead of blog posts that 
          make you go "meh."
        </p>

        <div className="text-center mt-12">
          <p className="text-sectifyEggWhite/80">
            Want to know what we're up to? Check our{" "}
            <a href="/roadmap" className="text-sectifyLightPurple hover:text-sectifyFairyTale transition-colors duration-300">
              roadmap
            </a>
            {" "}or follow us on{" "}
            <a href="https://x.com/RubenGullborg" className="text-sectifyLightPurple hover:text-sectifyFairyTale transition-colors duration-300">
              X
            </a>
            {" "}for updates that fit in 280 characters.
          </p>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
