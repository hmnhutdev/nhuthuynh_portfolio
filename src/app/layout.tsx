

import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Huynh Minh Nhut | Portfolio',
  description: 'Fullstack Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
