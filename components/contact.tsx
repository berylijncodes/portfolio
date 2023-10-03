'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/send-email';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Get in touch</SectionHeading>

      <p className="text-slate-700">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you! Contact me via{' '}
        <a className="underline" href="mailto:berylijn@gmail.com">
          berylijn@gmail.com
        </a>
        {''} or through this form.
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={5000}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <button className="group flex justify-center gap-2 items-center h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all">
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 hover:bg-slate-950 focus:scale-110 hover:scale-110 active:scale-105" />
        </button>
      </form>
    </motion.section>
  );
}
