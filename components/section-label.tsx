import React from 'react';

type SectionLabelProps = {
  children: React.ReactNode;
};

// Small monospace tag shown above a section heading, e.g. "// 01_about.md"
export default function SectionLabel({ children }: SectionLabelProps) {
  return <p className="text-sm text-accent mb-2">{children}</p>;
}
