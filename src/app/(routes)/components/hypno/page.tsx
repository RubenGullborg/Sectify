"use client";

import { useState } from "react";
import Component from "@/components/sections/backgrounds/Hypno/page";
import { ArrowDown, Copy, Check, Info } from "lucide-react";

export default function HypnoPage() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const code = `<Component />`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto pb-16 pt-32 px-4 md:px-6 lg:px-8">
      {/* Header Section */}
      <div className="border-b pb-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Hypno Background</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl">
          A mesmerizing background component that creates a dynamic, pulsing effect with halftone waves. Perfect for adding depth and visual interest to your hero sections.
        </p>
        <div className="flex gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            UI Component
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Background
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
          The Hypno Background is an interactive component that uses HTML5 Canvas to create a mesmerizing, pulsing effect with halftone waves. It features dynamic color gradients and complex wave patterns that respond to time and position.
        </p>
        <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
          <div className="flex gap-2">
            <Info size={20} className="text-amber-500 flex-shrink-0 mt-1" />
            <p>
              The component is optimized for performance using requestAnimationFrame and efficient canvas rendering. It automatically adapts to screen size and features smooth animations.
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
            <Component />
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
                  {`<Component />`}
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* Source Code Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Source Code</h2>
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="border-b px-6 py-4 bg-gray-50 flex justify-between items-center">
            <h3 className="font-medium">hypno/page.tsx</h3>
            <button
              onClick={() => {
                const code = `"use client";

import { useEffect, useRef } from "react";

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHalftoneWave = () => {
      const gridSize = 20;
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize;
          const centerY = y * gridSize;
          const distanceFromCenter = Math.sqrt(
            Math.pow(centerX - canvas.width / 2, 2) +
              Math.pow(centerY - canvas.height / 2, 2)
          );
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
          );
          const normalizedDistance = distanceFromCenter / maxDistance;

          // Create more complex wave patterns
          const waveOffset1 = Math.sin(normalizedDistance * 10 - time) * 0.5 + 0.5;
          const waveOffset2 = Math.cos(normalizedDistance * 8 + time * 0.7) * 0.5 + 0.5;
          const waveOffset3 = Math.sin(normalizedDistance * 12 + time * 0.5) * 0.5 + 0.5;
          
          // Combine wave patterns
          const combinedOffset = (waveOffset1 + waveOffset2 + waveOffset3) / 3;
          const size = gridSize * combinedOffset * 0.8;

          // Create gradient effect based on position
          const hue = (normalizedDistance * 360 + time * 50) % 360;
          const saturation = 70 + waveOffset1 * 30;
          const lightness = 30 + waveOffset2 * 20;

          ctx.beginPath();
          ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = \`hsla(\${hue}, \${saturation}%, \${lightness}%, \${combinedOffset * 0.5})\`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      // Create a subtle fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawHalftoneWave();

      time += 0.05;
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen bg-black" />;
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

import { useEffect, useRef } from "react";

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHalftoneWave = () => {
      const gridSize = 20;
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize;
          const centerY = y * gridSize;
          const distanceFromCenter = Math.sqrt(
            Math.pow(centerX - canvas.width / 2, 2) +
              Math.pow(centerY - canvas.height / 2, 2)
          );
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
          );
          const normalizedDistance = distanceFromCenter / maxDistance;

          // Create more complex wave patterns
          const waveOffset1 = Math.sin(normalizedDistance * 10 - time) * 0.5 + 0.5;
          const waveOffset2 = Math.cos(normalizedDistance * 8 + time * 0.7) * 0.5 + 0.5;
          const waveOffset3 = Math.sin(normalizedDistance * 12 + time * 0.5) * 0.5 + 0.5;
          
          // Combine wave patterns
          const combinedOffset = (waveOffset1 + waveOffset2 + waveOffset3) / 3;
          const size = gridSize * combinedOffset * 0.8;

          // Create gradient effect based on position
          const hue = (normalizedDistance * 360 + time * 50) % 360;
          const saturation = 70 + waveOffset1 * 30;
          const lightness = 30 + waveOffset2 * 20;

          ctx.beginPath();
          ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = \`hsla(\${hue}, \${saturation}%, \${lightness}%, \${combinedOffset * 0.5})\`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      // Create a subtle fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawHalftoneWave();

      time += 0.05;
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen bg-black" />;
}`}
            </code>
          </pre>
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
                <span>Use as a background for hero sections</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <span>Combine with text and other elements</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <span>Use in dark themes for best effect</span>
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
                <span>Use with heavy text without sufficient contrast</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                  ✕
                </div>
                <span>Overload the page with too many animations</span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                  ✕
                </div>
                <span>Use on mobile devices without testing performance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 