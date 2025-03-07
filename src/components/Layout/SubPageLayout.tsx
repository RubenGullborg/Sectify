"use client";
import React from "react";

interface SubPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start">
      {/* Statisk baggrund (ikke fixed) så orbs ikke følger med ved scroll */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
        {/* Tydeligere dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Statisk placerede gradient orbs i hjørnerne */}
        <div className="absolute top-[-10rem] left-[-10rem] w-[40rem] h-[40rem] bg-sectifyGreen/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-15rem] right-[-10rem] w-[50rem] h-[50rem] bg-sectifyLightPurple/30 rounded-full blur-[150px]" />

        {/* Subtile linjer for dybde */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Centreret indholdscontainer med forbedret spacing */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center py-12">
        {/* Forbedret header sektion med bedre visuel hierarki */}
        {(title || subtitle) && (
          <div className="w-full pt-16 pb-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              {title && (
                <div className="mb-4">
                  <h1 className="text-5xl pb-2 md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sectifyGreen via-sectifyLightPurple to-sectifyFairyTale bg-clip-text text-transparent tracking-tight leading-tight">
                    {title}
                  </h1>
                </div>
              )}
              {subtitle && (
                <p className="text-md md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Større og mere moderne indholdscontainer */}
        <div className="w-full px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            {" "}
            {/* Øget bredde fra 4xl til 5xl */}
            <div className="backdrop-blur-xl bg-white/[0.04] rounded-3xl border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.5)] p-10 md:p-14 relative overflow-hidden">
              {/* Dekorative elementer i indholdscontaineren */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-sectifyGreen/5 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-sectifyLightPurple/5 rounded-full blur-[80px]" />

              {/* Subtil border glow effekt */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 8s infinite",
                }}
              />

              {/* Indhold med forbedret styling */}
              <div className="relative z-10 text-white/90 prose prose-lg prose-invert max-w-none prose-headings:text-sectifyGreen prose-headings:font-semibold prose-a:text-sectifyLightPurple hover:prose-a:text-sectifyGreen prose-strong:text-white prose-img:rounded-xl prose-pre:bg-black/30 prose-pre:backdrop-blur-md">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tilføj keyframes animation for border glow */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SubPageLayout;
