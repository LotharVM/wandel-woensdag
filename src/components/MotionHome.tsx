'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { scrollTopAtom } from '@/store/grid';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';
import React, { FC, ReactNode, useEffect } from 'react';

interface MotionProps {
  children: ReactNode;
  className?: string;
}

export const MotionHome = ({ children }: MotionProps) => {
  const pathname = usePathname();
  const isHome = pathname == '/';
  const isMap = pathname === '/map';
  const isLocation = pathname.startsWith('/locatie');

  const previousScrollTop = useAtomValue(scrollTopAtom);

  useEffect(() => {
    const scrollDiv = document.querySelector('#home');
    if (previousScrollTop && scrollDiv) {
      scrollDiv.scrollTop = previousScrollTop;
    }
  });

  return (
    <motion.div
      className={clsx((isHome || isMap) && 'flex [&>*]:flex-shrink-0', 'relative')}
      initial={{ x: isMap ? 'calc(-50vw)' : 0 }}
      animate={{ x: isMap ? 'calc(-50vw)' : 0 }}
      transition={{
        ...ANIMATION_DEFAULT,
        duration: 0.65,
      }}
    >
      {children}
    </motion.div>
  );
};
