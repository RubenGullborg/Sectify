import React from "react";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`py-12 relative ${className}`}>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        style={{ backdropFilter: "blur(100px)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sectifyGreen to-sectifyLightPurple bg-clip-text text-transparent mb-4">
              Sectify
            </h3>
            <p className="text-sectifyEggWhite/60 text-sm">
              Modern UI components for your next React project. Built with
              performance and accessibility in mind.
            </p>
          </div>

          <div>
            <h4 className="text-sectifyEggWhite text-lg font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sectifyEggWhite/50 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className="text-sectifyEggWhite/50 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-sectifyEggWhite/50 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sectifyEggWhite font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sectifyEggWhite font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors text-sm"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sectifyEggWhite/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sectifyEggWhite/40 text-sm">
            © {new Date().getFullYear()} Sectify. All rights reserved.
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://twitter.com"
              className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://github.com"
              className="text-sectifyEggWhite/60 hover:text-sectifyLightPurple transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
        style={{ backdropFilter: "blur(100px)" }}
      />
    </footer>
  );
};

export default Footer;
