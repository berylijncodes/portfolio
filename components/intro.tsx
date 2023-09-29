'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/berylportrait.jpg"
              alt="Beryl potrait"
              width={192}
              height={192}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl text-slate-950 font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm </span>
        <span className="font-bold italic">Beryl. </span>A{' '}
        <span className="font-bold">full-stack developer </span> passionate
        about crafting dynamic, user-friendly applications. Proficient in{' '}
        <span className="font-bold italic">Ruby on Rails, React, </span> with an
        eye for <span className="font-bold italic"> design, </span>I create
        seamless digital experiences that leave a{' '}
        <span className="italic">positive impact!</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          staggerChildren: 0.5,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition"
        >
          Contact me{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/berylcv.pdf"
          download={true}
          className="bg-white text-slate-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download CV{' '}
          <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/beryl-ilenwabor"
          target="_blank"
          className="bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-[1.15] transition border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/berylijncodes"
          target="_blank"
          className="bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-[1.15] transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
