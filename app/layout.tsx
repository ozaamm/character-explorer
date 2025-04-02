import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marvel Rivals Character Explorer',
  description: 'Explore characters from Marvel Rivals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div className="header-container">
            <h1 className="header-title">
              <Link href="/" className="header-link">Marvel Rivals Character Explorer</Link>
            </h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}