import { fetchCoordinateInfo } from "@/app/_api/fetchCoordinateInfo";
import Marker from "@/app/_entities/marker";
import useApplyHomeInfo from "@/app/_hooks/useApplyHomeInfo";
import { useMapStore } from "@/app/_stores/map";
import React from "react";

export default function Markers() {
  const { map } = useMapStore();
  const { data } = useApplyHomeInfo();

  if (!map) return <></>;
  return (
    <>
      {data.data.map((item: IApplyHomeItem) => {
        return (
          <Marker
            map={map}
            address={item.HSSPLY_ADRES}
            key={item.HOUSE_MANAGE_NO}
          />
        );
      })}
    </>
  );
}
