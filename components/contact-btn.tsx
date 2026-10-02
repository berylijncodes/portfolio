import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function ContactBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className="group mt-1 flex h-11 items-center justify-center gap-2 rounded border border-accent bg-accent px-6 text-sm font-medium text-canvas transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
    >
      {pending ? (
        <>
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-canvas border-b-transparent"
          />
          <span className="sr-only">Sending…</span>
        </>
      ) : (
        <>
          send_message()
          <FaPaperPlane
            aria-hidden="true"
            className="text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  );
}
