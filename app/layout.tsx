import Header from '@/components/header';
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import ActiveSectionContext from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${jetbrainsMono.className} box-border bg-canvas relative text-fg pt-32 sm:pt-24 overflow-x-hidden`}
      >
        <ActiveSectionContext>
          <Header />
          {children}
          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#11161C',
                color: '#C9D1D9',
                border: '1px solid #21262D',
                borderRadius: '3px',
                fontFamily: 'var(--font-jetbrains-mono)',
              },
            }}
          />
        </ActiveSectionContext>
      </body>
    </html>
  );
}
