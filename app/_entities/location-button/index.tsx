"use client";

import useAddressInfo from "@/app/_hooks/useAddressInfo";
import React from "react";

export default function LocationButton() {
  const address = useAddressInfo();

  console.log(address.data, "address");

  return (
    <div className="flex justify-between">
      <p className="text-lg font-bold cursor-pointer">광진구 화양동</p>
    </div>
  );
}
