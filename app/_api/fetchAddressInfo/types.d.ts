interface IAddressInfo {
  status: IAddressInfoStatus;
  results: IAddressInfoResult[];
}

interface IAddressInfoStatus {
  code: number;
  name: string;
  message: string;
}

interface IAddressInfoResult {
  name: string;
  code: IAddressInfoResultCode;
  region: IAddressInfoRegion;
}

interface IAddressInfoResultCode {
  id: string;
  type: string;
  mappingId: string;
}

interface IAddressInfoRegion {
  area0: IAddressInfoRegionArea;
  area1: IAddressInfoRegionArea;
  area2: IAddressInfoRegionArea;
  area3: IAddressInfoRegionArea;
  area4: IAddressInfoRegionArea;
}

interface IAddressInfoRegionArea {
  name: string;
  coords: Coords;
  alias?: string;
}

interface Coords {
  center: Center;
}

interface Center {
  crs: string;
  x: number;
  y: number;
}
