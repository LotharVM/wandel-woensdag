'use client';

import React, { MouseEvent } from 'react';

import Link from 'next/link';
import { Location } from '@/interfaces/Location';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { ANIMATION_DEFAULT } from '@/constants/animations';
import { motion } from 'framer-motion';
import { LAYOUT_ID_PREFIX } from '@/constants/layoutIds';
import { layoutIdPrefixAtom } from '@/store/grid';

export interface CardLocationProps {
  location: Location;
  className?: string;
}

export const CardLocation = ({ location, className }: CardLocationProps) => {
  const router = useRouter();
  const { title, image, slug } = location;
  const setLayoutIdPrefix = useSetAtom(layoutIdPrefixAtom);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    setLayoutIdPrefix(LAYOUT_ID_PREFIX.MAP);
    router.push(`/locatie/${slug.current}`);
  };

  return (
    <div className="relative mb-4">
      <Link href={`/locatie/${slug.current}`} scroll={false} onClick={handleClick}>
        {image.asset && (
          <motion.div
            key={`${LAYOUT_ID_PREFIX.MAP}_${image.asset._id}`}
            layoutId={`${LAYOUT_ID_PREFIX.MAP}_${image.asset._id}`}
            transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
          >
            <Image
              className={clsx('aspect-[3/4] h-full w-full object-cover', className)}
              width={'600'}
              height={'800'}
              src={image.asset.url}
              alt={image.asset._id}
            />
          </motion.div>
        )}
        <div className="absolute bottom-0 mt-auto p-4">
          <h2 className="text-xl uppercase text-white">{title}</h2>
        </div>
      </Link>
    </div>
  );
};
