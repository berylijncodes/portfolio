import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
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

type projectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: projectProps) {
  return (
    <section className="group bg-slate-100 max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 mb-4 sm:mb-8 last:mb-0">
      <div className="flex group-even:flex-row-reverse">
        <div className="flex flex-col py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
          <ul className="flex flex-wrap mt-4 pb-6 sm:mt-auto gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src={imageUrl}
            alt="My projects"
            quality={95}
            className="h-[18.25rem] rounded-t-lg shadow-2xl mt-4 object-top"
          />
        </div>
      </div>
    </section>
  );
}
