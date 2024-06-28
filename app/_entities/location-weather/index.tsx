"use client";

import React, { useEffect, useMemo, useState } from "react";
import { find } from "lodash";
import { SKY_CODE } from "./constants";
import useAirQualityInfo from "@/app/_hooks/useAirQualityInfo";
import useWeatherInfo from "@/app/_hooks/useWeatherInfo";
import useYesterdayWeatherInfo from "@/app/_hooks/useYesterdayWeatherInfo";

export default function LocationWeather() {
  const { data: todayWeather } = useWeatherInfo();
  const { data: yesterdayWeather } = useYesterdayWeatherInfo();
  const { data: airQualityInfo } = useAirQualityInfo();

  const [air, setAir] = useState(0);
  const [temper, setTemper] = useState(0);

  const [yesterdayTemper, setYesterdayTemper] = useState(0);

  const [airQuality, setAirQuality] = useState({
    pm10Value: "",
    pm25Value: "",
  });

  const temperatureDifference = useMemo(() => {
    return temper - yesterdayTemper || "";
  }, [temper, yesterdayTemper]);

  useEffect(() => {
    if (todayWeather) {
      setAir(Number(find(todayWeather, ["category", "SKY"])?.fcstValue));
      setTemper(Number(find(todayWeather, ["category", "T1H"])?.fcstValue));
    }
  }, [todayWeather]);

  useEffect(() => {
    if (yesterdayWeather) {
      setYesterdayTemper(
        Number(find(yesterdayWeather, ["category", "T1H"])?.fcstValue)
      );
    }
  }, [yesterdayWeather]);

  useEffect(() => {
    if (airQualityInfo) {
      setAirQuality({
        pm10Value: airQualityInfo.pm10Value,
        pm25Value: airQualityInfo.pm25Value,
      });
    }
  }, [airQualityInfo]);

  return (
    <div className="text-xs flex gap-2 my-1 h-4">
      <div className="flex gap-1">
        <span>{air ? SKY_CODE?.[air]?.label : ""}</span>
        <span className="font-bold">{temper ? `${temper}˚` : ""}</span>
        {temperatureDifference && (
          <span>
            어제보다 {temperatureDifference}℃
            {temperatureDifference && temperatureDifference > 0
              ? " 높아요"
              : " 낮아요"}
          </span>
        )}
      </div>
      {airQuality?.pm10Value && (
        <div className="flex gap-1">
          <span>
            미세
            <span className="text-blue-500 pl-1">{airQuality.pm10Value}</span>
          </span>
          <span>
            초미세
            <span className="text-green-500 pl-1">{airQuality.pm25Value}</span>
          </span>
        </div>
      )}
    </div>
  );
}
