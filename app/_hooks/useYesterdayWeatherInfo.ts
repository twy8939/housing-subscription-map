import React from "react";
import { fetchWeatherInfo } from "../_api/fetchWeatherInfo";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { latlngState } from "../_atoms/map";

export default function useYesterdayWeatherInfo() {
  const yesterday = dayjs().subtract(1, "day");
  const latlng = useRecoilValue(latlngState);

  return useQuery({
    queryKey: ["yesterdayWeather", latlng],
    queryFn: () => fetchWeatherInfo({ date: yesterday, latlng }),
  });
}
