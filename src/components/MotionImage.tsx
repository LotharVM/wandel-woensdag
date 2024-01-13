'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { GridItemProps } from './GridItem';
import { ANIMATION_DEFAULT } from '@/constants/animations';
import { clsx } from 'clsx';
import { LAYOUT_ID_PREFIX } from '@/constants/layoutIds';

interface MotionImageProps {
  asset: GridItemProps['image']['asset'];
  isActive?: boolean;
  className?: string;
}

export const MotionImage = ({ asset, isActive, className }: MotionImageProps) => {
  const variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      id={`${LAYOUT_ID_PREFIX.DEFAULT}_${asset._id}`}
      layoutId={`${LAYOUT_ID_PREFIX.DEFAULT}_${asset._id}`}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
      variants={isActive ? {} : variants}
      exit="initial"
      initial="initial"
      animate="animate"
      className={clsx('aspect-[3/4] h-full w-full', className)}
    >
      <div className="max-h-[calc(100vh-32px)] overflow-hidden">
        <Image
          className={clsx('aspect-[3/4] h-full w-full object-cover', className)}
          width={'600'}
          height={'800'}
          src={asset.url}
          alt={asset._id}
        />
      </div>
    </motion.div>
  );
};
