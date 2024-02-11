'use client';

import { ANIMATION_DEFAULT } from '@/constants/animations';
import { scrollHorizontalAtom } from '@/store/grid';
import { animate } from 'framer-motion';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const ScrollHandlers = () => {
  const [scrollValue, setScrollValue] = useAtom(scrollHorizontalAtom);
  const pathname = usePathname();
  const isHome = pathname == '/';
  const isLocationDetailPage = pathname.startsWith('/locatie');
  const isMap = pathname === '/map';

  useEffect(() => {
    const isMobile = document.body.clientWidth < 480;

    if (isLocationDetailPage) {
      setScrollValue(val => val);
    } else if (isMap) {
      const distance = isMobile ? '-100vw' : '-50vw';
      // @ts-ignore
      setScrollValue(distance);
    } else if (isHome) {
      setScrollValue(0);
    }
  }, [pathname]);

  useEffect(() => {
    const scrollEl = document.querySelector('main') as any;
    // @ts-ignore
    animate(scrollEl, { x: scrollValue }, { ...ANIMATION_DEFAULT, duration: 0.65 });
  }, [scrollValue]);

  return null;
};
