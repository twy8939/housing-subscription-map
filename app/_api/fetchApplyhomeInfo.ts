export const fetchApplyhomeInfo = async () => {
  const baseUrl =
    "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail";
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY as string;

  const params = {
    serviceKey,
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
