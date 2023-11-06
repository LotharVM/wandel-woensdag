import './global.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import serverContext from '@/utils/serverContext';
import { Animate } from '@/components/Animate';
import { css } from 'styled-system/css';

export const [getPageSlug, setPageSlug] = serverContext('/');

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`bg-primary text-black ${inter.className}`}>
        <div>
          <Animate>{children}</Animate>
        </div>
      </body>
    </html>
  );
}
