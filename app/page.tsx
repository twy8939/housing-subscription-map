import React from "react";
import Header from "./_widgets/header";
import MapSection from "./_widgets/map-section";
import SideBar from "./_widgets/sidebar";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="w-full h-screen">
        <SideBar />
        <MapSection />
      </main>
    </>
  );
}
