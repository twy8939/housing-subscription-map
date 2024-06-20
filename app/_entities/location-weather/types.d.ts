interface IApiInfo<T> {
  response: {
    header: IApiHeader;
    body: T;
  };
}

interface IApiHeader {
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

interface IAirQualityBody {
  items: IAirQualityItem[];
  pageNo: number;
  numOfRows: number;
  totalCount: number;
}

interface IAirQualityItem {
  cityName: string;
  cityNameEng: string;
  coValue: string;
  dataGubun: string;
  dataTime: string;
  districtCode: string;
  districtNumSeq: string;
  itemCode: string;
  khaiValue: string;
  no2Value: string;
  numOfRows: string;
  o3Value: string;
  pageNo: string;
  pm10Value: string;
  pm25Value: string;
  resultCode: string;
  resultMsg: string;
  returnType: string;
  searchCondition: string;
  serviceKey: string;
  sidoName: string;
  so2Value: string;
  totalCount: string;
}
