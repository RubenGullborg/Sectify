import React from "react";
import SectionsOverview from "@/components/sectify/sections_all/SectionsOverview";

export default function SectionsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Modern background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] z-0">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[40%] bg-[#818cf8] rounded-full filter blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[40%] bg-[#22d3ee] rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-[#c084fc] rounded-full filter blur-[120px]" />
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
      <div className="relative z-10 pt-24">
        <SectionsOverview />
      </div>
    </div>
  );
}