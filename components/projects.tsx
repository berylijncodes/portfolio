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
    <section className="group bg-slate-1S00 max-w-[50rem] border border-black/5 overflow-hidden mb-4 sm:mb-8 last:mb-0 hover:bg-slate-200 transition">
      <div className="flex group-even:flex-row-reverse">
        <div className="flex flex-col py-4 px-5 sm:pl-6 sm:pr-2 sm:pt-10 group-odd:ml-4 group-even:pr-4 sm:max-w-[50%]">
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
            className="h-[16.25rem] w-[28.25rem] rounded-t-lg shadow-2xl mt-4 object-top group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition"
          />
        </div>
      </div>
    </section>
  );
}
