import { useQuery } from "@tanstack/react-query";
import { fetchWeatherInfo } from "../_api/fetchWeatherInfo";
import { useRecoilValue } from "recoil";
import { latlngState } from "../_atoms/map";

export default function useWeatherInfo() {
  const latlng = useRecoilValue(latlngState);

  return useQuery({
    queryKey: ["todayWeather", latlng],
    queryFn: () => fetchWeatherInfo({ latlng }),
  });
}
