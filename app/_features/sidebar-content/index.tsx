import LocationButton from "@/app/_entities/location-button";
import LocationWeather from "@/app/_entities/location-weather";
import React from "react";
import ApplyHomeList from "../applyhome-list";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchWeatherInfo } from "@/app/_api/fetchWeatherInfo";
import dayjs from "dayjs";
import { fetchAirQualityInfo } from "@/app/_api/fetchAirQualityInfo";
import { fetchApplyhomeInfo } from "@/app/_api/fetchApplyhomeInfo";

export default async function SidebarContent() {
  const queryClient = new QueryClient();
  const yesterday = dayjs().subtract(1, "day");

  await queryClient.prefetchQuery({
    queryKey: ["applyhomeInfo"],
    queryFn: () => fetchApplyhomeInfo(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["todayWeather"],
    queryFn: () => fetchWeatherInfo(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["yesterdayWeather"],
    queryFn: () => fetchWeatherInfo({ date: yesterday }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["airQuality"],
    queryFn: fetchAirQualityInfo,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex-1 overflow-x-hidden overflow-y-scroll scrollbar-none flex flex-col">
        <div className="px-6 py-5">
          <LocationButton />
          <LocationWeather />
        </div>
        <ApplyHomeList />
      </div>
    </HydrationBoundary>
  );
}
