import { useQuery } from "@tanstack/react-query";
import { fetchApplyhomeInfo } from "../_api/fetchApplyhomeInfo";

export default function useApplyHomeInfo() {
  return useQuery({
    queryKey: ["applyhomeInfo"],
    queryFn: () => fetchApplyhomeInfo(),
  });
}
