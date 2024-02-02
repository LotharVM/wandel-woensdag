'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { useHandleCloseLocationlRoute } from '@/hooks/useHandleCloseLocationlRoute';
import { layoutIdPrefixAtom } from '@/store/grid';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import React from 'react';
import CloseIcon from '../../../public/close.svg';
import Image from 'next/image';

interface LocationImageProps {
  image: any;
}

export const LocationImage = ({ image }: LocationImageProps) => {
  const layoutIdPrefix = useAtomValue(layoutIdPrefixAtom);
  const { handleGoBack } = useHandleCloseLocationlRoute();

  return (
    <motion.div
      id={image.asset._id}
      layoutId={`${layoutIdPrefix}_${image.asset._id}`}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
      className={clsx('aspect-[3/4] h-full w-full overflow-hidden rounded-lg')}
    >
      <div className="h-full max-h-[calc(100vh-32px)]">
        <button
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black"
          onClick={handleGoBack}
        >
          <img src={CloseIcon.src} />
        </button>
        <Image
          className={clsx('aspect-[3/4] h-full w-full object-cover')}
          width={'600'}
          height={'800'}
          src={image.asset.url + '?h=1600'}
          alt={image.asset._id}
          placeholder="blur"
          blurDataURL={image.asset.metadata.lqip}
          priority
          unoptimized
        />
      </div>
    </motion.div>
  );
};
