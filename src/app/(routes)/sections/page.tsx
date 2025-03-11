import React from "react";
import SectionsOverview from "@/components/sectify/sections_all/SectionsOverview";
import SidebarLayout from "@/components/Layout/SidebarLayout";

export default function SectionsPage() {
  return (
    <SidebarLayout>
      <div className="container mt-24 mx-auto px-4 min-h-screen">
        <SectionsOverview />
      </div>
 
    </SidebarLayout>
  );
}