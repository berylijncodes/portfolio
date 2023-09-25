import Image from 'next/image';
import Intro from '@/components/intro';
import About from '@/components/about';
import SectionDivider from '@/components/section-divider';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  );
}
