import { useQuery } from "@tanstack/react-query";
import { fetchAddressInfo } from "../_api/fetchAddressInfo";
import { useLatLngStore } from "../_stores/map";

export default function useAddressInfo() {
  const { lat, lng } = useLatLngStore();

  return useQuery({
    queryKey: ["addressInfo", lat, lng],
    queryFn: () => fetchAddressInfo({ lat, lng }),
  });
}
