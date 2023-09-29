import Image from 'next/image';
import Intro from '@/components/intro';
import About from '@/components/about';
import SectionDivider from '@/components/section-divider';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
    </main>
  );
}
