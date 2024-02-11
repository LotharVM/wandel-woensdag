'use client';

import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { ANIMATION_DEFAULT } from '@/constants/animations';
import { ActiveMapLocationOrLogo } from '../ActiveMapLocationOrLogo';

interface HomepageBrandProps {
  locationsAmount: number;
}

const NAV = [
  {
    title: 'Lijst',
    href: '/',
  },
  {
    title: 'Map',
    href: '/map',
  },
];

export const HomepageBrand = ({ locationsAmount }: HomepageBrandProps) => {
  const [screenHeight, setScreenHeight] = useState(1000);
  const y = useMotionValue(0);
  const pathname = usePathname();
  const isLocationDetailPage = pathname.startsWith('/locatie');
  const filter = useTransform(y, [0, screenHeight], ['blur(0px)', 'blur(8px)']);
  const opacity = useTransform(y, [screenHeight / 2, screenHeight], [1, 0]);

  useEffect(() => {
    const homeElement = document.getElementById('home');
    const isMobile = window.innerWidth < 480;
    if (!homeElement || !isMobile) return;

    setScreenHeight(window.innerHeight);

    const setMotionValue = (e: Event) => {
      const scrollTop = (e.target as HTMLElement).scrollTop;
      y.set(scrollTop);
    };

    homeElement.addEventListener('scroll', setMotionValue);

    return () => homeElement.removeEventListener('scroll', setMotionValue);
  }, []);

  return (
    <motion.div
      style={{ filter, opacity }}
      className="flex h-full justify-center px-3 md:flex-1 md:px-0 md:pr-4"
      animate={{
        opacity: isLocationDetailPage ? 0 : 1,
        scale: isLocationDetailPage ? 0.975 : 1,
      }}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
    >
      <motion.div className="relative flex w-full flex-col justify-between text-center md:h-full">
        <div className="flex flex-col">
          <h1 className="overflow-hidden text-[17vw] uppercase leading-none tracking-tight md:text-[9vw]">
            <span className="block md:-mt-4">wandel</span>
            <span className="absolute bottom-0 left-[50%] -translate-x-1/2 md:-bottom-5">
              Woensdag
            </span>
          </h1>
          <p className="md:order-0 text-md order-1 mx-auto text-pretty uppercase leading-tight md:max-w-[32vw] xl:text-lg xl:leading-tight">
            Vijf kritische, doch rechtvaardige wandelaars met een onstilbare dorst naar een straffe
            bak koffie in amsterdam
          </p>
          <p className="text-md bottom-[18vw] left-0 order-1 mx-auto mt-3 flex w-full justify-center gap-4 text-balance text-center font-bold uppercase leading-tight md:absolute md:bottom-[9vw] md:mt-0 md:font-normal xl:text-lg">
            <span>Lees</span>
            <span>ons</span>
            <span>manifest</span>
          </p>
          <ActiveMapLocationOrLogo />
        </div>
        <div className="text-md absolute left-0 right-0 top-0 hidden h-full uppercase md:flex md:items-center xl:text-lg">
          <div className="flex w-full justify-between">
            <div className="flex">
              {NAV.map(link => {
                const isActive = link.href === pathname;
                return (
                  <div className="relative px-3 py-1.5" key={link.title}>
                    <Link href={link.href}>{link.title}</Link>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border border-black bg-transparent"
                        layoutId="navBorder"
                        transition={{ delay: 0.25 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="flex gap-4">
              (<span>{locationsAmount}</span>)<span>koffiezaken</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
