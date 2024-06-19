import { fetchWeatherInfo } from "@/app/_api/fetchWeatherInfo";
import React from "react";
import { find } from "lodash";
import { SKY_CODE } from "./constants";

export default async function LocationWeather() {
  const data = await fetchWeatherInfo();

  const air = find(data, ["category", "SKY"]);
  const temper = find(data, ["category", "T1H"]);

  return (
    <div className="text-xs flex gap-2 my-1">
      <div className="flex gap-1">
        <span>{air?.fcstValue ? SKY_CODE?.[air.fcstValue].label : "-"}</span>
        <span className="font-bold">{temper?.fcstValue}˚</span>
        <span>어제보다 1℃ 낮아요</span>
      </div>
      <div className="flex gap-1">
        <span>
          미세
          <span className="text-blue-500 pl-1">좋음</span>
        </span>
        <span>
          초미세
          <span className="text-green-500 pl-1">보통</span>
        </span>
      </div>
    </div>
  );
}
