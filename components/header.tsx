"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsList, BsX } from "react-icons/bs";

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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = links.filter((link) => link.name !== "Home");
  const contactLink = links.find((link) => link.name === "Contact")!;

  const goTo = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileNavOpen(false);
  };

  // "$ connect" does more than the plain "./contact" pill: once the
  // smooth-scroll lands on the section, it focuses the email field.
  const goToContactAndFocus = () => {
    goTo(contactLink.name);
    window.setTimeout(() => {
      document.getElementById("senderEmail")?.focus();
    }, 600);
  };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-[999] border-b border-line bg-canvas/90 backdrop-blur-[0.5rem]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="#home"
          onClick={() => goTo("Home")}
          className="shrink-0 font-semibold text-heading"
        >
          beryl<span className="text-accent">.dev</span>
        </Link>

        <nav aria-label="Section" className="hidden sm:block">
          <ul className="flex flex-wrap items-center gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.hash}>
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
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={contactLink.hash}
            onClick={goToContactAndFocus}
            className="rounded border border-accent px-3 py-1.5 text-sm text-accent transition hover:bg-accent hover:text-canvas"
          >
            $ connect
          </Link>

          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded border border-line text-fg sm:hidden"
          >
            {mobileNavOpen ? (
              <BsX className="text-xl" aria-hidden="true" />
            ) : (
              <BsList className="text-lg" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <nav
          id="mobile-nav"
          aria-label="Section"
          className="border-t border-line px-4 py-3 sm:hidden"
        >
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => goTo(link.name)}
                  className={clsx(
                    "block rounded border px-3 py-2 transition",
                    activeSection === link.name
                      ? "border-accent text-accent"
                      : "border-line text-muted hover:text-fg hover:border-fg/40",
                  )}
                >
                  {navLabels[link.name] ?? link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
