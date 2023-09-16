import { fetchData } from "@/api/api";
import { LOCATION_QUERY } from "../queries/LOCATION_QUERY";

export const queryLocation = async ({ slug }) => {
  const data = await fetchData({
    query: LOCATION_QUERY,
    variables: { slug },
  });

  if (data?.location?.[0]) {
    return data.location[0];
  }
};
