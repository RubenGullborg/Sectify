import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`border-t border-sectifyEggWhite bg-background py-8 relative ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sectifyLightPurple">
            © 2025 Sectify. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="/privacy"
              className="text-sectifyLightPurple hover:text-sectifyDarkPurple transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-sectifyLightPurple hover:text-sectifyDarkPurple transition-colors"
            >
              Terms
            </a>
            <a
              href="/roadmap"
              className="text-sectifyLightPurple hover:text-sectifyDarkPurple transition-colors"
            >
              Roadmap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
