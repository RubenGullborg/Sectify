"use client";

import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isSectionsOpen, setIsSectionsOpen] = useState(true);

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 flex flex-col  bg-gray-200 bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          Sectify
        </h5>
      </div>

      <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {/* Sections Group */}
        <div className="relative block w-full">
          <div className="flex items-center w-full p-0 leading-tight rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900">
            <button
              type="button"
              onClick={() => setIsSectionsOpen(!isSectionsOpen)}
              className="flex items-center justify-between w-full p-3 font-sans text-xl font-semibold leading-snug text-left"
            >
              <div className="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base font-normal leading-relaxed text-blue-gray-900">
                Sections
              </p>
              <span className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className={`w-4 h-4 mx-auto transition-transform ${
                    isSectionsOpen ? "rotate-180" : ""
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
              isSectionsOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
              <Link
                href="/sections/hero"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900"
              >
                <div className="grid mr-4 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-5 h-3"
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
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900"
              >
                <div className="grid mr-4 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-5 h-3"
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
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900"
              >
                <div className="grid mr-4 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-5 h-3"
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
            </nav>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
