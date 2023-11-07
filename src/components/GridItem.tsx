'use client';

import React, { FC, useState } from 'react';

import { MotionImage } from './MotionImage';
import Link from 'next/link';
import { Animate } from './Animate';
import { motion } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';
import { activeGridItemAtom } from '@/store/grid';
import { MotionWrapper } from './MotionWrapper';

export interface GridItemProps {
  _id: string;
  intro: string;
  title: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

export const GridItem: FC<GridItemProps> = ({ title, image, slug }) => {
  const [activeGridItem, setActiveGridItem] = useAtom(activeGridItemAtom);

  return (
    <div className="nth-of-type(4) div:first-child aspect-w-4.25/5 relative mb-4">
      <Link
        href={`/locatie/${slug.current}`}
        scroll={false}
        onClick={() => setActiveGridItem(image.asset._id)}
      >
        {image.asset && (
          <MotionImage asset={image.asset} isActive={activeGridItem === image.asset._id} />
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
