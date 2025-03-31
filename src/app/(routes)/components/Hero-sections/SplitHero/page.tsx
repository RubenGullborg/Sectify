"use client";

import { useState } from "react";
import SplitHero from "@/components/sections/Hero/SplitHero";
import { ArrowDown, Copy, Check, Info, Link } from "lucide-react";

export default function SplitHeroPage() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = `<SplitHero
  title="Bring your ideas to life with ease"
  subtitle="A modern, split-layout hero section that balances captivating visuals with compelling copy to drive conversion."
  primaryButtonText="Get Started"
  secondaryButtonText="See Examples"
  primaryButtonLink="#"
  secondaryButtonLink="#"
  imageSrc="https://images.unsplash.com/photo-1618220179428-22790b461013"
  imageAlt="Abstract design"
  layout="imageRight"
  accentColor="#3b82f6"
  darkMode={true}
  animationSpeed="medium"
  height="screen"
/>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Full-width preview at the top */}
      <SplitHero
        title="Split Hero Section"
        subtitle="A modern, split-layout hero section that combines compelling visuals with engaging content"
        primaryButtonText="Get Started"
        secondaryButtonText="View Documentation"
        onPrimaryClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        onSecondaryClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        height="screen"
      />

      {/* Documentation content */}
      <div className="container mx-auto pb-16 pt-32 px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="border-b pb-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Split Hero Section</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            A modern, split-layout hero section that combines visual impact with
            compelling content, perfect for product launches, landing pages, or
            any content that benefits from strong visual support.
          </p>
          <div className="flex gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              UI Component
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Section
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Stable
            </span>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Split Hero component provides a visually striking way to present
            content alongside imagery. It features customizable layouts,
            animations, and theming options to match your brand's aesthetic. The
            component includes smooth loading animations and responsive design
            for all screen sizes.
          </p>
          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
            <div className="flex gap-2">
              <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <p>
                For best results, use high-quality images with good contrast and
                ensure your content is concise and impactful. The split layout
                works best when there's a balance between visual and textual
                elements.
              </p>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Examples</h2>

          {/* Example 1 */}
          <div className="mb-10 border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50 flex justify-between items-center">
              <h3 className="font-medium">Default Example</h3>
              <button
                onClick={copyCode}
                className="flex items-center gap-1 text-sm px-3 py-1 rounded border hover:bg-gray-100"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="p-6">
              <SplitHero height="auto" />
            </div>
            <div className="border-t px-6 py-4 bg-gray-50">
              <button
                onClick={() => setShowCode(!showCode)}
                className="flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                <ArrowDown
                  size={16}
                  className={`transform transition-transform ${
                    showCode ? "rotate-180" : ""
                  }`}
                />
                {showCode ? "Hide Code" : "Show Code"}
              </button>
              {showCode && (
                <pre className="mt-4 p-4 bg-gray-900 text-gray-100 rounded overflow-x-auto">
                  <code>
                    {`<SplitHero
  title="Bring your ideas to life with ease"
  subtitle="A modern, split-layout hero section that balances captivating visuals with compelling copy to drive conversion."
  primaryButtonText="Get Started"
  secondaryButtonText="See Examples"
  primaryButtonLink="#"
  secondaryButtonLink="#"
  imageSrc="https://images.unsplash.com/photo-1618220179428-22790b461013"
  imageAlt="Abstract design"
  layout="imageRight"
  accentColor="#3b82f6"
  darkMode={true}
  animationSpeed="medium"
  height="auto"
/>`}
                  </code>
                </pre>
              )}
            </div>
          </div>

          {/* Example 2 */}
          <div className="mb-10 border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50">
              <h3 className="font-medium">Light Mode with Left Image</h3>
            </div>
            <div className="p-6">
              <SplitHero
                title="Showcase Your Product"
                subtitle="A clean, modern layout perfect for product presentations and marketing campaigns."
                layout="imageLeft"
                darkMode={false}
                accentColor="#8b5cf6"
                height="auto"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Source Code</h2>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50 flex justify-between items-center">
              <h3 className="font-medium">SplitHero.tsx</h3>
              <button
                onClick={() => {
                  const code = `"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SplitHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  layout?: "imageRight" | "imageLeft";
  accentColor?: string;
  darkMode?: boolean;
  animationSpeed?: "slow" | "medium" | "fast";
  height?: "auto" | "full" | "screen";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function SplitHero({
  title = "Bring your ideas to life with ease",
  subtitle = "A modern, split-layout hero section that balances captivating visuals with compelling copy to drive conversion.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "See Examples",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
  imageSrc = "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  imageAlt = "Abstract design",
  layout = "imageRight",
  accentColor = "#3b82f6", // Blue by default
  darkMode = true,
  animationSpeed = "medium",
  height = "screen",
  onPrimaryClick,
  onSecondaryClick,
}: SplitHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const animationDuration = {
    slow: "duration-1000",
    medium: "duration-700",
    fast: "duration-500",
  }[animationSpeed];

  const heightClasses = {
    auto: "min-h-[500px]",
    full: "min-h-[700px]",
    screen: "min-h-screen",
  }[height];

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const subtitleColor = darkMode ? "text-gray-300" : "text-gray-600";

  const accentStyle = {
    backgroundColor: accentColor,
  };

  return (
    <section className={\`relative \${heightClasses} \${bgColor} overflow-hidden flex flex-col lg:flex-row\`}>
      {/* Content column */}
      <div 
        className={\`w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:px-16 py-16 \${
          layout === "imageRight" ? "order-1 lg:order-1" : "order-2 lg:order-2"
        }\`}
      >
        <div className="max-w-xl mx-auto lg:mx-0">
          {/* Accent line */}
          <div 
            className={\`h-1.5 w-12 mb-8 rounded \${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            } transition-all \${animationDuration} ease-out\`}
            style={accentStyle}
          ></div>
          
          <h1 
            className={\`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight \${textColor} mb-6 \${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all \${animationDuration} ease-out\`}
          >
            {title}
          </h1>
          
          <p 
            className={\`text-lg md:text-xl \${subtitleColor} mb-8 \${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all \${animationDuration} delay-100 ease-out\`}
          >
            {subtitle}
          </p>
          
          <div 
            className={\`flex flex-col sm:flex-row gap-4 \${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all \${animationDuration} delay-200 ease-out\`}
          >
            <Link
              href={primaryButtonLink}
              onClick={onPrimaryClick}
              className="px-8 py-3.5 rounded-lg text-white font-medium transition-all duration-200 text-center hover:shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              {primaryButtonText}
            </Link>
            
            <Link
              href={secondaryButtonLink}
              onClick={onSecondaryClick}
              className={\`px-8 py-3.5 rounded-lg border \${
                darkMode ? "border-gray-700 text-white hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-100"
              } font-medium transition-all duration-200 text-center\`}
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Image column */}
      <div 
        className={\`w-full lg:w-1/2 relative overflow-hidden \${
          layout === "imageRight" ? "order-2 lg:order-2" : "order-1 lg:order-1"
        } \${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity \${animationDuration} ease-out\`}
      >
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            background: layout === "imageRight" 
              ? \`linear-gradient(to right, \${darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"}, transparent 30%)\`
              : \`linear-gradient(to left, \${darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"}, transparent 30%)\`
          }}
        ></div>
        
        {/* Accent dots overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: \`radial-gradient(\${accentColor} 1px, transparent 1px)\`,
            backgroundSize: "20px 20px"
          }}
        ></div>
        
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div 
        className={\`absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl z-0 opacity-20 \${
          isLoaded ? "opacity-20" : "opacity-0"
        } transition-opacity \${animationDuration} delay-300\`}
        style={{ backgroundColor: accentColor }}
      ></div>
      
      <div 
        className={\`absolute -top-16 -left-16 w-64 h-64 rounded-full blur-3xl z-0 opacity-10 \${
          isLoaded ? "opacity-10" : "opacity-0"
        } transition-opacity \${animationDuration} delay-500\`}
        style={{ backgroundColor: accentColor }}
      ></div>
    </section>
  );
} `;
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex items-center gap-1 text-sm px-3 py-1 rounded border hover:bg-gray-100"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="p-6 bg-gray-900 text-gray-100 overflow-x-auto max-h-[400px] overflow-y-auto">
              <code>
                {`"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SplitHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  layout?: "imageRight" | "imageLeft";
  accentColor?: string;
  darkMode?: boolean;
  animationSpeed?: "slow" | "medium" | "fast";
  height?: "auto" | "full" | "screen";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function SplitHero({
  title = "Bring your ideas to life with ease",
  subtitle = "A modern, split-layout hero section that balances captivating visuals with compelling copy to drive conversion.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "See Examples",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
  imageSrc = "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  imageAlt = "Abstract design",
  layout = "imageRight",
  accentColor = "#3b82f6", // Blue by default
  darkMode = true,
  animationSpeed = "medium",
  height = "screen",
  onPrimaryClick,
  onSecondaryClick,
}: SplitHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const animationDuration = {
    slow: "duration-1000",
    medium: "duration-700",
    fast: "duration-500",
  }[animationSpeed];

  const heightClasses = {
    auto: "min-h-[500px]",
    full: "min-h-[700px]",
    screen: "min-h-screen",
  }[height];

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const subtitleColor = darkMode ? "text-gray-300" : "text-gray-600";

  const accentStyle = {
    backgroundColor: accentColor,
  };

  return (
    <section className={\`relative \${heightClasses} \${bgColor} overflow-hidden flex flex-col lg:flex-row\`}>
      {/* Content column */}
      <div 
        className={\`w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:px-16 py-16 \${
          layout === "imageRight" ? "order-1 lg:order-1" : "order-2 lg:order-2"
        }\`}
      >
        <div className="max-w-xl mx-auto lg:mx-0">
          {/* Accent line */}
          <div 
            className={\`h-1.5 w-12 mb-8 rounded \${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            } transition-all \${animationDuration} ease-out\`}
            style={accentStyle}
          ></div>
          
          <h1 
            className={\`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight \${textColor} mb-6 \${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all \${animationDuration} ease-out\`}
          >
            {title}
          </h1>
          
          <p 
            className={\`text-lg md:text-xl \${subtitleColor} mb-8 \${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all \${animationDuration} delay-100 ease-out\`}
          >
            {subtitle}
          </p>
          
          <div 
            className={\`flex flex-col sm:flex-row gap-4 \${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all \${animationDuration} delay-200 ease-out\`}
          >
            <Link
              href={primaryButtonLink}
              onClick={onPrimaryClick}
              className="px-8 py-3.5 rounded-lg text-white font-medium transition-all duration-200 text-center hover:shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              {primaryButtonText}
            </Link>
            
            <Link
              href={secondaryButtonLink}
              onClick={onSecondaryClick}
              className={\`px-8 py-3.5 rounded-lg border \${
                darkMode ? "border-gray-700 text-white hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-100"
              } font-medium transition-all duration-200 text-center\`}
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Image column */}
      <div 
        className={\`w-full lg:w-1/2 relative overflow-hidden \${
          layout === "imageRight" ? "order-2 lg:order-2" : "order-1 lg:order-1"
        } \${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity \${animationDuration} ease-out\`}
      >
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            background: layout === "imageRight" 
              ? \`linear-gradient(to right, \${darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"}, transparent 30%)\`
              : \`linear-gradient(to left, \${darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"}, transparent 30%)\`
          }}
        ></div>
        
        {/* Accent dots overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: \`radial-gradient(\${accentColor} 1px, transparent 1px)\`,
            backgroundSize: "20px 20px"
          }}
        ></div>
        
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div 
        className={\`absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl z-0 opacity-20 \${
          isLoaded ? "opacity-20" : "opacity-0"
        } transition-opacity \${animationDuration} delay-300\`}
        style={{ backgroundColor: accentColor }}
      ></div>
      
      <div 
        className={\`absolute -top-16 -left-16 w-64 h-64 rounded-full blur-3xl z-0 opacity-10 \${
          isLoaded ? "opacity-10" : "opacity-0"
        } transition-opacity \${animationDuration} delay-500\`}
        style={{ backgroundColor: accentColor }}
      ></div>
    </section>
  );
} `}
              </code>
            </pre>
          </div>
        </div>

        {/* Props Table Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Props</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">title</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">
                    Bring your ideas...
                  </td>
                  <td className="px-6 py-4">The main heading text</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">subtitle</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">
                    A modern, split-layout...
                  </td>
                  <td className="px-6 py-4">The secondary description text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">imageSrc</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">
                    https://images.unsplash...
                  </td>
                  <td className="px-6 py-4">URL of the hero image</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">layout</td>
                  <td className="px-6 py-4 text-gray-600">
                    imageRight | imageLeft
                  </td>
                  <td className="px-6 py-4 text-gray-600">imageRight</td>
                  <td className="px-6 py-4">
                    Position of the image relative to content
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">accentColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">#3b82f6</td>
                  <td className="px-6 py-4">
                    Primary color for accents and buttons
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">darkMode</td>
                  <td className="px-6 py-4 text-gray-600">boolean</td>
                  <td className="px-6 py-4 text-gray-600">true</td>
                  <td className="px-6 py-4">
                    Toggle between dark and light theme
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">animationSpeed</td>
                  <td className="px-6 py-4 text-gray-600">
                    slow | medium | fast
                  </td>
                  <td className="px-6 py-4 text-gray-600">medium</td>
                  <td className="px-6 py-4">Speed of entrance animations</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">height</td>
                  <td className="px-6 py-4 text-gray-600">
                    auto | full | screen
                  </td>
                  <td className="px-6 py-4 text-gray-600">screen</td>
                  <td className="px-6 py-4">Height of the hero section</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium mb-3">Do</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>
                    Use high-quality, relevant images that complement your
                    content
                  </span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>
                    Keep text content concise and focused on key messages
                  </span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>
                    Choose accent colors that match your brand identity
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium mb-3">Don't</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Use low-resolution or poorly cropped images</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Overcrowd the content area with too much text</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Choose accent colors that clash with your image</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

