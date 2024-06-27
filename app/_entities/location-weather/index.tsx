"use client";

import React from "react";
import { find } from "lodash";
import { SKY_CODE } from "./constants";
import useAirQualityInfo from "@/app/_hooks/useAirQualityInfo";
import useWeatherInfo from "@/app/_hooks/useWeatherInfo";
import useYesterdayWeatherInfo from "@/app/_hooks/useYesterdayWeatherInfo";

export default function LocationWeather() {
  const { data: todayWeather } = useWeatherInfo();
  const { data: yesterdayWeather } = useYesterdayWeatherInfo();
  const { data: airQuality } = useAirQualityInfo();

  const air = Number(find(todayWeather, ["category", "SKY"])?.fcstValue);
  const temper = Number(find(todayWeather, ["category", "T1H"])?.fcstValue);

  const yesterdayTemper = Number(
    find(yesterdayWeather, ["category", "T1H"])?.fcstValue
  );

  const temperatureDifference = temper - yesterdayTemper || 0;

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
          <span className="text-blue-500 pl-1">{airQuality?.pm10Value}</span>
        </span>
        <span>
          초미세
          <span className="text-green-500 pl-1">{airQuality?.pm25Value}</span>
        </span>
      </div>
    </div>
  );
}
