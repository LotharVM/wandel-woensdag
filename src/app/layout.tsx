import './global.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { Animate } from '@/components/Animate';
import { ReactNode } from 'react';
import { MotionHome } from '@/components/MotionHome';

interface LayoutProps {
  children: ReactNode;
  parallel: ReactNode;
}

export default async function RootLayout({ children, parallel }: LayoutProps) {
  return (
    <html lang="nl">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`bg-primary text-black ${inter.className}`}>
        {/* <div className="overflow-hidden"> */}
        {/* <Animate>{children}</Animate> */}
        {/* <Animate> */}
        <MotionHome>
          {children}
          {parallel}
        </MotionHome>
        {/* </Animate> */}
        {/* </div> */}
      </body>
    </html>
  );
}
