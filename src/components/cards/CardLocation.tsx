'use client';

import React, { FC } from 'react';

import Link from 'next/link';
import { Location } from '@/interfaces/Location';
import { clsx } from 'clsx';
import Image from 'next/image';

export interface CardLocationProps {
  location: Location;
  className?: string;
}

export const CardLocation: FC<CardLocationProps> = ({ location, className }) => {
  const { title, image, slug } = location;

  return (
    <div className="relative mb-4">
      <Link href={`/locatie/${slug.current}`} scroll={false}>
        {image.asset && (
          <Image
            className={clsx('aspect-[3/4] h-full w-full object-cover', className)}
            width={'600'}
            height={'800'}
            src={image.asset.url}
            alt={image.asset._id}
          />
        )}
        <div className="absolute bottom-0 mt-auto p-4">
          <h2 className="text-xl uppercase text-white">{title}</h2>
        </div>
      </Link>
    </div>
  );
};
