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
  const isLocation = pathname.startsWith('/locatie');

  return (
    <motion.div
      layoutScroll
      className={clsx((isHome || isMap) && 'flex [&>*]:flex-shrink-0', 'relative')}
      initial={{ x: isMap ? 'calc(-50vw)' : 0 }}
      animate={{ x: isMap ? 'calc(-50vw)' : 0 }}
      transition={{
        ...ANIMATION_DEFAULT,
        // delay: isLocation ? 0.1 : 0,
        duration: 0.65,
      }}
    >
      {children}
    </motion.div>
  );
};
