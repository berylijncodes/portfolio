"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

const navLabels: Partial<Record<(typeof links)[number]["name"], string>> = {
  About: "./about",
  Projects: "./projects",
  Skills: "./skills",
  Experience: "./experience",
  Contact: "./contact",
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const navLinks = links.filter((link) => link.name !== "Home");
  const contactLink = links.find((link) => link.name === "Contact")!;

  const goTo = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-[999] border-b border-line bg-canvas/90 backdrop-blur-[0.5rem]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:px-6">
        <Link
          href="#home"
          onClick={() => goTo("Home")}
          className="shrink-0 font-semibold text-heading"
        >
          beryl<span className="text-accent">.dev</span>
        </Link>

        <nav
          aria-label="Section"
          className="order-3 w-full sm:order-none sm:w-auto"
        >
          <ul className="flex flex-wrap items-center justify-center gap-2 text-sm sm:justify-start">
            {navLinks.map((link) => (
              <motion.li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => goTo(link.name)}
                  className={clsx(
                    "block rounded border px-3 py-1.5 transition",
                    activeSection === link.name
                      ? "border-accent text-accent"
                      : "border-line text-muted hover:text-fg hover:border-fg/40",
                  )}
                >
                  {navLabels[link.name] ?? link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <Link
          href={contactLink.hash}
          onClick={() => goTo(contactLink.name)}
          className="shrink-0 rounded border border-accent px-3 py-1.5 text-sm text-accent transition hover:bg-accent hover:text-canvas"
        >
          $ connect
        </Link>
      </div>
    </motion.header>
  );
}
