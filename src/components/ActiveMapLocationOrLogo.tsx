'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ActiveMapLocationAtom } from '@/store/grid';
import { useAtom } from 'jotai';
import WWLogo from '../../public/ww-logo.png';
import { motion } from 'framer-motion';

import { CardLocation } from './cards/CardLocation';
import { useOnClickOutside } from 'usehooks-ts';

interface ActiveMapLocationOrLogoProps {}

export const ActiveMapLocationOrLogo = ({}: ActiveMapLocationOrLogoProps) => {
  const [activeMapLocation, setActiveMapLocation] = useAtom(ActiveMapLocationAtom);
  const ref = useRef(null);

  const handleClickOutside = (e: any) => {
    const mapEl = document.getElementById('map');
    if (mapEl?.contains(e.target)) return;
    setActiveMapLocation(null);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref}>
      {activeMapLocation && (
        <div className="absolute left-1/2 top-1/2 z-10 aspect-[3/4] max-w-sm -translate-x-1/2 -translate-y-1/2">
          <CardLocation location={activeMapLocation} />
        </div>
      )}
      {!activeMapLocation && (
        <motion.div
          key="logo"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Image
            className="mx-auto my-[7.5vh] w-3/5 object-contain brightness-50 md:absolute md:left-1/2 md:top-1/2 md:h-1/3 md:w-auto md:-translate-x-1/2 md:-translate-y-1/2"
            src={WWLogo}
            alt="Wandel Woensdag"
          />
        </motion.div>
      )}
    </div>
  );
};
