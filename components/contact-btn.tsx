import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function ContactBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className="group flex justify-center gap-2 items-center h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all hover:bg-slate-950 disabled:bg-opacity-65 focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
