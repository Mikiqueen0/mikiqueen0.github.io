'use client';

import { TextReveal, ToolDisplay } from '@/component/index';

interface ToolDisplayProps {
  title: string;
  year: string;
  subject: string;
  body: string;
  tools: string[];
  image: string;
  githubLink: string,
}

export default function ProjectCard({ title, year, subject, body, tools, image, githubLink }: ToolDisplayProps) {
  return (
    <div className="w-full h-full">
      <TextReveal duration={500}>
      <div className="rounded-xl w-full max-md:w-full h-full py-6 px-7 max-sm:px-6 flex flex-col shadow-[0px_3px_9px_0px_rgba(1,_2,_28,_0.6)] bg-[rgba(2,_3,_41,_0.2)]">
        {/* Project Name */}
        <div className="min-h-max w-full overflow-hidden rounded-xl">
          <img src={image} alt="image" className="h-full w-full object-contain rounded-xl" />
        </div>
        <div className="w-full flex gap-2 items-center mt-4 mb-1">
          <p className="font-semibold text-lg xl:text-xl">
            {title}
          </p>
          {/* <div className="w-full h-[0.1rem] bg-slate-500"></div> */}
          <p className="text-sm xl:text-base font-medium text-slate-400">
            ({year})
          </p>
        </div>
        <div className="h-full w-full flex flex-col gap-4">
          {/* Project Details */}
          <div className="h-full flex flex-col justify-between gap-2">
            <p className="font-normal text-sm xl:text-base italic text-slate-400 opacity-100">
              {subject}
            </p>
            <p className="h-full text-slate-200 text-sm xl:text-base font-light leading-6">
              {body}
            </p>
            {/* Project Stack */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <ToolDisplay key={tool} name={tool}/>
              ))}
            </div>
            
          </div>
        </div>
      </div>
      </TextReveal>
    </div>
  )
};