'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
}

export const MotionWrapper: FC<MotionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={ANIMATION_DEFAULT}
    >
      {children}
    </motion.div>
  );
};
