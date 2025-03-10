import React from "react";
import Sidebar from "../Layout/Sidebar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-16">{children}</main>
    </div>
  );
};

export default SidebarLayout;