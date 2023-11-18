'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  className?: string;
}

export const MotionHome: FC<MotionProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname == '/';
  const isMap = pathname === '/map';

  return (
    <motion.div
      className={clsx((isHome || isMap) && 'flex [&>*]:flex-shrink-0')}
      initial={{ x: 0 }}
      animate={{ x: isMap ? 'calc(-40vw)' : 0 }}
      transition={ANIMATION_DEFAULT}
    >
      {children}
    </motion.div>
  );
};
