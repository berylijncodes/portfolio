import Header from '@/components/header';
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
      <body
        className={
          '${inter.className} box-border bg-gray-50 relative text-gray-950 h-[5000px] pt-28 sm:pt-36 overflow-x-hidden'
        }
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
