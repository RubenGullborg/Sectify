"use client";

import { useState } from "react";
import BasicTestimonial from "@/components/sections/Testimonials/BasicTestimonial";
import { ArrowDown, Copy, Check, Info } from "lucide-react";

export default function BasicTestimonialPage() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = `<BasicTestimonial
  quote="This product has completely transformed how we work. The interface is intuitive, and the features are exactly what we needed. It's been a game-changer for our team's productivity."
  author="Sarah Johnson"
  role="Product Manager"
  companyName="TechCorp"
  companyLogo="/images/placeholder-logo.svg"
  avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  rating={5}
  backgroundColor="white"
  textColor="gray-900"
  accentColor="#3b82f6"
  layout="centered"
  showQuoteMarks={true}
  showRating={true}
  showAvatar={true}
  showLogo={true}
/>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header preview */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 py-24 px-4">
        <div className="container mx-auto">
          <BasicTestimonial
            backgroundColor="rgba(255,255,255,0.1)"
            textColor="white"
            accentColor="#60A5FA"
          />
        </div>
      </div>

      {/* Documentation content */}
      <div className="container mx-auto pb-16 pt-16 px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="border-b pb-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Basic Testimonial Section</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            A versatile testimonial component that showcases customer feedback with customizable styling,
            ratings, and layout options. Perfect for building trust and social proof on your website.
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
            The Basic Testimonial component is designed to display customer testimonials in a clean,
            professional format. It supports various customization options including layout styles,
            rating display, and visual elements like avatars and company logos.
          </p>
          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
            <div className="flex gap-2">
              <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <p>
                For maximum impact, use high-quality avatar images and keep testimonial quotes concise
                and focused on specific benefits or experiences. Consider using the layout that best
                matches your website's design language.
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
            <div className="p-6 bg-gray-100">
              <BasicTestimonial />
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
                    {`<BasicTestimonial
  quote="This product has completely transformed how we work. The interface is intuitive, and the features are exactly what we needed. It's been a game-changer for our team's productivity."
  author="Sarah Johnson"
  role="Product Manager"
  companyName="TechCorp"
  companyLogo="/images/placeholder-logo.svg"
  avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  rating={5}
  backgroundColor="white"
  textColor="gray-900"
  accentColor="#3b82f6"
  layout="centered"
  showQuoteMarks={true}
  showRating={true}
  showAvatar={true}
  showLogo={true}
/>`}
                  </code>
                </pre>
              )}
            </div>
          </div>

          {/* Example 2 */}
          <div className="mb-10 border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50">
              <h3 className="font-medium">Left-Aligned Minimal</h3>
            </div>
            <div className="p-6 bg-gray-100">
              <BasicTestimonial
                layout="left-aligned"
                showQuoteMarks={false}
                showRating={false}
                showLogo={false}
                backgroundColor="#F3F4F6"
                accentColor="#8B5CF6"
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
                  <td className="px-6 py-4 font-medium">quote</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">This product has...</td>
                  <td className="px-6 py-4">The testimonial text</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">author</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">Sarah Johnson</td>
                  <td className="px-6 py-4">Name of the testimonial author</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">layout</td>
                  <td className="px-6 py-4 text-gray-600">centered | left-aligned</td>
                  <td className="px-6 py-4 text-gray-600">centered</td>
                  <td className="px-6 py-4">Alignment of the testimonial content</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">rating</td>
                  <td className="px-6 py-4 text-gray-600">number</td>
                  <td className="px-6 py-4 text-gray-600">5</td>
                  <td className="px-6 py-4">Star rating (1-5)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">backgroundColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">white</td>
                  <td className="px-6 py-4">Background color of the testimonial</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">accentColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">#3b82f6</td>
                  <td className="px-6 py-4">Color for stars and decorative elements</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">showQuoteMarks</td>
                  <td className="px-6 py-4 text-gray-600">boolean</td>
                  <td className="px-6 py-4 text-gray-600">true</td>
                  <td className="px-6 py-4">Show/hide decorative quote marks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">showRating</td>
                  <td className="px-6 py-4 text-gray-600">boolean</td>
                  <td className="px-6 py-4 text-gray-600">true</td>
                  <td className="px-6 py-4">Show/hide star rating</td>
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
                  <span>Use authentic, specific testimonials that highlight real benefits</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Include high-quality professional photos for avatars</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Keep testimonials concise and easy to read</span>
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
                  <span>Use generic or fake-looking testimonials</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Include low-quality or pixelated images</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Overload the testimonial with too much information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 