"use client";

import ApplyHomeListItem from "@/app/_entities/applyhome-list-item";
import useApplyHomeInfo from "@/app/_hooks/useApplyHomeInfo";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

export default function ApplyHomeList() {
  const { data } = useApplyHomeInfo();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loading />;

  return (
    <div className="flex-1 overflow-hidden overflow-y-auto border-t scrollbar-thin">
      <ul className="list-none">
        {data?.data?.map((item: IApplyHomeItem) => {
          return <ApplyHomeListItem key={item.HOUSE_MANAGE_NO} item={item} />;
        })}
      </ul>
    </div>
  );
}
