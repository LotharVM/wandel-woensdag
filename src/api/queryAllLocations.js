import { fetchData } from '@/api/api';
import { ALL_LOCATIONS_QUERY } from '../queries/ALL_LOCATIONS_QUERY';

export const queryAllLocations = async () => {
  const data = await fetchData({
    query: ALL_LOCATIONS_QUERY,
  });

  const fetchAddress = async ({ lat, lng }) => {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=AIzaSyAZFbONcFjFaR7hVOTFsBcUE8C3Twf-Cc8`
    );
    const data = await res.json();
    return data?.results?.[0]?.formatted_address;
  };

  const locationsWithAddress = await Promise.all(
    data.allLocation.map(async location => {
      const { lat, lng } = location.googleMaps;
      const address = await fetchAddress({ lat, lng });
      return {
        ...location,
        address,
      };
    })
  );

  return locationsWithAddress;
};
