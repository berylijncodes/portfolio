import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 border-t border-line px-4 pt-6 text-center text-sm text-muted">
      &copy; {new Date().getFullYear()} Beryl Ilenwabor. All rights reserved.
    </footer>
  );
}
