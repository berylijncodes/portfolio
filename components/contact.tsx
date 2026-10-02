'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/section-heading';
import SectionLabel from '@/components/section-label';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/send-email';
import ContactBtn from './contact-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [formData, setFormData] = useState({
    name: '',
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
      className="mb-20 w-full max-w-4xl scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-10 sm:grid-cols-[1fr_1.1fr] sm:items-start">
        <div>
          <SectionLabel>{'// 05_contact.sh'}</SectionLabel>
          <SectionHeading className="text-left">
            $ contact --connect
          </SectionHeading>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            My inbox is always open — whether you have a question, a project
            in mind, or just want to say hi.
          </p>
          <a
            href="mailto:berylijn@gmail.com"
            className="mt-6 inline-block rounded border border-line px-4 py-2 text-sm text-fg transition hover:border-fg/40"
          >
            berylijn@gmail.com
          </a>
        </div>

        <div className="overflow-hidden rounded border border-line bg-card">
          <div
            aria-hidden="true"
            className="flex items-center gap-1.5 border-b border-line px-3 py-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-1.5 text-xs text-muted">new_message.sh</span>
          </div>

          <form
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }
              toast.success('Email sent successfully!');
              setFormData({ name: '', senderEmail: '', message: '' });
            }}
            className="flex flex-col gap-4 p-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs text-accent"
              >
                {'$ name'}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="your name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded border border-line bg-canvas px-3 py-2 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="senderEmail"
                className="mb-1.5 block text-xs text-accent"
              >
                {'$ email'}
              </label>
              <input
                id="senderEmail"
                name="senderEmail"
                type="email"
                placeholder="you@example.com"
                required
                maxLength={500}
                value={formData.senderEmail}
                onChange={handleInputChange}
                className="w-full rounded border border-line bg-canvas px-3 py-2 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs text-accent"
              >
                {'$ message'}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="what's on your mind?"
                required
                maxLength={5000}
                value={formData.message}
                onChange={handleInputChange}
                className="h-32 w-full rounded border border-line bg-canvas px-3 py-2 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <ContactBtn />
          </form>
        </div>
      </div>
    </motion.section>
  );
}
