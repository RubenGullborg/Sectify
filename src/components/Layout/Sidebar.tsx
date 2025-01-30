import React from "react";
import Link from "next/link";
const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-background p-4">
      <nav>
        <ul className="space-y-2">
          <li className="font-medium">Components</li>
          <li className="pl-4">
            <Link href="/sections/hero">Hero Sections</Link>
          </li>
          <li className="pl-4">
            <Link href="/sections/features">Feature Sections</Link>
          </li>
          <li className="pl-4">
            <Link href="/sections/cta">CTA Sections</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;