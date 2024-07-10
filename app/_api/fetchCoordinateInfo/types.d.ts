interface ICoordinateInfo {
  status: string;
  meta: ICoordinateInfoMeta;
  addresses: ICoordinateInfoAddress[];
  errorMessage: string;
}

interface ICoordinateInfoMeta {
  totalCount: number;
  page: number;
  count: number;
}

interface ICoordinateInfoAddress {
  roadAddress: string;
  jibunAddress: string;
  englishAddress: string;
  addressElements: ICoordinateInfoAddressElement[];
  x: string;
  y: string;
  distance: number;
}

interface ICoordinateInfoAddressElement {
  types: string[];
  longName: string;
  shortName: string;
  code: string;
}
