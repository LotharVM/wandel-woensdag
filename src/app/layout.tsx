import './global.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { ReactNode } from 'react';
import { queryAllLocations } from '@/api/queryAllLocations';
import { Homepage } from '@/components/pages/Homepage';
import { ScrollHandlers } from '@/components/ScrollHandlers';

interface LayoutProps {
  children: ReactNode;
  parallel: ReactNode;
  modal: ReactNode;
}

export default async function RootLayout({ children, parallel, modal }: LayoutProps) {
  const locations = await queryAllLocations();

  return (
    <html lang="nl">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`min-h-screen bg-primary text-black ${inter.className}`}>
        <main className="relative flex [&>*]:flex-shrink-0">
          <Homepage locations={locations} />
          {children}
          {parallel}
        </main>
        <ScrollHandlers />
        {modal}
      </body>
    </html>
  );
}
