import ApplyHomeListItem from "@/app/_entities/applyhome-list-item";
import React from "react";
import { fetchApplyhomeInfo } from "@/app/_api/fetchApplyhomeInfo";

async function ApplyHomeList() {
  const data = await fetchApplyhomeInfo();

  return (
    <div className="flex-1 overflow-hidden overflow-y-auto">
      <ul className="list-none">
        {data.data.map((item: IApplyHomeItem) => {
          return <ApplyHomeListItem key={item.PBLANC_NO} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default ApplyHomeList;
