import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500">
      &copy;{new Date().getFullYear()}. All rights reserved. | Made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>{' '}
      by <span className="italic font-medium">Beryl</span>
    </footer>
  );
}
