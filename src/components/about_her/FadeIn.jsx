import { useEffect, useRef, useState } from "react";

export const useFadeIn = (delay = 0) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return {
    ref,
    className: isVisible ? "fade-in-visible" : "fade-in-hidden",
  };
};
