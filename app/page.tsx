import React from "react";
import Header from "./_widgets/header";
import MapSection from "./_widgets/map-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-screen">
        <MapSection />
      </main>
    </>
  );
}
