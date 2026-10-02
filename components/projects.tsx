'use client';

import React from 'react';
import SectionHeading from './section-heading';
import SectionLabel from './section-label';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  const flagship = projectsData.find((project) => project.flagship);
  const rest = projectsData.filter((project) => !project.flagship);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 w-full max-w-4xl scroll-mt-28 sm:mb-40"
    >
      <SectionLabel>{'// 02_projects.md'}</SectionLabel>
      <SectionHeading className="text-left">
        Projects, old and in progress.
      </SectionHeading>

      <div className="space-y-4">
        {flagship && <Project key={flagship.title} {...flagship} />}

        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
