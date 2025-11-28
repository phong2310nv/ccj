import type { Metadata, Viewport } from 'next';

import '@styles/global.css';
import { Inter, Poppins } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import relativeTime from 'dayjs/plugin/relativeTime';
import type { ReactNode } from 'react';

import AppThemeProvider from '@shared/provider/AppThemeProvider';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  // ... other viewport settings
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${inter.variable} ${inter.className}`}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
