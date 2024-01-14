'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
  const pathname = usePathname();
  const isLocationDetailPage = pathname.startsWith('/locatie');
  const isMapPage = pathname.startsWith('/map');

  return (
    <motion.div
      className="sticky top-4 flex h-[calc(100dvh-32px)] flex-1 justify-center pr-4"
      animate={{
        opacity: isLocationDetailPage ? 0 : 1,
        scale: isLocationDetailPage ? 0.975 : 1,
      }}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
    >
      <motion.div className="flex h-full w-full flex-col justify-between text-center">
        <div>
          <h1 className="text-[8.5vw] uppercase leading-none tracking-tight">
            wandel
            <span className="absolute bottom-0 left-[50%] -translate-x-1/2">Woensdag</span>
          </h1>
          <p className="text-md mx-auto text-pretty uppercase leading-tight md:max-w-[32vw] xl:text-lg xl:leading-tight">
            Vijf kritische, doch rechtvaardige wandelaars met een onstilbare dorst naar een straffe
            bak koffie in amsterdam
          </p>
          <p className="text-md absolute bottom-[9vw] left-0 mx-auto flex w-full justify-center gap-4 text-balance text-center uppercase leading-tight xl:text-lg">
            <span>Lees</span>
            <span>ons</span>
            <span>manifest</span>
          </p>
          <ActiveMapLocationOrLogo />
        </div>
        <div className="text-md absolute left-0 right-0 top-0 flex h-full w-full items-center p-4 uppercase xl:text-lg">
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