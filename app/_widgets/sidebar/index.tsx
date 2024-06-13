import SidebarHeader from "@/app/_features/sidebar-header";
import React from "react";

export default function SideBar() {
  return (
    <div className="absolute top-0 left-0 w-64 h-screen bg-white z-50">
      <SidebarHeader />
    </div>
  );
}
