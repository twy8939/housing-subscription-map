import LocationButton from "@/app/_entities/location-button";
import LocationWeather from "@/app/_entities/location-weather";
import React from "react";

export default function SidebarContent() {
  return (
    <div className="flex-1">
      <div className="border-b px-6 py-5">
        <LocationButton />
        <LocationWeather />
      </div>
    </div>
  );
}
