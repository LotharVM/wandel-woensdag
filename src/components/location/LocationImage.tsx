'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { layoutIdPrefixAtom } from '@/store/grid';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import React from 'react';

interface LocationImageProps {
  image: any;
}

export const LocationImage = ({ image }: LocationImageProps) => {
  const layoutIdPrefix = useAtomValue(layoutIdPrefixAtom);

  return (
    <motion.div
      id={image.asset._id}
      layoutId={`${layoutIdPrefix}_${image.asset._id}`}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
      className={clsx('aspect-[3/4] h-full w-full')}
    >
      <div className="max-h-[calc(100vh-32px)] overflow-hidden">
        <Image
          className={clsx('aspect-[3/4] h-full w-full object-cover')}
          width={'600'}
          height={'800'}
          src={image.asset.url}
          alt={image.asset._id}
        />
      </div>
    </motion.div>
  );
};
