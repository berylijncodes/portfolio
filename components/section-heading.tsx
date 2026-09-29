import React from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={clsx(
        "text-3xl font-medium text-heading mb-8",
        className ?? "text-center",
      )}
    >
      {children}
    </h2>
  );
}
