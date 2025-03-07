import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-72 right-72 z-50">
      <div className="mx-4 my-4">
        <div className="backdrop-blur-lg  bg-white/5 border border-white/10 rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-sectifyGreen via-sectifyGreen to-sectifyLightPurple bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              Sectify
            </Link>

            <nav>
              <ul className="flex gap-8 items-center">
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
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
