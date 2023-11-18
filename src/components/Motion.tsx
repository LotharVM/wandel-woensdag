'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  className?: string;
}

export const Motion: FC<MotionProps> = ({ children, className }) => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <motion.div
      className={className}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={ANIMATION_DEFAULT}
    >
      {children}
    </motion.div>
  );
};
