"use client";

import React, { useState, useCallback } from "react";
import Sidebar from "../Layout/Sidebar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Brug useCallback for at undgå unødvendige re-renders
  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div className="flex">
      <Sidebar toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
      <main
        className={`flex-1 transition-all duration-300 w-full ${
          isCollapsed ? "md:ml-0" : "md:ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
