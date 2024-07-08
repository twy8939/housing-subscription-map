import { useQuery } from "@tanstack/react-query";
import { fetchWeatherInfo } from "../_api/fetchWeatherInfo";
import { useLatLngStore } from "../_stores/map";

export default function useWeatherInfo() {
  const { lat, lng } = useLatLngStore();
  return useQuery({
    queryKey: ["todayWeather", lat, lng],
    queryFn: () => fetchWeatherInfo({ lat, lng }),
  });
}
