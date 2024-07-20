import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchApplyhomeInfo } from "../_api/fetchApplyhomeInfo";
import { useSearchStore } from "../_stores/search";

export default function useApplyHomeInfo() {
  const { search } = useSearchStore();
  return useInfiniteQuery({
    queryKey: ["applyhomeInfo", search],
    queryFn: ({ pageParam }) => fetchApplyhomeInfo(pageParam),
    initialPageParam: {
      page: 1,
      perPage: 10,
      address: search,
    },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => ({
      ...lastPageParam,
      page: lastPageParam.page + 1,
    }),
  });
}
