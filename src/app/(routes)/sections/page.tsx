import React from "react";
import SectionsOverview from "@/components/sectify/sections_all/SectionsOverview";

export default function SectionsPage() {
  return (
    <div className="container pt-24 mx-auto px-4 min-h-screen bg-sectifyDarkPurple min-w-full">
      {/* Modern background with gradient and pattern */}
      <div className="absolute inset-0 ">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[40%] bg-[#818cf8] rounded-full filter blur-[80px]" />
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[40%] bg-[#22d3ee] rounded-full filter blur-[80px]" />
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-[#c084fc] rounded-full filter blur-[80px]" />
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SectionsOverview />
      </div>
    </div>
  );
}