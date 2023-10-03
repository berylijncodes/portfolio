'use client';

import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { motion, useScroll } from 'framer-motion';

export default function Experience() {
  const { ref: sectionRef } = useSectionInView('Experience');
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start end', 'center center'],
  });
  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      {experiencesData.map((item, index) => (
        <div ref={divRef} key={index} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-8 top-0 w-[4px] h-full bg-blue-900 origin-top"
          />
          <ul className="w-full h-full flex flex-col items-start justify-between ml-4">
            <li className="first:mt-0 last:mb-0 mx-auto w-[60%]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175, type: 'spring', stiffness: 100 }}
              >
                <h3 className="font-semibold capitalize text-2xl w-full">
                  {item.title}{' '}
                  <span className="text-blue-900">@{item.company}</span>
                </h3>
                <span className="capitalize font-medium text-black/40">
                  {item.date} | {item.location}
                </span>
                <p className="font-medium w-full mb-6">{item.description}</p>
              </motion.div>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}
