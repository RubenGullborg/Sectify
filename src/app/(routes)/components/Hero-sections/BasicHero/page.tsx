"use client";

import { useState } from "react";
import BasicHero from "@/components/sections/Hero/BasicHero";
import { ArrowDown, Copy, Check, Info } from "lucide-react";

export default function BasicHeroPage() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = `<BasicHero
  title="Build beautiful websites faster than ever"
  subtitle="A collection of professionally designed, pre-built, fully responsive components that you can drop into your projects and customize to your needs."
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  primaryButtonLink="#"
  secondaryButtonLink="#"
  alignment="center"
  backgroundClassName="bg-gradient-to-br from-indigo-950 via-slate-900 to-black"
  showPattern={true}
  height="screen"
/>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Full-width preview at the top */}
      <BasicHero
        title="Basic Hero Section"
        subtitle="A clean, versatile hero section that works for any type of website"
        primaryButtonText="Get Started"
        secondaryButtonText="View Documentation"
        onPrimaryClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        onSecondaryClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        height="screen"
      />

      {/* Documentation content */}
      <div className="container mx-auto pb-16 pt-32 px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="border-b pb-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Basic Hero Section</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            A clean, versatile hero section with customizable background, pattern, and alignment options,
            perfect for landing pages, product showcases, or any web application.
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
            The Basic Hero component provides a simple, yet effective way to create eye-catching
            hero sections for your website. It includes customizable title, subtitle, buttons,
            and background options to match your brand's design language.
          </p>
          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
            <div className="flex gap-2">
              <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <p>
                For best results, keep titles concise (4-8 words) and use high-contrast 
                backgrounds to ensure text readability. Customize the height based on
                your content needs.
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
              <BasicHero 
                height="auto"
              />
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
                    {`<BasicHero
  title="Build beautiful websites faster than ever"
  subtitle="A collection of professionally designed, pre-built, fully responsive components that you can drop into your projects and customize to your needs."
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  primaryButtonLink="#"
  secondaryButtonLink="#"
  alignment="center"
  backgroundClassName="bg-gradient-to-br from-indigo-950 via-slate-900 to-black"
  showPattern={true}
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
              <h3 className="font-medium">Left-Aligned Variant</h3>
            </div>
            <div className="p-6">
              <BasicHero 
                title="Powerful Tools for Developers"
                subtitle="Streamline your workflow with our professionally designed component library built to save you time and effort."
                alignment="left"
                backgroundClassName="bg-gradient-to-r from-blue-900 to-purple-900"
                showPattern={false}
                height="auto"
              />
            </div>
          </div>
        </div>

        {/* Source Code Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Source Code</h2>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50 flex justify-between items-center">
              <h3 className="font-medium">BasicHero.tsx</h3>
              <button
                onClick={() => {
                  const code = `"use client";

import React from "react";
import Link from "next/link";

interface BasicHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  alignment?: "left" | "center" | "right";
  backgroundClassName?: string;
  showPattern?: boolean;
  height?: "auto" | "full" | "screen";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function BasicHero({
  title = "Build beautiful websites faster than ever",
  subtitle = "A collection of professionally designed, pre-built, fully responsive components that you can drop into your projects and customize to your needs.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
  alignment = "center",
  backgroundClassName = "bg-gradient-to-br from-indigo-950 via-slate-900 to-black",
  showPattern = true,
  height = "auto",
  onPrimaryClick,
  onSecondaryClick,
}: BasicHeroProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[alignment];

  const heightClasses = {
    auto: "py-20 md:py-32",
    full: "py-24 md:py-40",
    screen: "min-h-screen",
  }[height];

  return (
    <section
      className={\`relative \${heightClasses} overflow-hidden flex items-center \${backgroundClassName}\`}
    >
      {/* Background pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      )}

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={\`flex flex-col \${alignmentClasses} max-w-3xl mx-auto gap-6\`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href={primaryButtonLink}
              onClick={onPrimaryClick}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 text-center"
            >
              {primaryButtonText}
            </Link>

            <Link
              href={secondaryButtonLink}
              onClick={onSecondaryClick}
              className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium transition-colors duration-200 text-center"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}`;
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

import React from "react";
import Link from "next/link";

interface BasicHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  alignment?: "left" | "center" | "right";
  backgroundClassName?: string;
  showPattern?: boolean;
  height?: "auto" | "full" | "screen";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function BasicHero({
  title = "Build beautiful websites faster than ever",
  subtitle = "A collection of professionally designed, pre-built, fully responsive components that you can drop into your projects and customize to your needs.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
  alignment = "center",
  backgroundClassName = "bg-gradient-to-br from-indigo-950 via-slate-900 to-black",
  showPattern = true,
  height = "auto",
  onPrimaryClick,
  onSecondaryClick,
}: BasicHeroProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[alignment];

  const heightClasses = {
    auto: "py-20 md:py-32",
    full: "py-24 md:py-40",
    screen: "min-h-screen",
  }[height];

  return (
    <section
      className={\`relative \${heightClasses} overflow-hidden flex items-center \${backgroundClassName}\`}
    >
      {/* Background pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      )}

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={\`flex flex-col \${alignmentClasses} max-w-3xl mx-auto gap-6\`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href={primaryButtonLink}
              onClick={onPrimaryClick}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 text-center"
            >
              {primaryButtonText}
            </Link>

            <Link
              href={secondaryButtonLink}
              onClick={onSecondaryClick}
              className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium transition-colors duration-200 text-center"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}`}
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
                  <td className="px-6 py-4 text-gray-600">Build beautiful websites...</td>
                  <td className="px-6 py-4">The main heading text</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">subtitle</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">A collection of professionally...</td>
                  <td className="px-6 py-4">The secondary description text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">primaryButtonText</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">Get Started</td>
                  <td className="px-6 py-4">Text for the primary CTA button</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">secondaryButtonText</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">Learn More</td>
                  <td className="px-6 py-4">Text for the secondary CTA button</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">alignment</td>
                  <td className="px-6 py-4 text-gray-600">left | center | right</td>
                  <td className="px-6 py-4 text-gray-600">center</td>
                  <td className="px-6 py-4">Text and content alignment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">backgroundClassName</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">bg-gradient-to-br...</td>
                  <td className="px-6 py-4">CSS classes for background styling</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">showPattern</td>
                  <td className="px-6 py-4 text-gray-600">boolean</td>
                  <td className="px-6 py-4 text-gray-600">true</td>
                  <td className="px-6 py-4">Whether to show the dot pattern overlay</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">height</td>
                  <td className="px-6 py-4 text-gray-600">auto | full | screen</td>
                  <td className="px-6 py-4 text-gray-600">auto</td>
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
                  <span>Use clear, concise text that communicates value</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Choose background colors that provide good contrast</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Adjust height based on content and page design</span>
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
                  <span>Overload with too much text or many call-to-actions</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Use backgrounds that make text difficult to read</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Nest complex components inside the hero section</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
