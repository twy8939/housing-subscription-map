export const fetchApplyhomeInfo = async (address?: string) => {
  const baseUrl =
    "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail";
  const serviceKey = process.env.NEXT_PUBLIC_API_SERVICE_KEY as string;

  const params = {
    serviceKey,
    "cond[SUBSCRPT_AREA_CODE_NM::EQ]": address || "서울",
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
