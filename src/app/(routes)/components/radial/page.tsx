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
    <div className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
      {/* Header Section */}
      <div className="border-b pb-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Radial Gradient Section</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl">
          A versatile component featuring customizable radial gradient backgrounds,
          perfect for creating eye-catching hero sections, call-to-actions, or feature highlights.
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
          The Radial Gradient Section component creates visually engaging background sections with customizable gradient colors.
          It's designed to increase visual appeal while maintaining readability of content through configurable overlay opacity.
        </p>
        <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
          <div className="flex gap-2">
            <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
            <p>
              For best results, choose colors that complement each other. Use darker colors with higher overlay opacity for better text contrast.
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
            />
          </div>
          <div className="border-t px-6 py-4 bg-gray-50">
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              <ArrowDown size={16} className={`transform transition-transform ${showCode ? 'rotate-180' : ''}`} />
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
            />
          </div>
        </div>
      </div>

      {/* Props Table Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Props</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Default</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium">title</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">-</td>
                <td className="px-6 py-4">The title of the section (required)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">subtitle</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">-</td>
                <td className="px-6 py-4">The subtitle or description text (required)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">primaryColor</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">#000428</td>
                <td className="px-6 py-4">Primary gradient color in hexadecimal format</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">secondaryColor</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">#004e92</td>
                <td className="px-6 py-4">Secondary gradient color in hexadecimal format</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">tertiaryColor</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">#000000</td>
                <td className="px-6 py-4">Tertiary gradient color in hexadecimal format</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">overlayOpacity</td>
                <td className="px-6 py-4 text-gray-600">number</td>
                <td className="px-6 py-4 text-gray-600">0.7</td>
                <td className="px-6 py-4">Opacity of the gradient overlay (0-1)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">primaryButtonText</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">-</td>
                <td className="px-6 py-4">Text for the primary action button</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">secondaryButtonText</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">-</td>
                <td className="px-6 py-4">Text for the secondary action button</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">className</td>
                <td className="px-6 py-4 text-gray-600">string</td>
                <td className="px-6 py-4 text-gray-600">""</td>
                <td className="px-6 py-4">Additional CSS classes to apply to the component</td>
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
                <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                <span>Use complementary colors for an appealing gradient</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                <span>Adjust overlay opacity for better text readability</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                <span>Use as hero sections or call-to-action areas</span>
              </li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-3">Don't</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">✕</div>
                <span>Use too many instances on a single page</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">✕</div>
                <span>Use with very light colors if displaying important text</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">✕</div>
                <span>Nest other complex components inside</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
