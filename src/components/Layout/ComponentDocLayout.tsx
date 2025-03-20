"use client";

import { useState } from "react";
import { ArrowDown, Copy, Check, Info } from "lucide-react";

interface ComponentDocLayoutProps {
  title: string;
  description: string;
  badges?: {
    label: string;
    color: "blue" | "purple" | "green" | "orange";
  }[];
  dependencies?: {
    packages: string[];
    setup?: {
      file: string;
      code: string;
    };
  };
  overview?: {
    description: string;
    tip?: string;
  };
  examples: {
    title: string;
    description?: string;
    code: string;
    component: React.ReactNode;
    showCode?: boolean;
  }[];
  props?: {
    name: string;
    type: string;
    default: string;
    description: string;
  }[];
  guidelines?: {
    do: string[];
    dont: string[];
  };
  children?: React.ReactNode;
}

const badgeColors = {
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  green: "bg-green-100 text-green-800",
  orange: "bg-orange-100 text-orange-800",
};

export default function ComponentDocLayout({
  title,
  description,
  badges = [],
  dependencies,
  overview,
  examples,
  props,
  guidelines,
  children,
}: ComponentDocLayoutProps) {
  const [showCode, setShowCode] = useState<{ [key: number]: boolean }>({});
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopied({ ...copied, [index]: true });
    setTimeout(() => setCopied({ ...copied, [index]: false }), 2000);
  };

  return (
    <div className="container mx-auto pb-16 pt-32 px-4 md:px-6 lg:px-8">
      {/* Header Section */}
      <div className="border-b pb-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl">{description}</p>
        {badges.length > 0 && (
          <div className="flex gap-3">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeColors[badge.color]}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Dependencies Section */}
      {dependencies && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Dependencies</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium mb-3">Required Packages</h3>
              <p className="mb-4">Install the following dependencies:</p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <code className="text-sm text-gray-100">
                  npm install {dependencies.packages.join(" ")}
                </code>
              </div>
            </div>

            {dependencies.setup && (
              <div className="p-6 border rounded-lg">
                <h3 className="text-lg font-medium mb-3">Utility Setup</h3>
                <p className="mb-4">
                  Create a new file at{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    {dependencies.setup.file}
                  </code>
                  :
                </p>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-100">
                    {dependencies.setup.code}
                  </code>
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overview Section */}
      {overview && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">{overview.description}</p>
          {overview.tip && (
            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <div className="flex gap-2">
                <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <p>{overview.tip}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Examples Section */}
      {examples.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Examples</h2>
          {examples.map((example, index) => (
            <div key={index} className="mb-10 border rounded-lg overflow-hidden shadow-sm">
              <div className="border-b px-6 py-4 bg-gray-50 flex justify-between items-center">
                <h3 className="font-medium">{example.title}</h3>
                <button
                  onClick={() => copyCode(example.code, index)}
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded border hover:bg-gray-100"
                >
                  {copied[index] ? <Check size={16} /> : <Copy size={16} />}
                  {copied[index] ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="p-6">{example.component}</div>
              {(example.showCode ?? true) && (
                <div className="border-t px-6 py-4 bg-gray-50">
                  <button
                    onClick={() =>
                      setShowCode({ ...showCode, [index]: !showCode[index] })
                    }
                    className="flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    <ArrowDown
                      size={16}
                      className={`transform transition-transform ${
                        showCode[index] ? "rotate-180" : ""
                      }`}
                    />
                    {showCode[index] ? "Hide Code" : "Show Code"}
                  </button>
                  {showCode[index] && (
                    <pre className="mt-4 p-4 bg-gray-900 text-gray-100 rounded overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Props Table Section */}
      {props && props.length > 0 && (
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
                {props.map((prop, index) => (
                  <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium">{prop.name}</td>
                    <td className="px-6 py-4 text-gray-600">{prop.type}</td>
                    <td className="px-6 py-4 text-gray-600">{prop.default}</td>
                    <td className="px-6 py-4">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Usage Guidelines */}
      {guidelines && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium mb-3">Do</h3>
              <ul className="space-y-2">
                {guidelines.do.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium mb-3">Don't</h3>
              <ul className="space-y-2">
                {guidelines.dont.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                      ✕
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Custom Content */}
      {children}
    </div>
  );
} 