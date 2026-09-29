'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeading from './section-heading';
import SectionLabel from './section-label';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 w-full max-w-4xl scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr] sm:items-start">
        <div>
          <SectionLabel>{'// 01_about.md'}</SectionLabel>
          <SectionHeading className="text-left">
            From lab bench to browser console.
          </SectionHeading>
          <div className="space-y-4 font-mono text-sm leading-relaxed text-muted">
            <p>
              MSc in Immunology and Immunochemistry, BSc in Microbiology —
              both from the University of Benin, Nigeria. Spent years as a
              laboratory technologist before making the switch into software
              development in 2021 — methodical debugging turned out to be a
              transferable skill.
            </p>
            <p>
              Frontend engineer at TravPro Mobile, working in React and
              TypeScript. Previously full-stack at Firmhouse BV. Based in the
              Netherlands.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded border border-line bg-card">
          <div
            aria-hidden="true"
            className="flex items-center gap-1.5 border-b border-line px-3 py-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <Image
            src="/berylportrait.jpg"
            alt="Portrait of Beryl Ilenwabor"
            width={400}
            height={400}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
      </div>
    </motion.section>
  );
}
