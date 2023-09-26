'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';

type projectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: projectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="group mb-4 sm:mb-8 last:mb-0"
    >
      <section className="flex group-even:flex-row-reverse bg-slate-1S00 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden hover:bg-slate-200 transition">
        <div className="flex flex-col py-4 px-5 sm:pl-6 sm:pr-2 sm:pt-10 group-odd:ml-4 group-even:ml-4 sm:max-w-[50%]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
          <ul className="flex flex-wrap mt-4 pb-6 sm:mt-auto gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src={imageUrl}
            alt="My projects"
            quality={95}
            className="h-[16.25rem] w-[28.25rem] rounded-t-lg shadow-2xl mt-4 object-top group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition"
          />
        </div>
      </section>
    </motion.div>
  );
}
