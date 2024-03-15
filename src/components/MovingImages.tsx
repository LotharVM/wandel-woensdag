'use client';

import React from 'react';
import { Variant, Variants, motion } from 'framer-motion';

const IMAGES = [
  'https://ca.slack-edge.com/T02D9S2HP-U02CS2ELGHH-c052bd739bbb-192',
  'https://ca.slack-edge.com/T02D9S2HP-U02MEGPS4AG-bb44c34b4305-192',
  'https://ca.slack-edge.com/T02D9S2HP-U01J3RKLC12-615da7644956-192',
  'https://ca.slack-edge.com/T02D9S2HP-U05068ZTBKR-69d80ae1f353-192',
  'https://ca.slack-edge.com/T02D9S2HP-UFD43R7V3-1c3e5e97a970-512',
];

export const MovingImages = () => {
  const generateVariants = () => {
    const endX = 50 * Math.cos(Math.random() * 2 * Math.PI);
    const endY = 50 * Math.sin(Math.random() * 2 * Math.PI);

    return {
      move: () => ({
        x: [0, endX, 0], // Starts and ends at the same X position
        y: [0, endY, 0], // Starts and ends at the same Y position
        transition: {
          duration: 10 + 5 * Math.random(), // Random duration between 10 and 11 seconds
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      }),
    };
  };

  return (
    <div className="flex w-full flex-1 flex-wrap md:flex-nowrap md:items-center md:justify-evenly ">
      {IMAGES.map(image => {
        const variants = generateVariants() as Variants;
        return (
          <div
            className="flex aspect-square w-1/2 translate-y-6 items-center justify-center odd:-translate-y-6 md:w-full md:translate-y-16 md:odd:-translate-y-16"
            key={image}
          >
            <motion.img
              src={image}
              variants={variants}
              animate="move"
              className="aspect-square w-3/5 overflow-hidden rounded-full border-[2px] border-dashed border-white md:w-1/2"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovingImages;
