import Providers from '@/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Store',
  description: 'A simple store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        style={{
          background: 'linear-gradient(360deg, #211F20 0%, #44403F 100%)',
        }}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Script
          src='https://telegram.org/js/telegram-web-app.js?56'
          id='tg-bot'
          strategy='beforeInteractive'
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
