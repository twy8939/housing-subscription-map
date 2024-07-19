"use client";

import useAddressInfo from "@/app/_hooks/useAddressInfo";
import { useAddressStore } from "@/app/_stores/map";
import { useSearchStore } from "@/app/_stores/search";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";

export default function LocationButton() {
  const { data } = useAddressInfo();

  const { setSearch } = useSearchStore();

  const [area, setArea] = useState("");

  useEffect(() => {
    if (!data || isEmpty(data.results)) return;

    setSearch(data.results[0].region.area1.alias || "서울");

    setArea(`${data?.results[0]?.region.area2.name} 
        ${data?.results[0]?.region.area3.name}`);
  }, [data]);

  return (
    <div className="flex justify-between">
      <p className="text-lg font-bold cursor-pointer h-7">{area}</p>
    </div>
  );
}
