'use client';

import React, { FC } from 'react';
import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';
import { MAP_STYLE } from '@/constants/map';
import { Location } from '@/interfaces/Location';
import { useAtom } from 'jotai';
import { ActiveMapLocationAtom } from '@/store/grid';

interface MapProps {
  locations: Location[];
}

export const Map: FC<MapProps> = ({ locations }) => {
  const position = { lat: 52.35901893285712, lng: 4.901848080673377 };
  const [activeMapLocation, setActiveMapLocation] = useAtom(ActiveMapLocationAtom);

  return (
    <div className="h-full w-full" id="map">
      <APIProvider apiKey={'AIzaSyA77wfc96Sdd0PrhM2EqfLVekaaQen6mFU'}>
        <GoogleMap center={position} zoom={15} disableDefaultUI={true} styles={MAP_STYLE}>
          {locations.map(location => (
            <Marker
              key={location._id}
              position={location.googleMaps}
              onClick={() => setActiveMapLocation(location)}
            />
          ))}
        </GoogleMap>
      </APIProvider>
    </div>
  );
};
