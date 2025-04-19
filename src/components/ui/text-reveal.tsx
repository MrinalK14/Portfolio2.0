
import { useRef, useEffect, useState } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

const TextReveal = ({ children, className = "" }: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "" : "opacity-0"}`}
      style={{
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default TextReveal;
