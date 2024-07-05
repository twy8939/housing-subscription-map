"use client";

import ApplyHomeListItem from "@/app/_entities/applyhome-list-item";
import useApplyHomeInfo from "@/app/_hooks/useApplyHomeInfo";
import React from "react";

export default function ApplyHomeList() {
  const { data } = useApplyHomeInfo();

  return (
    <div className="flex-1 overflow-hidden overflow-y-auto">
      <ul className="list-none">
        {data.data.map((item: IApplyHomeItem) => {
          return <ApplyHomeListItem key={item.HOUSE_MANAGE_NO} item={item} />;
        })}
      </ul>
    </div>
  );
}
