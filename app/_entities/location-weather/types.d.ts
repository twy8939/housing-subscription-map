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
  nx: number;
  ny: number;
  obsrValue: string;
}
