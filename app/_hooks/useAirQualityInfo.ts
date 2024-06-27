import { fetchAirQualityInfo } from "../_api/fetchAirQualityInfo";
import { useQuery } from "@tanstack/react-query";

export default function useAirQualityInfo() {
  return useQuery({
    queryKey: ["airQuality"],
    queryFn: () => fetchAirQualityInfo(),
  });
}
