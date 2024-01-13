'use client';

import React, { FC } from 'react';
import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';
import { MAP_STYLE } from '@/constants/map';
import { Location } from '@/interfaces/Location';
import { useAtom, useSetAtom } from 'jotai';
import { ActiveMapLocationAtom } from '@/store/grid';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ANIMATION_DEFAULT } from '@/constants/animations';

interface MapProps {
  locations: Location[];
}

export const Map: FC<MapProps> = ({ locations }) => {
  const pathname = usePathname();
  const position = { lat: 52.35901893285712, lng: 4.901848080673377 };
  const setActiveMapLocation = useSetAtom(ActiveMapLocationAtom);
  const isLocationDetailPage = pathname.startsWith('/locatie');

  return (
    <motion.div
      className="h-full w-full"
      id="map"
      animate={{
        opacity: isLocationDetailPage ? 0 : 1,
        scale: isLocationDetailPage ? 0.975 : 1,
      }}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.75, delay: !isLocationDetailPage ? 0.1 : 0 }}
    >
      <APIProvider apiKey={'AIzaSyCHopGPcYpmRLuBTwZ9qLphBxVSZp2m-cw'}>
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
    </motion.div>
  );
};
