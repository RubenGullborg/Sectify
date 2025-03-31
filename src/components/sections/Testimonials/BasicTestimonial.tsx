"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote?: string;
  author?: string;
  role?: string;
  companyName?: string;
  companyLogo?: string;
  avatarSrc?: string;
  rating?: number;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  layout?: "centered" | "left-aligned";
  showQuoteMarks?: boolean;
  showRating?: boolean;
  showAvatar?: boolean;
  showLogo?: boolean;
}

export default function BasicTestimonial({
  quote = "This product has completely transformed how we work. The interface is intuitive, and the features are exactly what we needed. It's been a game-changer for our team's productivity.",
  author = "Sarah Johnson",
  role = "Product Manager",
  companyName = "TechCorp",
  companyLogo = "/images/placeholder-logo.svg",
  avatarSrc = "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  rating = 5,
  backgroundColor = "white",
  textColor = "gray-900",
  accentColor = "#3b82f6",
  layout = "centered",
  showQuoteMarks = true,
  showRating = true,
  showAvatar = true,
  showLogo = true,
}: TestimonialProps) {
  const alignmentClasses = {
    centered: "text-center items-center",
    "left-aligned": "text-left items-start",
  }[layout];

  return (
    <div
      className={`relative p-8 md:p-12 rounded-2xl overflow-hidden ${
        backgroundColor === "white" ? "bg-white" : ""
      }`}
      style={{ backgroundColor: backgroundColor !== "white" ? backgroundColor : undefined }}
    >
      {/* Background quote mark decoration */}
      {showQuoteMarks && (
        <div
          className="absolute top-0 left-0 text-9xl leading-none opacity-10 font-serif"
          style={{ color: accentColor }}
        >
          "
        </div>
      )}

      <div className={`relative flex flex-col ${alignmentClasses} gap-6 max-w-3xl mx-auto`}>
        {/* Rating */}
        {showRating && (
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${i < rating ? "fill-current" : "stroke-current opacity-30"}`}
                style={{ color: accentColor }}
              />
            ))}
          </div>
        )}

        {/* Quote */}
        <blockquote className={`text-xl md:text-2xl font-medium text-${textColor}`}>
          "{quote}"
        </blockquote>

        {/* Author info */}
        <div className={`flex ${layout === "centered" ? "flex-col" : "items-center"} gap-4`}>
          {showAvatar && (
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image
                src={avatarSrc}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className={layout === "centered" ? "text-center" : ""}>
            <div className={`font-semibold text-${textColor}`}>{author}</div>
            <div className="text-gray-500">
              {role}
              {companyName && ` · ${companyName}`}
            </div>
          </div>
        </div>

        {/* Company logo */}
        {showLogo && companyLogo && (
          <div className="relative h-8 w-auto mt-2">
            <Image
              src={companyLogo}
              alt={companyName || "Company logo"}
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
} 