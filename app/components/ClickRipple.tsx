"use client";

import { useEffect, useRef } from "react";

export default function GlobalRipple() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const ripple = document.createElement("span");
      ripple.className =
        "absolute rounded-full pointer-events-none animate-ripple bg-gradient-ripple";

      const size = 120;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - size / 2}px`;
      ripple.style.top = `${e.clientY - size / 2}px`;

      container.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[9999]"
    />
  );
}
