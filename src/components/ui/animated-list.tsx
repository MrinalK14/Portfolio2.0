
import { useRef, useState, useEffect, Fragment } from "react";

interface AnimatedListProps {
  items: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

const AnimatedList = ({
  items,
  staggerDelay = 0.05,
  className = "",
}: AnimatedListProps) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(items.length).fill(false)
  );
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let newVisibleItems = [...visibleItems];
          
          // Stagger the animation of items
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * (staggerDelay * 1000));
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [items.length, staggerDelay, visibleItems]);

  return (
    <ul ref={listRef} className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`glass-card p-4 transform transition-all duration-500 ${
            visibleItems[index]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: `${index * staggerDelay}s`,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default AnimatedList;
