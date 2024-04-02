"use client";

import React, { useEffect } from "react";
import SectionHeader from "./sectionHeader";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[52rem] text-center text-green-800 leading-8 sm:mb-5 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3 ">
        Ever since a young age, I have been fascinated with everything tech. It
        started with messing about with computers and now to building full
        fledged apps. I graduated in June 2021 with a degree in{" "}
        <span className="font-medium">Computer Engineering</span> and developed
        a strong interest in providing solutions to problems. Throughout my
        University and career, I have built projects that involve{" "}
        <span className="italic">
          Deep learning, SaaS, AWS, Restful APIs, Springboot, React
        </span>{" "}
        and much <span className="font-medium">more</span>.
      </p>
      <p className="mb-3">
        I am currently looking for full-time{" "}
        <span className="font-medium">Junior</span> opportunities in{" "}
        <span className="font-medium">Software Engineering</span> or{" "}
        <span className="font-medium">Product Management</span>.
      </p>
      <p>
        When I am <span className="italic">not working</span> or building
        projects, I like to play and watch football (Real Madrid fan btw). I am
        also an active gamer of AAA titles and I also occasionally play guitar
        as well.
      </p>
    </motion.section>
  );
};

export default About;
