'use client';

import React, { FC } from 'react';

import { MotionImage } from './MotionImage';
import Link from 'next/link';
import { Location } from '@/interfaces/Location';
import { useAtom, useSetAtom } from 'jotai';
import { activeGridItemAtom, layoutIdPrefixAtom } from '@/store/grid';
import { MotionWrapper } from './MotionWrapper';
import { clsx } from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { LAYOUT_ID_PREFIX } from '@/constants/layoutIds';

export interface GridItemProps extends Location {
  isBigger?: boolean;
}

export const GridItem = ({ title, image, slug, isBigger }: GridItemProps) => {
  const setLayoutIdPrefix = useSetAtom(layoutIdPrefixAtom);

  const handleClick = () => {
    setLayoutIdPrefix(LAYOUT_ID_PREFIX.DEFAULT);
  };

  const pathname = usePathname();
  const isLocationDetailPage = pathname.startsWith('/locatie');

  return (
    <div className="relative mb-4">
      <Link href={`/locatie/${slug.current}`} scroll={false} onClick={handleClick}>
        {isLocationDetailPage && (
          <div className={clsx(isBigger ? 'aspect-[4/6]' : 'aspect-[3/4]')} />
        )}
        {image.asset && !isLocationDetailPage && (
          <MotionImage asset={image.asset} className={clsx(isBigger && 'aspect-[4/6]')} />
        )}
        {!isLocationDetailPage && (
          <div className="absolute bottom-0 mt-auto p-4">
            <MotionWrapper>
              <h2 className="text-xl uppercase text-white">{title}</h2>
            </MotionWrapper>
          </div>
        )}
      </Link>
    </div>
  );
};
