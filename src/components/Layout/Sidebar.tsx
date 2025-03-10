"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Sidebar = ({
  toggleSidebar,
  isCollapsed,
}: {
  toggleSidebar: () => void;
  isCollapsed: boolean;
}) => {
  const [openCategories, setOpenCategories] = useState({
    sections: false,
    animations: false,
    backgrounds: false,
    layouts: false,
    interactive: false,
  });

  // Fjern den lokale isCollapsed state
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // Automatisk skjul sidebar på mobile enheder
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // setIsCollapsed(true); - Fjern dette
        toggleSidebar(); // Kald toggleSidebar i stedet
      }
    };

    // Kør ved indlæsning
    handleResize();

    // Lyt efter ændringer i vinduets størrelse
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [toggleSidebar]);

  const toggleCategory = (category: keyof typeof openCategories) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      {/* Toggle knap - altid synlig */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-sectifyGreen hover:bg-gray-700 transition-colors"
        aria-label={isCollapsed ? "Åbn sidebar" : "Luk sidebar"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isCollapsed
                ? "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                : "M6 18L18 6M6 6l12 12"
            }
          />
        </svg>
      </button>

      {/* Sidebar - skjult på mobil og når kollapseret */}
      <aside
        className={`fixed left-0 top-0 h-screen flex flex-col bg-black text-gray-200 shadow-xl shadow-blue-gray-900/5 border-sectifyLightPurple border-r-4 pt-20 overflow-y-auto transition-all duration-300 z-40
        ${
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        } w-64 hidden md:flex`}
      >
        <nav className="flex flex-col gap-1 px-2 font-sans text-base font-normal text-gray-200">
          <h3 className="text-lg font-semibold px-3 py-2 text-sectifyGreen border-b border-sectifyLightPurple">
            Component Library
          </h3>

          {/* Sections Category */}
          <div className="relative block w-full mt-2">
            <div className="flex items-center w-full leading-tight rounded-lg outline-none text-start text-gray-200 hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen">
              <button
                type="button"
                onClick={() => toggleCategory("sections")}
                className="flex items-center justify-between w-full p-3 font-sans text-base font-medium leading-snug text-left"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3 text-sectifyGreen"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  Sections
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform ${
                      openCategories.sections ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCategories.sections ? "max-h-96" : "max-h-0"
              }`}
            >
              <nav className="flex flex-col gap-1 p-1 font-sans text-sm font-normal text-gray-300">
                <Link
                  href="/sections/hero"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Hero Sections
                </Link>
                <Link
                  href="/sections/features"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Feature Sections
                </Link>
                <Link
                  href="/sections/cta"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  CTA Sections
                </Link>
                <Link
                  href="/sections/testimonials"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Testimonials
                </Link>
              </nav>
            </div>
          </div>

          {/* Animations Category */}
          <div className="relative block w-full mt-1">
            <div className="flex items-center w-full leading-tight rounded-lg outline-none  text-start text-gray-200 hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen">
              <button
                type="button"
                onClick={() => toggleCategory("animations")}
                className="flex items-center justify-between w-full p-3 font-sans text-base font-medium leading-snug text-left"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3 text-sectifyGreen"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Animations
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform ${
                      openCategories.animations ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCategories.animations ? "max-h-96" : "max-h-0"
              }`}
            >
              <nav className="flex flex-col gap-1 p-1 font-sans text-sm font-normal text-gray-300">
                <Link
                  href="/animations/fade"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Fade Effects
                </Link>
                <Link
                  href="/animations/slide"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Slide Effects
                </Link>
                <Link
                  href="/animations/parallax"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Parallax Effects
                </Link>
              </nav>
            </div>
          </div>

          {/* Backgrounds Category */}
          <div className="relative block w-full mt-1">
            <div className="flex items-center w-full leading-tight rounded-lg outline-none  text-start text-gray-200 hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen">
              <button
                type="button"
                onClick={() => toggleCategory("backgrounds")}
                className="flex items-center justify-between w-full p-3 font-sans text-base font-medium leading-snug text-left"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3 text-sectifyGreen"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Backgrounds
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform ${
                      openCategories.backgrounds ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCategories.backgrounds ? "max-h-96" : "max-h-0"
              }`}
            >
              <nav className="flex flex-col gap-1 p-1 font-sans text-sm font-normal text-gray-300">
                <Link
                  href="/backgrounds/gradients"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Gradients
                </Link>
                <Link
                  href="/backgrounds/patterns"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Patterns
                </Link>
                <Link
                  href="/backgrounds/particles"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Particles
                </Link>
              </nav>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="relative block w-full mt-1">
            <div className="flex items-center w-full leading-tight rounded-lg outline-none  text-start text-gray-200 hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen">
              <button
                type="button"
                onClick={() => toggleCategory("interactive")}
                className="flex items-center justify-between w-full p-3 font-sans text-base font-medium leading-snug text-left"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3 text-sectifyGreen"
                  >
                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                    <path
                      fillRule="evenodd"
                      d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100 1.5.75.75 0 000-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Interactive Elements
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform ${
                      openCategories.interactive ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCategories.interactive ? "max-h-96" : "max-h-0"
              }`}
            >
              <nav className="flex flex-col gap-1 p-1 font-sans text-sm font-normal text-gray-300">
                <Link
                  href="/interactive/buttons"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Buttons & CTA
                </Link>
                <Link
                  href="/interactive/forms"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Forms
                </Link>
                <Link
                  href="/interactive/modals"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Modals & Popups
                </Link>
              </nav>
            </div>
          </div>

          {/* Layouts Category */}
          <div className="relative block w-full mt-1">
            <div className="flex items-center w-full leading-tight rounded-lg outline-none  text-start text-gray-200 hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen">
              <button
                type="button"
                onClick={() => toggleCategory("layouts")}
                className="flex items-center justify-between w-full p-3 font-sans text-base font-medium leading-snug text-left"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-3 text-sectifyGreen"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Layouts
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform ${
                      openCategories.layouts ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCategories.layouts ? "max-h-96" : "max-h-0"
              }`}
            >
              <nav className="flex flex-col gap-1 p-1 font-sans text-sm font-normal text-gray-300">
                <Link
                  href="/layouts/grid"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Grid Layouts
                </Link>
                <Link
                  href="/layouts/flex"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Flex Layouts
                </Link>
                <Link
                  href="/layouts/masonry"
                  className="flex items-center w-full p-2 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-sectifyGreen"
                >
                  <div className="grid mr-3 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  Masonry Layouts
                </Link>
              </nav>
            </div>
          </div>
        </nav>

        <div className="mt-auto p-4 border-t border-gray-700">
          <Link
            href="/feedback"
            className="flex items-center justify-center w-full p-2 bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple text-white rounded-lg hover:opacity-90 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                clipRule="evenodd"
              />
            </svg>
            Submit Feedback
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
