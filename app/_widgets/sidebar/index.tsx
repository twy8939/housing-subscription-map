import SidebarContent from "@/app/_features/sidebar-content";
import SidebarHeader from "@/app/_features/sidebar-header";
import React from "react";

export default function SideBar() {
  return (
    <div className="absolute top-0 left-0 w-96 h-screen bg-white z-50 flex flex-col">
      <SidebarHeader />
      <div className="flex-1"></div>
    </div>
  );
}
