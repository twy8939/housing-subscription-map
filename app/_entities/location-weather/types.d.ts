interface IWeatherInfo {
  response: {
    header: IWeatherHeader;
    body: IWeatherBody;
  };
}

interface IWeatherHeader {
  resultCode: string;
  resultMsg: string;
}

interface IWeatherBody {
  dataType: string;
  items: { item: IWeatherItem[] };
  pageNo: number;
  numOfRows: number;
  totalCount: number;
}

interface IWeatherItem {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}
