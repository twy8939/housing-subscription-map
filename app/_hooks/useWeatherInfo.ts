import { useQuery } from "@tanstack/react-query";
import { fetchWeatherInfo } from "../_api/fetchWeatherInfo";

export default function useWeatherInfo() {
  return useQuery({
    queryKey: ["todayWeather"],
    queryFn: () => fetchWeatherInfo(),
  });
}
