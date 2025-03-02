'use client';

import { useState, useEffect, useRef } from 'react';

interface ToolDisplayProps {
  homeRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  projectRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

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

export default function Navbar({ homeRef, aboutRef, projectRef, contactRef }: ToolDisplayProps) {
  const mailtoHref = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mikiqueen2004@gmail.com";
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] rounded-full bg-slate-200 transition ease transform duration-300`;

  const [activeSection, setActiveSection] = useState<string>("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useIsVisible(homeRef, setActiveSection);
  useIsVisible(aboutRef, setActiveSection);
  useIsVisible(projectRef, setActiveSection);
  useIsVisible(contactRef, setActiveSection);

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
    <div>
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
    </div>
  )
};