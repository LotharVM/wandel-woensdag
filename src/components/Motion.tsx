'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  className?: string;
  rest: any;
}

export const Motion: FC<MotionProps> = ({ children, rest }) => {
  return <motion.div {...rest}>{children}</motion.div>;
};
