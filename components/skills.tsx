'use client';

import React from 'react';
import SectionHeading from './section-heading';
import SectionLabel from './section-label';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { slugify } from '@/lib/utils';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 w-full max-w-4xl scroll-mt-28 sm:mb-40"
    >
      <SectionLabel>{'// 03_skills.json'}</SectionLabel>
      <SectionHeading className="text-left">
        What I build with.
      </SectionHeading>
      <ul className="flex flex-wrap gap-2 text-sm">
        {skillsData.map((skill, index) => {
          const highlighted = slugify(skill) === 'ai-agents';
          return (
            <motion.li
              key={skill}
              className={clsx(
                'rounded border px-3 py-1.5',
                highlighted
                  ? 'border-accent bg-accent text-canvas'
                  : 'border-line text-muted'
              )}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {slugify(skill)}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
