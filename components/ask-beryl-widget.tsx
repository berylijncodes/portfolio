'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsChatDotsFill, BsX } from 'react-icons/bs';

// Static sample exchanges only — no real backend yet. See the
// ask-beryl-ai-backend-plan for what a real integration would need.
const sampleExchanges = [
  {
    question: "what's beryl working on right now?",
    answer:
      "She's building an AI-agent layer into an expense tracker, and shipping frontend features at TravPro Mobile in React/TypeScript.",
  },
  {
    question: 'can I reach out to her?',
    answer:
      'Always happy to hear about interesting opportunities — feel free to reach out.',
  },
];

export default function AskBerylWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[999] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Ask Beryl"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-16 right-0 w-[min(92vw,22rem)] overflow-hidden rounded border border-line bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-line"
                />
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-line"
                />
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-line"
                />
                <span className="ml-1.5 text-xs text-muted">
                  ask_beryl.sh
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close ask Beryl chat"
                className="text-muted transition hover:text-fg"
              >
                <BsX className="text-lg" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto px-4 py-3 text-sm leading-relaxed">
              {sampleExchanges.map((exchange) => (
                <div key={exchange.question} className="mb-4 last:mb-0">
                  <p className="text-accent">{`$ ask "${exchange.question}"`}</p>
                  <p className="mt-1 border-l border-line pl-3 text-muted">
                    {exchange.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-4 py-3">
              <label htmlFor="ask-beryl-input" className="sr-only">
                Ask a question about Beryl
              </label>
              <div className="flex items-center gap-2 text-sm">
                <span aria-hidden="true" className="text-accent">
                  $
                </span>
                <input
                  id="ask-beryl-input"
                  type="text"
                  disabled
                  placeholder="ask a question about beryl... (coming soon)"
                  className="w-full bg-transparent text-fg placeholder:text-muted focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? 'Close ask Beryl chat' : 'Open ask Beryl chat'}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-accent text-canvas shadow-lg transition hover:bg-accent/90"
      >
        {open ? (
          <BsX className="text-2xl" aria-hidden="true" />
        ) : (
          <BsChatDotsFill className="text-lg" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
