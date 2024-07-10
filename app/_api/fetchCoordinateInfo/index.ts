export const fetchCoordinateInfo = async ({ query }: { query: string }) => {
  try {
    const res = await fetch(
      `http://localhost:3000/example/map-geocode/v2/geocode?query=${query}`,
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

    const data: ICoordinateInfo = await res.json();

    const { x, y } = data.addresses[0];

    return { x, y };
  } catch (error) {
    console.error(error);
  }
};
