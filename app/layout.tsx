import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Beryl | Portfolio',
  description:
    'Full-stack Web Developer with expertise in Ruby, Rails, React, JavaScript and TypeScript. Passionate about blending creativity and technology to deliver exceptional web experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
