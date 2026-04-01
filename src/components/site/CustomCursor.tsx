"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Direct DOM manipulation for high-performance tracking
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isActionable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer");

      setIsHovering(!!isActionable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[99999] hidden sm:block"
      style={{ transition: 'transform 0.1s cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      {/* Outer Ring: The Lens */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovering
            ? "h-14 w-14 border-gold-leaf opacity-100"
            : "h-8 w-8 border-gold-leaf/30 opacity-60"
          }`}
        style={{ borderWidth: '0.5px' }}
      />

      {/* Inner Dot: The Precision Point */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-leaf transition-all duration-500 ease-out ${isHovering
            ? "h-1 w-1 opacity-100"
            : "h-1.5 w-1.5 opacity-40"
          }`}
      />
    </div>
  );
}