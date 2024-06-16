import LocationButton from "@/app/_entities/location-button";
import LocationWeather from "@/app/_entities/location-weather";
import React from "react";
import ApplyHomeList from "../applyhome-list";

export default function SidebarContent() {
  return (
    <div className="flex-1 overflow-hidden overflow-y-scroll">
      <div className="border-b px-6 py-5">
        <LocationButton />
        <LocationWeather />
      </div>
      <ApplyHomeList />
    </div>
  );
}
