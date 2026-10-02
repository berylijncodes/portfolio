'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { Project as ProjectType, ProjectStatus } from '@/lib/types';
import { slugify } from '@/lib/utils';

const statusStyles: Record<ProjectStatus, string> = {
  building: 'border-accent text-accent',
  shipped: 'border-fg/40 text-fg',
  redesigning: 'border-line text-muted',
};

export default function Project({
  title,
  description,
  status,
  tags,
  flagship,
}: ProjectType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx(
        'rounded border bg-card p-5',
        status === 'redesigning' ? 'border-dashed border-line' : 'border-line'
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <span
          className={clsx(
            'rounded border px-2 py-0.5 text-xs',
            statusStyles[status]
          )}
        >
          status: {status}
        </span>
        {flagship && <span className="text-xs text-muted">flagship</span>}
      </div>

      <h3 className="mb-2 font-semibold text-heading">{slugify(title)}</h3>

      <p
        className={clsx(
          'text-sm leading-relaxed',
          status === 'redesigning' ? 'text-muted' : 'text-fg/80'
        )}
      >
        {description}
      </p>

      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-line px-2 py-0.5 text-xs text-muted"
            >
              {slugify(tag)}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
