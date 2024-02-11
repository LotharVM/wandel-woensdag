'use client';

import { useEffect, useState } from 'react';
import { MotionDiv } from './Motion';
import { ANIMATION_DEFAULT } from '@/constants/animations';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface MobileNavToggleProps {}

export const MobileNavToggle = ({}: MobileNavToggleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isMap = pathname === '/map';

  const items = [
    {
      title: 'Lijst',
      isActive: pathname === '/',
      href: '/',
    },
    {
      title: 'Kaart',
      isActive: isMap,
      href: '/map',
    },
  ];

  useEffect(() => {
    const homeElement = document.getElementById('home');
    const isMobile = window.innerWidth < 480;
    if (!homeElement || !isMobile) return;
    const scrollOffset = window.innerHeight;

    const setMotionValue = (e: Event) => {
      const scrollTop = (e.target as HTMLElement).scrollTop;
      setIsVisible(scrollTop > scrollOffset);
    };

    homeElement.addEventListener('scroll', setMotionValue);

    return () => homeElement.removeEventListener('scroll', setMotionValue);
  }, []);

  return (
    <MotionDiv
      animate={{ y: isVisible || isMap ? 0 : 60 }}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.5 }}
      className="pointer-events-none fixed bottom-5 left-0 z-10 flex w-full justify-center bg-transparent md:hidden"
    >
      <div className="pointer-events-auto flex overflow-hidden rounded-[10px] bg-black">
        {items.map(item => (
          <MotionDiv
            className="relative px-3 py-2 uppercase"
            animate={{ color: item.isActive ? 'black' : '#0063C8' }}
            key={item.title}
          >
            <Link href={item.href}>
              {item.isActive && (
                <MotionDiv
                  layoutId="activeItem"
                  className="absolute inset-[2px] rounded-lg bg-primary"
                />
              )}
              <div className="relative z-10">{item.title}</div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
};
