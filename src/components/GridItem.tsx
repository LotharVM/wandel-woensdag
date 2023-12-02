'use client';

import React, { FC } from 'react';

import { MotionImage } from './MotionImage';
import Link from 'next/link';
import { Location } from '@/interfaces/Location';
import { useAtom } from 'jotai';
import { activeGridItemAtom } from '@/store/grid';
import { MotionWrapper } from './MotionWrapper';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

export interface GridItemProps extends Location {
  isBigger?: boolean;
}

export const GridItem: FC<GridItemProps> = ({ title, image, slug, isBigger }) => {
  const [activeGridItem, setActiveGridItem] = useAtom(activeGridItemAtom);
  // const pathname = usePathname();
  // const isLocationDetailPage = pathname.startsWith('/locatie');

  return (
    <div className="relative mb-4">
      <Link
        href={`/locatie/${slug.current}`}
        scroll={false}
        onClick={() => setActiveGridItem(image.asset._id)}
      >
        {/* {isLocationDetailPage && <div className={clsx(isBigger && 'aspect-[4/6]')} />} */}
        {image.asset && (
          <MotionImage
            asset={image.asset}
            isActive={activeGridItem === image.asset._id}
            className={clsx(isBigger && 'aspect-[4/6]')}
          />
        )}
        <div className="absolute bottom-0 mt-auto p-4">
          <MotionWrapper>
            <h2 className="text-xl uppercase text-white">{title}</h2>
          </MotionWrapper>
        </div>
      </Link>
    </div>
  );
};
