export const fetchApplyhomeInfo = async (pageParam?: {
  page?: number;
  perPage?: number;
  address?: string;
}) => {
  const baseUrl =
    "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail";
  const serviceKey = process.env.NEXT_PUBLIC_API_SERVICE_KEY as string;

  const params = {
    ...pageParam,
    "cond[SUBSCRPT_AREA_CODE_NM::EQ]": pageParam?.address || "",
    serviceKey,
  };

  const queryString = new URLSearchParams(params as any).toString();
  const url = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
