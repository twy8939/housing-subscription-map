import { useQuery } from "@tanstack/react-query";
import { fetchApplyhomeInfo } from "../_api/fetchApplyhomeInfo";
import { useSearchStore } from "../_stores/search";

export default function useApplyHomeInfo() {
  const { search } = useSearchStore();
  return useQuery({
    queryKey: ["applyhomeInfo", search],
    queryFn: () => fetchApplyhomeInfo(search),
  });
}
