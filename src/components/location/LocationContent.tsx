'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { FC } from 'react';

interface LocationContentProps {
  data: any;
}

export const LocationContent = ({ data }: LocationContentProps) => {
  const { taste, vibe, design, temperature, service } = data;

  const ratings = [
    {
      title: 'Smaak',
      score: taste,
    },
    {
      title: 'Vibe',
      score: vibe,
    },
    {
      title: 'Design',
      score: design,
    },
    {
      title: 'Service',
      score: service,
    },
    {
      title: 'Temperatuur',
      score: temperature,
    },
  ];

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.975,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
      >
        <div className="px-3 py-10 md:px-6 md:pt-0">
          <h1 className="overflow-hidden text-ellipsis text-6xl uppercase leading-none md:text-[120px]">
            {data.title}
          </h1>
          <div className="mt-12 flex flex-col items-start gap-12 md:mt-[15vh] md:flex-row md:gap-6">
            <div className="w-full md:w-0 md:flex-1">
              <h2 className="mb-2 text-xs font-bold uppercase">Review</h2>
              <p className="whitespace-pre-wrap text-justify text-lg">{data.intro}</p>
            </div>
            <div className="w-full md:w-0 md:flex-1">
              <h2 className="mb-2 text-xs font-bold uppercase">Beoordeling</h2>
              <div className="flex flex-col gap-3">
                {ratings?.map(rating => {
                  if (!rating.score) return;
                  return (
                    <h3 key={rating.title} className="flex justify-between text-4xl">
                      <span>{rating.title}</span>
                      <span>{rating.score}</span>
                    </h3>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
