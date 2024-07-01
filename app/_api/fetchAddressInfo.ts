export const fetchAddressInfo = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  try {
    const res = await fetch(
      `http://localhost:3000/example/map-reversegeocode/v2/gc?coords=128.12345,37.98776`,
      {
        headers: {
          "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NCP_CLIENT_ID || "",
          "X-NCP-APIGW-API-KEY":
            process.env.NEXT_PUBLIC_NCP_CLIENT_SECRET || "",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
