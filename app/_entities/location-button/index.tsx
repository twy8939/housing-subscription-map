"use client";

import useAddressInfo from "@/app/_hooks/useAddressInfo";
import React, { useEffect, useState } from "react";

export default function LocationButton() {
  const { data } = useAddressInfo();

  const [area, setArea] = useState("");

  useEffect(() => {
    if (!data) return;
    setArea(`${data?.results[0]?.region.area2.name} 
        ${data?.results[0]?.region.area3.name}`);
  }, [data]);

  return (
    <div className="flex justify-between">
      <p className="text-lg font-bold cursor-pointer h-7">{area}</p>
    </div>
  );
}
