import React from "react";
import SectionHeader from "./sectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./project"

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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

