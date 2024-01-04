'use client';

import React, { FC, MouseEvent } from 'react';

import Link from 'next/link';
import { Location } from '@/interfaces/Location';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useSetAtom } from 'jotai';
import { scrollTopAtom } from '@/store/grid';
import { useRouter } from 'next/navigation';
import { ANIMATION_DEFAULT } from '@/constants/animations';
import { motion } from 'framer-motion';
import { MotionImage } from '../MotionImage';

export interface CardLocationProps {
  location: Location;
  className?: string;
}

export const CardLocation: FC<CardLocationProps> = ({ location, className }) => {
  const router = useRouter();
  const { title, image, slug } = location;
  const setScrollTop = useSetAtom(scrollTopAtom);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const scrollDiv = document.querySelector('#home');

    if (scrollDiv) {
      setScrollTop(scrollDiv.scrollTop);
      router.push(`/locatie/${slug.current}`);
    }
  };

  return (
    <div className="relative mb-4">
      <Link href={`/locatie/${slug.current}`} scroll={false} onClick={handleClick}>
        {image.asset && (
          <MotionImage asset={image.asset} isActive={false} />
          // <motion.div layoutId={`map_image_${image.asset._id}`} transition={ANIMATION_DEFAULT}>
          //   <Image
          //     className={clsx('aspect-[3/4] h-full w-full object-cover', className)}
          //     width={'600'}
          //     height={'800'}
          //     src={image.asset.url}
          //     alt={image.asset._id}
          //   />
          // </motion.div>
        )}
        <div className="absolute bottom-0 mt-auto p-4">
          <h2 className="text-xl uppercase text-white">{title}</h2>
        </div>
      </Link>
    </div>
  );
};
