import { fetchWeatherInfo } from "@/app/_api/fetchWeatherInfo";
import React from "react";
import { find } from "lodash";
import { SKY_CODE } from "./constants";
import dayjs from "dayjs";

export default async function LocationWeather() {
  const yesterday = dayjs().subtract(1, "day");

  const todayWeather = await fetchWeatherInfo();
  const yesterdayWeather = await fetchWeatherInfo(yesterday);

  const air = Number(find(todayWeather, ["category", "SKY"])?.fcstValue);
  const temper = Number(find(todayWeather, ["category", "T1H"])?.fcstValue);

  const yesterdayTemper = Number(
    find(yesterdayWeather, ["category", "T1H"])?.fcstValue
  );

  const temperatureDifference = temper - yesterdayTemper;

  return (
    <div className="text-xs flex gap-2 my-1">
      <div className="flex gap-1">
        <span>{air ? SKY_CODE?.[air].label : "-"}</span>
        <span className="font-bold">{temper}˚</span>
        <span>
          어제보다 {temperatureDifference}℃
          {temperatureDifference && temperatureDifference > 0
            ? " 높아요"
            : " 낮아요"}
        </span>
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
