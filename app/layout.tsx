import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevOps Lab - Testing Ground',
  description: 'A space-themed environment for practicing and testing DevOps workflows',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0F1C] min-h-screen`}>
        <div className="container mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-5 md:px-16">
          {children}
        </div>
      </body>
    </html>
  );
}