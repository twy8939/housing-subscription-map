import dayjs from "dayjs";

export const fetchWeatherInfo = async () => {
  const baseUrl =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
  const serviceKey = process.env.NEXT_PUBLIC_WEATHER_SERVICE_KEY as string;

  const params = {
    serviceKey,
    numOfRows: "5",
    pageNo: "1",
    dataType: "JSON",
    base_date: dayjs().format("YYYYMMDD"),
    base_time: "0500",
    nx: "55",
    ny: "127",
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
