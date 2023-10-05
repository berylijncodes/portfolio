import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500">
      &copy;{new Date().getFullYear()}. All rights reserved.{' '}
      <span className="hidden sm:inline">|Made with </span>
      <span className="hidden sm:inline-block" role="img" aria-label="love">
        ❤️ by
      </span>{' '}
      <span className="italic font-medium hidden sm:inline-block">Beryl</span>
    </footer>
  );
}
