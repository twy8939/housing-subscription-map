import dayjs, { Dayjs } from "dayjs";

export const fetchWeatherInfo = async ({
  lat = 37.5262411,
  lng = 126.99289439,
  date = dayjs(),
}: {
  lat: number;
  lng: number;
  date?: Dayjs;
}) => {
  if (lat === 0 || lng === 0) return;

  const baseUrl =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
  const serviceKey = process.env.NEXT_PUBLIC_API_SERVICE_KEY as string;

  const params = {
    serviceKey,
    numOfRows: "50",
    pageNo: "1",
    dataType: "JSON",
    base_date: dayjs(date).format("YYYYMMDD"),
    base_time: dayjs().subtract(1, "hour").format("HHmm"),
    nx: Math.floor(lat).toString(),
    ny: Math.floor(lng).toString(),
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(url);
    const data: IApiInfo<IWeatherBody> = await response.json();

    const filterData = data.response.body.items.item.filter(
      (item) => item.fcstTime === `${dayjs().format("HH")}00`
    );

    return filterData;
  } catch (error) {
    console.error(error);
  }
};
