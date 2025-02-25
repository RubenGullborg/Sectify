import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b border-sectifyAsh z-10">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-sectifyBrown hover:text-sectifyPink transition-colors"
        >
          Sectify
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/sections"
                className="text-sectifyBrown hover:text-sectifyPink transition-colors"
              >
                Sections
              </Link>
            </li>
            <li>
              <Link
                href="/documentation"
                className="text-sectifyBrown hover:text-sectifyPink transition-colors"
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
