'use client';

import { useState, useEffect, useRef } from "react";
import { ToolDisplay, TextReveal, ProjectCard, ToolList } from "@/component/index";

function useIsVisible(ref: React.RefObject<HTMLElement | null>, setActiveSection: React.Dispatch<React.SetStateAction<string>>) {
  const [threshold, setThreshold] = useState(0.5);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const updateThreshold = () => {
      setThreshold(mediaQuery.matches ? 0.3 : 0.5);
    };

    updateThreshold();
    mediaQuery.addEventListener('change', updateThreshold);

    return () => {
      mediaQuery.removeEventListener('change', updateThreshold);
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActiveSection(ref.current?.id || ""); // Set active section ID when it intersects
      }
    }, {
      threshold,
    });

    observer.observe(ref?.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);
}

export default function Home() {
  const mailtoHref = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mikiqueen2004@gmail.com";
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] rounded-full bg-slate-200 transition ease transform duration-300`;
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
  const [activeSection, setActiveSection] = useState<string>("");
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useIsVisible(homeRef, setActiveSection);
  useIsVisible(aboutRef, setActiveSection);
  useIsVisible(projectRef, setActiveSection);
  useIsVisible(contactRef, setActiveSection);

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

  // Detect screen size change
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsSmallScreen(mediaQuery.matches);
    const handleResize = (e: MediaQueryListEvent) => {
      
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };

  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      setIsHamburgerOpen(false);
    }
  }, [isSmallScreen]);

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
      {/* Nav bar */}
      <div className="fixed top-0 max-h-[4.5rem] w-full flex py-5 px-[5vw] items-center justify-between z-50 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <p className="h-fit w-fit font-black text-3xl max-sm:text-2xl">
            TEEKAMON
          </p>
          {/* Contact Icons */}
          <div className="flex justify-center items-center gap-4 my-6">
            <a href="https://github.com/Mikiqueen0" target="_blank">
              <svg className="text-white opacity-60 hover:opacity-100 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={mailtoHref} target="_blank">
              <svg className="text-white opacity-60 hover:opacity-100 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24">
                <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div className="h-full w-fit flex gap-[4vw] max-sm:hidden items-center text-md text-nowrap">
          <button 
            onClick={() => {
              homeRef.current?.scrollIntoView();
            }}
            className={`hover:text-[rgb(105,225,213)] transform transition-color duration-300 ${activeSection === "home" ? "text-[rgb(105,225,213)]" : ""}`}>
              Home
          </button>
          <button 
            onClick={() => {
              aboutRef.current?.scrollIntoView();
            }}
            className={`hover:text-[rgb(105,225,213)] transform transition-color duration-300 ${activeSection === "about" ? "text-[rgb(105,225,213)]" : ""}`}>
              About
          </button>
          <button 
            onClick={() => {
              projectRef.current?.scrollIntoView();
            }}
            className={`hover:text-[rgb(105,225,213)] transform transition-color duration-300 ${activeSection === "project" ? "text-[rgb(105,225,213)]" : ""}`}>
              Projects
          </button>
          <button 
            onClick={() => {
              contactRef.current?.scrollIntoView();
            }}
            className={`hover:text-[rgb(105,225,213)] transform transition-color duration-300 ${activeSection === "contact" ? "text-[rgb(105,225,213)]" : ""}`}>
              Contact
          </button>
        </div>
        <div className="h-fit w-fit hidden max-sm:flex">
          <button
            className="flex flex-col h-10 w-10 rounded justify-center items-center group"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isHamburgerOpen
                  ? "rotate-45 translate-y-2"
                  : ""
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isHamburgerOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isHamburgerOpen
                  ? "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          </button>
        </div>

        {/* Hamburger panel */}
        <div
          className={`absolute top-[4.5rem] left-0 w-full flex flex-col items-start text-md  shadow-[0px_5px_7px_0px_rgba(1,_2,_28,_0.6)] bg-[rgb(25,25,62)] ${isHamburgerOpen ? 'opacity-100 scale-y-100 duration-500' : 'opacity-0 scale-y-0 duration-200'} transform origin-top transition-all ease-in-out sm:hidden`}
        >
          <button 
            onClick={() => {
              homeRef.current?.scrollIntoView();
              setIsHamburgerOpen(false);
            }}
            className={`w-full h-full py-5 px-8 active:bg-black active:bg-opacity-20 active:text-[rgb(105,225,213)] transition-all duration-50 ${activeSection === "home" ? "text-[rgb(105,225,213)]" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => {
              aboutRef.current?.scrollIntoView();
              setIsHamburgerOpen(false);
            }}
            className={`w-full h-full py-5 px-8 active:bg-black active:bg-opacity-20 active:text-[rgb(105,225,213)] transition-all duration-50 ${activeSection === "about" ? "text-[rgb(105,225,213)]" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => {
              projectRef.current?.scrollIntoView();
              setIsHamburgerOpen(false);
            }}
            className={`w-full h-full py-5 px-8 active:bg-black active:bg-opacity-20 active:text-[rgb(105,225,213)] transition-all duration-50 ${activeSection === "project" ? "text-[rgb(105,225,213)]" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              contactRef.current?.scrollIntoView();
              setIsHamburgerOpen(false);
            }}
            className={`w-full h-full py-5 px-8 active:bg-black active:bg-opacity-20 active:text-[rgb(105,225,213)] transition-all duration-50 ${activeSection === "contact" ? "text-[rgb(105,225,213)]" : ""}`}
          >
            Contact
          </button>
        </div>
      </div>

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
