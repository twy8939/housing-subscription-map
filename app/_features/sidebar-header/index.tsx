import SearchInput from "@/app/_entities/search-input";
import React from "react";

export default function SidebarHeader() {
  return (
    <div>
      <div className="py-6 w-full flex justify-center items-center">
        <div className="w-full px-4">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
