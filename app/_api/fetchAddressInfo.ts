export const fetchAddressInfo = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  try {
    const res = await fetch(`/api/geocode?lat=${lat}&lon=${lon}`);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
