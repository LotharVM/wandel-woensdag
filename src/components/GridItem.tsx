'use client';

import React from 'react';

import Link from 'next/link';
import { Location } from '@/interfaces/Location';
import { useSetAtom } from 'jotai';
import { layoutIdPrefixAtom } from '@/store/grid';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { LAYOUT_ID_PREFIX } from '@/constants/layoutIds';
import { MotionDiv } from './Motion';
import Image from 'next/image';
import { ANIMATION_DEFAULT } from '@/constants/animations';

export interface GridItemProps extends Location {
  isBigger?: boolean;
}

export const GridItem = ({ title, image, slug, address, isBigger }: GridItemProps) => {
  const setLayoutIdPrefix = useSetAtom(layoutIdPrefixAtom);
  const { asset } = image;

  const variants = {
    initial: { scale: 0.9 },
    animate: { scale: 1 },
  };

  const handleClick = () => {
    setLayoutIdPrefix(LAYOUT_ID_PREFIX.DEFAULT);
  };

  const pathname = usePathname();
  const isLocationDetailPage = pathname.startsWith('/locatie');

  return (
    <div className="group relative">
      <Link href={`/locatie/${slug.current}`} scroll={false} onClick={handleClick}>
        {isLocationDetailPage && (
          <div className={clsx(isBigger ? 'aspect-[4/6]' : 'aspect-[3/4]')} />
        )}
        {image.asset && !isLocationDetailPage && (
          <MotionDiv
            id={`${LAYOUT_ID_PREFIX.DEFAULT}_${asset._id}`}
            layoutId={`${LAYOUT_ID_PREFIX.DEFAULT}_${asset._id}`}
            transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
            variants={variants}
            exit="initial"
            initial="initial"
            animate="animate"
            className={clsx('aspect-[3/4] h-full w-full', isBigger && 'aspect-[4/6]')}
          >
            <div className="max-h-[calc(100vh-32px)] overflow-hidden rounded-[4px]">
              <Image
                className={clsx(
                  'aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105',
                  isBigger && 'aspect-[4/6]'
                )}
                width={'600'}
                height={'800'}
                src={asset.url}
                alt={asset._id}
              />

              <div className="absolute bottom-0 left-0 h-2/5 w-full bg-opacity-50 bg-gradient-to-t from-black to-transparent opacity-50" />
              <div className="absolute bottom-0 mt-auto p-3 text-white md:p-4">
                <h2 className="text-base uppercase md:text-xl">{title}</h2>
                <p className="text-xs">{address?.split(',')[0]}</p>
              </div>
            </div>
          </MotionDiv>
        )}
      </Link>
    </div>
  );
};
