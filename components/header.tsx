"use client";

import React from "react";
import { motion } from "framer-motion";
import { sections } from "@/lib/data";
import Link from "next/link";
import cslx from "clsx";
import { useActiveSectionContext } from "@/context/activeSectionContext"

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[44rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {sections.map((section) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={section.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={cslx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  { "text-gray-950": activeSection === section.name }
                )}
                href={section.hash}
                onClick={() => {
                  setActiveSection(section.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {section.name}
                {section.name === activeSection && (
                  <motion.span className="bg-green-300 rounded-full absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};


export default Header;
