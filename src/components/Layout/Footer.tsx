import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-background py-8 relative ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>© 2025 Sectify. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;