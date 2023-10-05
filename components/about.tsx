'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">I am Full Stack Web Developer</span> with
        a background in{' '}
        <span className="font-medium">Microbiology and Immunology.</span> My
        transition from Microbiology to Software Development has been a
        fascinating one. I have delved into{' '}
        <span className="font-medium">
          JavaScript, Ruby, and mastered Ruby on Rails, React, and Next.js.
        </span>
      </p>
      <p>
        With a blend of scientific curiosity and a love for technology, I bring
        a unique perspective to each project. I am dedicated to creating
        innovative, user-friendly applications that make a real impact. Let's{' '}
        <span className="font-medium">collaborate </span> and craft something
        extraordinary together!
      </p>
    </motion.section>
  );
}
