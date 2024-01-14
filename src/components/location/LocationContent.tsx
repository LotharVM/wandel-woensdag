'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { FC } from 'react';

interface LocationContentProps {
  data: any;
}

export const LocationContent = ({ data }: LocationContentProps) => {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.975,
          x: '-50px',
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
      >
        <div className="px-4 py-10 md:pt-0">
          <h1 className="overflow-hidden text-ellipsis text-6xl uppercase leading-none md:text-[120px]">
            {data.title}
          </h1>
          <Link href="/">TERUG</Link>
          <p className="text-md mt-12 whitespace-pre-wrap">{data.intro}</p>
        </div>
      </motion.div>
    </div>
  );
};
