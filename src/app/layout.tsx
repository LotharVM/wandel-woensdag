import './global.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { Animate } from '@/components/Animate';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`bg-primary text-black ${inter.className}`}>
        <div>
          <Animate>{children}</Animate>
          {/* {children} */}
        </div>
      </body>
    </html>
  );
}
