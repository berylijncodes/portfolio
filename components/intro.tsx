'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import SectionLabel from './section-label';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const goToContact = () => {
    setActiveSection('Contact');
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-3xl text-left sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <SectionLabel>$ whoami</SectionLabel>
      </motion.div>

      <motion.h1
        className="text-3xl font-bold !leading-[1.3] text-heading sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Beryl Ilenwabor —<br />
        frontend engineer, <span className="text-accent">building</span>
        <br />
        <span className="text-accent">AI agents</span>.
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-accent">{'// '}</span>React + TypeScript at TravPro
        Mobile. Background in immunology and microbiology. Currently building
        agent-powered tools on top of a frontend foundation.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#contact"
          onClick={goToContact}
          className="rounded border border-accent bg-accent px-4 py-2 text-canvas transition hover:bg-accent/90"
        >
          get_in_touch()
        </Link>

        <a
          href="/berylcv.pdf"
          download
          className="flex items-center gap-2 rounded border border-line px-4 py-2 text-fg transition hover:border-fg/40"
        >
          download_cv.pdf
          <HiDownload className="text-xs opacity-70" aria-hidden="true" />
        </a>

        <a
          href="https://github.com/berylijncodes"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-line px-4 py-2 text-fg transition hover:border-fg/40"
        >
          github <span aria-hidden="true">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/beryl-ilenwabor"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-line px-4 py-2 text-fg transition hover:border-fg/40"
        >
          linkedin <span aria-hidden="true">↗</span>
        </a>
      </motion.div>
    </section>
  );
}
