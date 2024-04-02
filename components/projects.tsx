"use client";

import React, { useEffect } from "react";
import SectionHeader from "./sectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./project"
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

