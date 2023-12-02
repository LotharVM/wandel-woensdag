'use client';

import React, { FC, useRef } from 'react';
import Image from 'next/image';
import { ActiveMapLocationAtom } from '@/store/grid';
import { useAtom, useAtomValue } from 'jotai';
import WWLogo from '../../public/ww-logo.png';
import { AnimatePresence, motion } from 'framer-motion';

import { CardLocation } from './cards/CardLocation';
import { useOnClickOutside } from 'usehooks-ts';
import { GridItem } from './GridItem';

interface ActiveMapLocationOrLogoProps {}

export const ActiveMapLocationOrLogo: FC<ActiveMapLocationOrLogoProps> = ({}) => {
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
      <AnimatePresence>
        {activeMapLocation && (
          <motion.div
            key={activeMapLocation._id}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute left-1/2 top-1/2 z-10 aspect-[3/4] max-w-sm -translate-x-1/2 -translate-y-1/2">
              {/* <CardLocation location={activeMapLocation} /> */}
              <GridItem {...activeMapLocation} isBigger={false} />
            </div>
          </motion.div>
        )}
        {!activeMapLocation && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              className="absolute left-1/2 top-1/2 h-1/3 -translate-x-1/2 -translate-y-1/2 object-contain brightness-50"
              src={WWLogo}
              alt="Wandel Woensdag"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
