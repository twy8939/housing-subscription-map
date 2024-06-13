import Input from "@/app/_entities/input";
import React from "react";

export default function SidebarHeader() {
  return (
    <div>
      <div className="p-4 w-full h-12 flex justify-center items-center">
        <div>
          <Input placeholder="장소, 지하철 검색" />
        </div>
      </div>
    </div>
  );
}
