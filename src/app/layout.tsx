import './global.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { Animate } from '@/components/Animate';
import { ReactNode } from 'react';
import { MotionHome } from '@/components/MotionHome';
import { queryAllLocations } from '@/api/queryAllLocations';
import { Homepage } from '@/components/pages/Homepage';

interface LayoutProps {
  children: ReactNode;
  parallel: ReactNode;
}

export default async function RootLayout({ children, parallel }: LayoutProps) {
  const locations = await queryAllLocations();

  return (
    <html lang="nl">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`bg-primary text-black ${inter.className}`}>
        <MotionHome>
          <Homepage locations={locations} />
          {parallel}
          {children}
        </MotionHome>
      </body>
    </html>
  );
}
