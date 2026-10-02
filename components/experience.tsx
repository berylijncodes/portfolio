'use client';

import React from 'react';
import SectionHeading from './section-heading';
import SectionLabel from './section-label';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';
import { motion } from 'framer-motion';
import { toSnakeCase } from '@/lib/utils';
import clsx from 'clsx';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  // Data stays oldest-first in lib/data.ts; the log-style display reads
  // newest-first, so the order is flipped only here.
  const entries = [...experiencesData].reverse();

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 w-full max-w-4xl scroll-mt-28 sm:mb-40"
    >
      <SectionLabel>{'// 04_experience.log'}</SectionLabel>
      <SectionHeading className="text-left">My experience</SectionHeading>

      <ul className="space-y-6">
        {entries.map((item, index) => {
          const current = item.date.toLowerCase().includes('present');
          return (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-4 last:border-none"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={clsx(
                    'mt-2 h-2 w-2 shrink-0 rounded-full',
                    current ? 'bg-accent' : 'bg-line'
                  )}
                />
                <div>
                  <h3 className="font-medium text-heading">
                    {toSnakeCase(item.title)}{' '}
                    <span className="text-muted">@ {item.company}</span>
                  </h3>
                  <p className="text-sm text-muted">{item.location}</p>
                </div>
              </div>
              <span
                className={clsx(
                  'text-sm',
                  current ? 'text-accent' : 'text-muted'
                )}
              >
                {item.date}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
