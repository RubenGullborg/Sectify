"use client";

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
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${combinedOffset * 0.5})`;
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
}
