import React from "react";
import { fetchWeatherInfo } from "../_api/fetchWeatherInfo";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";

export default function useYesterdayWeatherInfo() {
  const yesterday = dayjs().subtract(1, "day");
  return useQuery({
    queryKey: ["yesterdayWeather"],
    queryFn: () => fetchWeatherInfo(yesterday),
  });
}
