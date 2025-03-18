import React from "react";
import SectionsOverview from "@/components/sectify/sections_all/SectionsOverview";
import SidebarLayout from "@/components/Layout/SidebarLayout";

export default function SectionsPage() {
  return (
    <SidebarLayout>
      <div className="container pt-24 mx-auto px-4 min-h-screen bg-sectifyDarkPurple/90 min-w-full">
        <SectionsOverview />
      </div>
 
    </SidebarLayout>
  );
}