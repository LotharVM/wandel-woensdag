import localFont from 'next/font/local';

export const NeueHaasDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplay-Roman.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-neuhaas',
});
