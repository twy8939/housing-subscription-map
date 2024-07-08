import { fetchWeatherInfo } from "../_api/fetchWeatherInfo";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { useLatLngStore } from "../_stores/map";

export default function useYesterdayWeatherInfo() {
  const { lat, lng } = useLatLngStore();
  const yesterday = dayjs().subtract(1, "day");

  return useQuery({
    queryKey: ["yesterdayWeather", lat, lng],
    queryFn: () => fetchWeatherInfo({ date: yesterday, lat, lng }),
  });
}
