'use client';

import { useState, useEffect, useRef } from "react";
import { TextReveal, ProjectCard, ToolList, Navbar } from "@/component/index";

export default function Home() {
  const ProjectLists = [
    {
      title: "VFans",
      year: "2024",
      subject: "Web Programming II",
      body: "A social media website for Virtual YouTuber fans to connect, share content, and engage with others who share their interests.",
      tools: ["React", "Javascript", "Tailwind CSS", "MongoDB", "Supabase", "Figma"],
      image: "image.png"
    },
    {
      title: "BitCat",
      year: "2023",
      subject: "Object Oriented Programming",
      body: "A web application that connects those looking to find homes for stray cats with potential adopters. Users can post details about cats in need of adoption, and interested adopters can reach out directly to express their interest.",
      tools: ["React", "Javascript", "Tailwind CSS", "MySQL", "Firebase", "Figma"],
      image: "image.png"
    },
    {
      title: "WeAre",
      year: "2024",
      subject: "Capstone Project",
      body: "A web application social media platform for MBTI enthusiasts to connect with others who have similar interests. It features an LSVM-based classification system that analyzes English text from social media posts to identify users' MBTI personality types.",
      tools: ["React", "Javascript", "Tailwind CSS", "Node.js", "Python", "Flask", "MongoDB", "Figma"],
      image: "image.png"
    }
  ];

  const programmingLanguage = ["C#", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"];
  const librariesFrameworks = ["React", "Tailwind CSS", "Node.js", "Next.js", "Flask", "FastAPI"];
  const tools = ["Git", "GitHub", "Postman", "Firebase", "MongoDB", "PostgreSQL", "Docker", "Unity", "Figma", "Aseprite"];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-full w-full">
      {/* Background Glow Effect */}
      <div
        className="fixed top-0 left-0 w-full h-full max-md:hidden pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle ${60}vw at ${mousePosition.x}px ${mousePosition.y}px,

            rgba(66,109,219,0.1),
            rgba(0,0,0,0.1))`,
          transition: "background 0.5s ease-out",
        }}
      ></div>
      {/* Gradient Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-tl from-[rgba(5,5,23,0.43)] to-[rgba(31,33,141,0.43)] -z-10"></div>
      {/* Nav */}
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
      {/* Body */}
      <div className="relative w-full h-full flex flex-col overflow-y-hidden">
        {/* Home */}
        <div ref={homeRef} id="home" className="relative min-h-[calc(100vh)] w-full pt-[4.5rem] px-[6rem] max-sm:px-[10vw] max-xs:px-[1.5rem] flex flex-col justify-center gap-5 max-sm:gap-4">
          <TextReveal duration={500}>
          <p className="text-3xl max-sm:text-1xl max-md:text-2xl font-light">
            Hello! I'm
          </p>
          </TextReveal>
          <TextReveal duration={700}>
          <p className="text-6xl font-bold max-sm:text-3xl max-md:text-5xl">
            Teekamon Chaiwongwutthikul
          </p>
          </TextReveal>
          <TextReveal duration={900}>
          <p className="text-2xl font-light max-sm:text-lg max-md:text-xl">
            I'm a <span className="font-bold text-[rgb(105,225,213)]">Web Developer</span>
          </p>
          </TextReveal>
        </div>

        {/* About Me */}
        <div ref={aboutRef} id="about" className={`min-h-[calc(100vh)] w-full pt-[4.5rem] flex flex-col justify-center`}>
          <div className="px-[4rem] max-md:px-[6vw] my-6">
            <TextReveal duration={500}>
              <p className="xl:text-3xl w-fit text-2xl font-extrabold">
                About
              </p>
            </TextReveal>
          </div>
          <div className="w-full h-full grid grid-cols-[40%_60%] xl:grid-cols-[50%_50%] max-md:px-0 max-md:flex max-md:flex-col max-md:justify-center max-md:gap-8">
            {/* Profile Section */}
            <div className="h-fit w-full flex pl-[4rem] pr-[2rem] max-md:px-[6vw]">
              {/* Profile Details */}
              <div className="flex flex-col items-start">
                <TextReveal duration={500}>
                  <p className="text-sm font-light text-slate-300 leading-6 xl:text-base">
                    I'm a Computer Science student with experience in web development and machine learning. I've worked on projects involving both front-end and back-end development, as well as data processing and machine learning. I'm continuously learning and looking for opportunities to gain more experience and work on new projects.
                  </p>
                </TextReveal>
                <TextReveal duration={500}>
                  <button className="mt-4 pl-4 pr-3 py-2 xl:py-[0.65rem] w-fit border border-slate-200 rounded-lg flex gap-1 items-center group hover:bg-black hover:bg-opacity-30 hover:border-[rgb(105,225,213)] transition-all duration-500">
                    <p className="font-semibold text-sm max-sm:text-sm xl:text-base text-transparent bg-clip-text inline-block bg-[linear-gradient(to_right,white_49.9%,rgb(105,225,213)_50%)] bg-200% group-hover:animate-gradientIn">
                      Full Resume
                    </p>
                    <svg className="-scale-x-100 text-slate-200 group-hover:text-[rgb(105,225,213)] transform transition-color duration-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 8.4V16q0 .425-.288.713T7 17t-.712-.288T6 16V6q0-.425.288-.712T7 5h10q.425 0 .713.288T18 6t-.288.713T17 7H9.4l8.9 8.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path>
                    </svg>
                  </button>
                </TextReveal>
              </div>
            </div>

            {/* Skills Section */}
            <div className="h-fit w-full px-6 max-md:px-[6vw] flex flex-col divide-y divide-opacity-10 divide-slate-200 text-center max-md:text-sm">
              <ToolList title={"Programming Languages"} itemList={programmingLanguage} />
              <ToolList title={"Programming Languages"} itemList={librariesFrameworks} />
              <ToolList title={"Programming Languages"} itemList={tools} />
            </div>
          </div>
        </div>

        {/* Projects */}
        <div ref={projectRef} id="project" className="min-h-[calc(100vh)] w-full xl:w-[80vw] pt-[4.5rem] px-[4rem] lg:px-[6rem] max-sm:px-[3rem] max-xs:px-[1.5rem] flex flex-col justify-center first:items-start gap-8 max-sm:gap-4 md:grid lg:grid-cols-2 lg:items-start self-center">
          <div className="self-start md:col-span-2">
            <TextReveal duration={500}>
              <div className="flex items-center gap-6">
                <p className="w-fit text-2xl font-extrabold xl:text-3xl">
                  Projects
                </p>            
                <div className="h-[1px] w-full bg-slate-200 opacity-20"></div>
              </div>
            </TextReveal>
          </div>
          
          {ProjectLists.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
