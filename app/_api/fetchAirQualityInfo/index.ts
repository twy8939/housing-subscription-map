import { evaluatePM10, evaluatePM25 } from "@/app/_shared/airQualityUtils";

export const fetchAirQualityInfo = async () => {
  const baseUrl =
    "http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst";
  const serviceKey = process.env.NEXT_PUBLIC_API_SERVICE_KEY as string;

  const params = {
    serviceKey,
    returnType: "json",
    numOfRows: "5",
    pageNo: "1",
    sidoName: "서울",
    searchCondition: "DAILY",
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(url);
    const data: IApiInfo<IAirQualityBody> = await response.json();

    const airQualityData = data.response.body.items[0];

    const pm10Value = evaluatePM10(Number(airQualityData?.pm10Value));
    const pm25Value = evaluatePM25(Number(airQualityData?.pm25Value));

    return { pm10Value, pm25Value };
  } catch (error) {
    console.error(error);
  }
};
