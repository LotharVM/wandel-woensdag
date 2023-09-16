import { fetchData } from "@/api/api";
import { ALL_LOCATIONS_QUERY } from "../queries/ALL_LOCATIONS_QUERY";

export const queryAllLocations = async () => {
  const data = await fetchData({
    query: ALL_LOCATIONS_QUERY,
  });

  return data.allLocation;
};
