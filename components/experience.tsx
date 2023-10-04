'use client';

import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';
import { motion, useScroll } from 'framer-motion';
import ExperienceIcon from './experience-icon';

export default function Experience() {
  const { ref: sectionRef } = useSectionInView('Experience');
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start end', 'start end'],
  });
  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      {experiencesData.map((item, index) => (
        <div
          ref={divRef}
          key={index}
          className="w-full sm:w-[75%] mx-auto relative"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 origin-top w-[4px] h-full bg-blue-900 dark:bg-blue-500"
          />
          <ul className="w-full h-full flex flex-col items-start justify-between ml-4">
            <li className="first:mt-0 last:mb-0 mx-auto w-[60%]">
              <ExperienceIcon reference={divRef} />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175, type: 'spring', stiffness: 100 }}
              >
                <h3 className="font-semibold capitalize text-2xl w-full">
                  {item.title}{' '}
                  <span className="text-blue-900 dark:text-blue-500">
                    @{item.company}
                  </span>
                </h3>
                <span className="capitalize font-medium text-black/40">
                  {item.date} | {item.location}
                </span>
                <p className="font-medium w-full mb-6 dark:text-white/75">
                  {item.description}
                </p>
              </motion.div>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}
