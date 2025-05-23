"use client";

import { useState } from "react";
import { GradientSection } from "@/components/sections/backgrounds/radial/radial-section";
import { ArrowDown, Copy, Check, Info } from "lucide-react";

export default function RadialPage() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = `<GradientSection
  title="Another Style Variation"
  subtitle="Explore different color combinations for your sections"
  primaryColor="#000428"
  secondaryColor="#004e92"
  tertiaryColor="#000000"
  overlayOpacity={0.7}
  primaryButtonText="Get Access"
  secondaryButtonText="Read Docs"
  className="border-t border-white/10"
/>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Full-width preview at the top */}
      <GradientSection
        title="Radial Dark Sun Section"
        subtitle="A versatile component featuring customizable radial gradients, looking like the sun or the moon"
        primaryColor="#000428"
        secondaryColor="#004e92"
        tertiaryColor="#000000"
        overlayOpacity={0.7}
        primaryButtonText="Get Started"
        secondaryButtonText="View Documentation"
        onPrimaryClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        onSecondaryClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        fullHeight={true}
        className="border-b border-white/10"
      />

      {/* Documentation content */}
      <div className="container mx-auto pb-16 pt-32 px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="border-b pb-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Radial Gradient Section</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            A versatile component featuring customizable radial gradient
            backgrounds, perfect for creating eye-catching hero sections,
            call-to-actions, or feature highlights.
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
            The Radial Gradient Section component creates visually engaging
            background sections with customizable gradient colors. It's designed
            to increase visual appeal while maintaining readability of content
            through configurable overlay opacity.
          </p>
          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
            <div className="flex gap-2">
              <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <p>
                For best results, choose colors that complement each other. Use
                darker colors with higher overlay opacity for better text
                contrast.
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
              <h3 className="font-medium">Basic Example</h3>
              <button
                onClick={copyCode}
                className="flex items-center gap-1 text-sm px-3 py-1 rounded border hover:bg-gray-100"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="p-6">
          <GradientSection
            title="Another Style Variation"
            subtitle="Explore different color combinations for your sections"
            primaryColor="#000428"
            secondaryColor="#004e92"
            tertiaryColor="#000000"
            overlayOpacity={0.7}
            primaryButtonText="Get Access"
            secondaryButtonText="Read Docs"
            className="border-t border-white/10"
            fullHeight={false}
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
            {`<GradientSection
    title="Another Style Variation"
    subtitle="Explore different color combinations for your sections"
    primaryColor="#000428"
    secondaryColor="#004e92"
    tertiaryColor="#000000"
    overlayOpacity={0.7}
    primaryButtonText="Get Access"
    secondaryButtonText="Read Docs"
    className="border-t border-white/10"
/>`}
          </code>
        </pre>
              )}
            </div>
          </div>

          {/* Example 2 */}
          <div className="mb-10 border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50">
              <h3 className="font-medium">Purple Variant</h3>
            </div>
            <div className="p-6">
          <GradientSection
                title="Purple Gradient Variation"
                subtitle="This variant uses a purple color scheme for a more vibrant look"
                primaryColor="#4A00E0"
                secondaryColor="#8E2DE2"
                tertiaryColor="#111111"
                overlayOpacity={0.65}
                primaryButtonText="Learn More"
                secondaryButtonText="Documentation"
                className="border-t border-white/10"
                fullHeight={false}
              />
            </div>
          </div>
        </div>

        {/* Source Code Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Source Code</h2>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50 flex justify-between items-center">
              <h3 className="font-medium">radial-section.tsx</h3>
              <button
                onClick={() => {
                  const code = `"use client"

import type React from "react"

interface GradientSectionProps {
  title?: string
  subtitle?: string
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
  overlayOpacity?: number
  fullHeight?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
  children?: React.ReactNode
}

export function GradientSection({
  title = "Elevate Your Experience",
  subtitle = "Discover a new dimension of possibilities with our innovative solutions",
  primaryColor = "#26004d",
  secondaryColor = "#6b00d6",
  tertiaryColor = "#06000d",
  overlayOpacity = 0.5,
  fullHeight = true,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
  children,
}: GradientSectionProps) {
  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      className={\`relative flex flex-col items-center justify-center w-full overflow-hidden \${fullHeight ? "min-h-screen" : "py-24"} \${className}\`}
      style={{
        backgroundImage: \`radial-gradient(circle at top, \${primaryColor} 45%, \${secondaryColor} 55%, \${tertiaryColor} 70%)\`,
      }}
    >
      <div className="relative z-10 container px-4 md:px-6 py-10 mx-auto text-center">
        {title && (
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">{title}</h2>
        )}
        {subtitle && <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">{subtitle}</p>}

        {children || (
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
              <button
                onClick={onPrimaryClick}
                className="px-8 py-3 rounded-full text-base font-medium transition-all
                bg-gradient-to-r from-white/90 to-white 
                text-purple-900 hover:shadow-lg hover:shadow-white/20 
                hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-8 py-3 rounded-full text-base font-medium transition-all
                bg-white/10 backdrop-blur-sm border border-white/20
                text-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/10
                hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                {secondaryButtonText}
              </button>
            </div>

            <div className="mt-12 animate-bounce cursor-pointer" onClick={scrollToContent}>
              <svg
                className="h-8 w-8 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-700" />

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-96 z-[1]"
        style={{
          background: \`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,\${overlayOpacity}) 40%, #000000)\`,
        }}
      />
    </section>
  )
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
                {`"use client"

import type React from "react"

interface GradientSectionProps {
  title?: string
  subtitle?: string
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
  overlayOpacity?: number
  fullHeight?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  className?: string
  children?: React.ReactNode
}

export function GradientSection({
  title = "Elevate Your Experience",
  subtitle = "Discover a new dimension of possibilities with our innovative solutions",
  primaryColor = "#26004d",
  secondaryColor = "#6b00d6",
  tertiaryColor = "#06000d",
  overlayOpacity = 0.5,
  fullHeight = true,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
  children,
}: GradientSectionProps) {
  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      className={\`relative flex flex-col items-center justify-center w-full overflow-hidden \${fullHeight ? "min-h-screen" : "py-24"} \${className}\`}
      style={{
        backgroundImage: \`radial-gradient(circle at top, \${primaryColor} 45%, \${secondaryColor} 55%, \${tertiaryColor} 70%)\`,
      }}
    >
      <div className="relative z-10 container px-4 md:px-6 py-10 mx-auto text-center">
        {title && (
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">{title}</h2>
        )}
        {subtitle && <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">{subtitle}</p>}

        {children || (
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
              <button
                onClick={onPrimaryClick}
                className="px-8 py-3 rounded-full text-base font-medium transition-all
                bg-gradient-to-r from-white/90 to-white 
                text-purple-900 hover:shadow-lg hover:shadow-white/20 
                hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-8 py-3 rounded-full text-base font-medium transition-all
                bg-white/10 backdrop-blur-sm border border-white/20
                text-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/10
                hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                {secondaryButtonText}
              </button>
            </div>

            <div className="mt-12 animate-bounce cursor-pointer" onClick={scrollToContent}>
              <svg
                className="h-8 w-8 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-700" />

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-96 z-[1]"
        style={{
          background: \`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,\${overlayOpacity}) 40%, #000000)\`,
        }}
      />
    </section>
  )
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
                  <td className="px-6 py-4 text-gray-600">-</td>
                  <td className="px-6 py-4">
                    The title of the section (required)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">subtitle</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">-</td>
                  <td className="px-6 py-4">
                    The subtitle or description text (required)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">primaryColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">#000428</td>
                  <td className="px-6 py-4">
                    Primary gradient color in hexadecimal format
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">secondaryColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">#004e92</td>
                  <td className="px-6 py-4">
                    Secondary gradient color in hexadecimal format
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">tertiaryColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">#000000</td>
                  <td className="px-6 py-4">
                    Tertiary gradient color in hexadecimal format
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">overlayOpacity</td>
                  <td className="px-6 py-4 text-gray-600">number</td>
                  <td className="px-6 py-4 text-gray-600">0.7</td>
                  <td className="px-6 py-4">
                    Opacity of the gradient overlay (0-1)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">primaryButtonText</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">-</td>
                  <td className="px-6 py-4">
                    Text for the primary action button
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">secondaryButtonText</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">-</td>
                  <td className="px-6 py-4">
                    Text for the secondary action button
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">className</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">""</td>
                  <td className="px-6 py-4">
                    Additional CSS classes to apply to the component
                  </td>
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
                  <span>Use complementary colors for an appealing gradient</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Adjust overlay opacity for better text readability</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Use as hero sections or call-to-action areas</span>
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
                  <span>Use too many instances on a single page</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>
                    Use with very light colors if displaying important text
                  </span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Nest other complex components inside</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
