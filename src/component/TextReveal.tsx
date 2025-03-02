'use client';

import React, { useRef, useState, useEffect } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  duration: number;
}

function useIsVisible(ref: React.RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, {
      threshold: 0,
    });

    observer.observe(ref?.current);

    return () => {
      observer.disconnect();
    };
  }, [ref])

  return isIntersecting;
}

export default function TextReveal({ children, duration }: TextRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref);
  
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(16px)',
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease-in-out`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
};