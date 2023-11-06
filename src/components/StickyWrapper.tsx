'use client';

import React, { FC, ReactNode, useEffect, useState } from 'react';

interface StickyWrapperProps {
  className: string;
  children: ReactNode;
}

export const StickyWrapper: FC<StickyWrapperProps> = ({ children, className }) => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0 }), 500);
    setTimeout(() => setIsSticky(false), 1000);
  }, []);

  return <div className={`${isSticky ? 'sticky top-0' : ''} ${className}`}>{children}</div>;
};
