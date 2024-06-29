import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  address?: string;
  error?: string;
};

export default async function geocode(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required" });
  }

  const url = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${lon},${lat}&output=json&orders=roadaddr`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "",
        "X-NCP-APIGW-API-KEY":
          process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET || "",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const address =
      data.results[0]?.region?.area1?.name || "주소를 찾을 수 없습니다";
    res.status(200).json({ address });
  } catch (error) {
    res.status(500).json({ error: "주소를 가져오지 못했습니다." });
  }
}
