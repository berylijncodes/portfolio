'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/send-email';
import ContactBtn from './contact-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [formData, setFormData] = useState({
    senderEmail: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      <p className="text-slate-700 dark:text-white/80">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi 👋, I'll try my best
        to get back to you! Contact me via{' '}
        <a
          className="text-blue-900 dark:text-blue-500 font-medium"
          href="mailto:berylijn@gmail.com"
        >
          berylijn@gmail.com
        </a>
        {''} or through this{' '}
        <span className="text-blue-900 dark:text-blue-500 font-medium">
          form
        </span>
        .
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
          setFormData({
            senderEmail: '',
            message: '',
          });
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={5000}
          value={formData.senderEmail}
          onChange={handleInputChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          value={formData.message}
          onChange={handleInputChange}
        />
        <ContactBtn />
      </form>
    </motion.section>
  );
}
