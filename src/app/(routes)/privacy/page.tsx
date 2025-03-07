"use client";

import SubPageLayout from "@/components/Layout/SubPageLayout";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
      title="Privacy Policy"
      subtitle="The world's shortest privacy policy (because we don't collect your data)"
    >
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="text-white/90 prose prose-lg prose-invert max-w-none prose-headings:text-sectifyGreen prose-headings:font-semibold prose-a:text-sectifyLightPurple hover:prose-a:text-sectifyGreen prose-strong:text-white prose-img:rounded-xl prose-pre:bg-black/30 prose-pre:backdrop-blur-md"
      >
        <h2 className="mt-8 mb-4 text-2xl font-bold">The TL;DR Version</h2>
        <p className="mb-6">
          We don't collect your data. We don't store your data. We don't sell your data. 
          We don't even <em>look</em> at your data. In fact, we're not entirely sure what data is.
        </p>
        
        <div className="my-8 p-6">
          <p className="text-xl italic text-sectifyLightPurple">
            "The best privacy policy is the one where we have nothing to hide because we have nothing of yours to begin with."
          </p>
        </div>

        <h2 className="mt-8 mb-4 text-2xl font-bold">What We Collect</h2>
        <p className="mb-6">
          Absolutely nothing. No cookies. No tracking. No analytics. No user accounts. 
          No database. We're basically digital minimalists with a severe allergy to your personal information.
        </p>
        <p className="mb-6">
          While other companies have complex flowcharts showing how your data travels through their systems, 
          our flowchart is just a blank page with the words "Your data stays with you" written in crayon.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">How We Use Your Data</h2>
        <p className="mb-6">
          We don't. See above. This section exists purely to maintain the traditional privacy policy format 
          that you've come to expect. We could fill this space with a recipe for chocolate chip cookies, 
          but our legal team (a rubber duck on our desk) advised against it.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Third-Party Sharing</h2>
        <p className="mb-6">
          We can't share what we don't have. If a data broker calls us asking for your browsing habits, 
          we'll have to disappoint them. Then again, we don't have their phone number either, so this 
          hypothetical situation is doubly impossible.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Your Rights</h2>
        <p className="mb-6">
          You have the right to access, modify, and delete your data. But since we don't collect any, 
          consider these rights automatically fulfilled. You're welcome.
        </p>
        <p className="mb-6">
          If you'd like to exercise your right to be forgotten, congratulations – you already have been! 
          We forgot you the moment you left our site. Nothing personal.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Security Measures</h2>
        <p className="mb-6">
          Our security approach is foolproof: can't breach what doesn't exist. While other companies 
          invest millions in cybersecurity to protect their data vaults, we've invested in comfortable 
          chairs and good coffee, secure in the knowledge that there's nothing to steal.
        </p>
        <p className="mb-6">
          Our database isn't just encrypted – it's <strong>imaginary</strong>.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Changes to This Policy</h2>
        <p className="mb-6">
          This privacy policy might change in the future if we suddenly develop amnesia and forget 
          our core principles. If that happens, we'll update this page and probably add a lot more text, 
          which would be the first sign something has gone terribly wrong.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold">Contact Us</h2>
        <p className="mb-6">
          Have questions about our privacy practices? Want to express gratitude for not being tracked? 
          Just feeling chatty? You can reach us through our GitHub repository or by sending a message 
          in a bottle (digital or glass, we're not picky).
        </p>
        
        
          <h3 className="text-sectifyLightPurple">Legal Disclaimer</h3>
          <p className="text-sm opacity-80">
            This privacy policy is intentionally light-hearted but our commitment to not collecting your data is 
            completely serious. In a digital world obsessed with harvesting every click and keystroke, 
            we've chosen a different path. Sectify is a component library that respects your privacy by design – 
            not because regulations forced us to, but because we believe it's the right thing to do.
          </p>
        
      </motion.div>
    </SubPageLayout>
  );
}
