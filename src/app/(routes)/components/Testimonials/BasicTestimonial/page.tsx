"use client";

import { useState } from "react";
import BasicTestimonial from "@/components/sections/Testimonials/BasicTestimonial";
import { ArrowDown, Copy, Check, Info } from "lucide-react";

export default function BasicTestimonialPage() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = `<BasicTestimonial
  heading="What our customers are saying"
  subheading="Don't just take our word for it. Read from our customers."
  testimonials={[
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content: "This product has completely transformed how our team works. The efficiency gains have been remarkable.",
      avatarSrc: "/images/avatar-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "I've tried many similar solutions, but this one stands out for its intuitive design and powerful features.",
      avatarSrc: "/images/avatar-2.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Freelance Designer",
      content: "As a freelancer, this tool has saved me countless hours. The customer support is also exceptional.",
      avatarSrc: "/images/avatar-3.jpg"
    }
  ]}
  backgroundColor="#f8fafc"
  accentColor="#3b82f6"
/>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-full">
      {/* Header preview */}
      <BasicTestimonial />

      {/* Documentation content */}
      <div className="container mx-auto pb-16 pt-16 px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="border-b pb-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Testimonial Section</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            A clean, modern testimonial section to showcase customer feedback with a simple, elegant design.
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
            The Testimonial Section provides a simple, elegant way to showcase customer feedback. 
            It features a clean card design with customer quotes, avatars, and basic information, 
            arranged in a responsive grid layout.
          </p>
          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
            <div className="flex gap-2">
              <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
              <p>
                For best results, use high-quality avatar images and keep testimonial content 
                concise. The component automatically generates fallback avatars using initials 
                when no image is provided.
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
  heading="What our customers are saying"
  subheading="Don't just take our word for it. Read from our customers."
  testimonials={[
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content: "This product has completely transformed how our team works. The efficiency gains have been remarkable.",
      avatarSrc: "/images/avatar-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "I've tried many similar solutions, but this one stands out for its intuitive design and powerful features.",
      avatarSrc: "/images/avatar-2.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Freelance Designer",
      content: "As a freelancer, this tool has saved me countless hours. The customer support is also exceptional.",
      avatarSrc: "/images/avatar-3.jpg"
    }
  ]}
  backgroundColor="#f8fafc"
  accentColor="#3b82f6"
/>`}
                  </code>
                </pre>
              )}
            </div>
          </div>

          {/* Example 2 */}
          <div className="mb-10 border rounded-lg overflow-hidden shadow-sm">
            <div className="border-b px-6 py-4 bg-gray-50">
              <h3 className="font-medium">Custom Colors</h3>
            </div>
            <div className="p-6 bg-gray-100">
              <BasicTestimonial
                backgroundColor="#f0f9ff"
                accentColor="#0ea5e9"
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
                  <td className="px-6 py-4 font-medium">heading</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">What our customers are saying</td>
                  <td className="px-6 py-4">Section heading text</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">subheading</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">Don't just take our word for it...</td>
                  <td className="px-6 py-4">Section description text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">testimonials</td>
                  <td className="px-6 py-4 text-gray-600">TestimonialProps[]</td>
                  <td className="px-6 py-4 text-gray-600">[...default testimonials]</td>
                  <td className="px-6 py-4">Array of testimonial objects</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">backgroundColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">#f8fafc</td>
                  <td className="px-6 py-4">Background color of the section</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">accentColor</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">#3b82f6</td>
                  <td className="px-6 py-4">Accent color for decorative elements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonial Object Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Testimonial Object</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Required
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">name</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">Yes</td>
                  <td className="px-6 py-4">Name of the testimonial author</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">role</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">Yes</td>
                  <td className="px-6 py-4">Job title of the testimonial author</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">content</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">Yes</td>
                  <td className="px-6 py-4">The testimonial text</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">avatarSrc</td>
                  <td className="px-6 py-4 text-gray-600">string</td>
                  <td className="px-6 py-4 text-gray-600">No</td>
                  <td className="px-6 py-4">URL to author's avatar image</td>
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
                  <span>Use authentic, specific testimonials with real benefits</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Include professional, high-quality avatar images</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Keep testimonial content brief and focused</span>
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
                  <span>Use vague or generic testimonial statements</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Include testimonials that are too lengthy</span>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ✕
                  </div>
                  <span>Use colors that clash with your overall site design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 