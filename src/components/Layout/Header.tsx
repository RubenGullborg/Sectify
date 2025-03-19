import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-72 right-72 z-50">
      <div className="mx-4 my-4">
        <div className="backdrop-blur-lg  bg-white/5 border border-white/10 rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-sectifyGreen via-sectifyGreen to-sectifyLightPurple bg-clip-text text-transparent hover:opacity-90 transition-opacity"
              >
                Sectify
              </Link>
              <span className="ml-2 text-xs font-medium bg-sectifyGreen/20 border border-sectifyGreen/30 text-sectifyGreen px-2 py-0.5 rounded-md transform -rotate-12 inline-block">
                0.0.1
              </span>
            </div>

            <nav>
              <ul className="flex gap-4 items-center">
                <li>
                  <Link
                    href="/sections"
                    className="text-sectifyGreen hover:text-sectifyFairyTale transition-colors font-medium"
                  >
                    <span>Sections</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/documentation"
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple text-white hover:opacity-90 transition-all duration-300"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-sectifyGreen hover:text-sectifyFairyTale transition-colors"
                    title="Community"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
