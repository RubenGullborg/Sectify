"use client";

import React from "react";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatarSrc?: string;
}

interface TestimonialsProps {
  heading?: string;
  subheading?: string;
  testimonials?: TestimonialProps[];
  backgroundColor?: string;
  accentColor?: string;
}

export default function BasicTestimonial({
  heading = "What our customers are saying",
  subheading = "Don't just take our word for it. Read from our customers.",
  testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content: "This product has completely transformed how our team works. The efficiency gains have been remarkable.",
      avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content:
        "I've tried many similar solutions, but this one stands out for its intuitive design and powerful features.",
      avatarSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      name: "Emma Rodriguez",
      role: "Freelance Designer",
      content: "As a freelancer, this tool has saved me countless hours. The customer support is also exceptional.",
      avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    },
  ],
  backgroundColor = "#f8fafc",
  accentColor = "#3b82f6",
}: TestimonialsProps) {
  return (
    <section 
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -right-32 w-96 h-96 rounded-full" 
          style={{ background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)` }}
        />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)` }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl">{heading}</h2>
            <p className="text-gray-600 md:text-xl">
              {subheading}
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ 
  testimonial, 
  accentColor 
}: { 
  testimonial: TestimonialProps; 
  accentColor: string;
}) {
  // Create initials from name
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
        
        <div className="flex items-center gap-3 mt-2">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100 flex-shrink-0 relative">
            {testimonial.avatarSrc ? (
              <Image
                src={testimonial.avatarSrc}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center text-sm font-medium text-gray-600"
                style={{ backgroundColor: `${accentColor}15` }}
              >
                {initials}
              </div>
            )}
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-900 leading-none">{testimonial.name}</p>
            <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 