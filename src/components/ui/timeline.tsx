import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  content: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem = ({ title, subtitle, date, content, isLast = false }: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className={cn(
        "relative flex items-start gap-6 pb-12 group transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
    >
      {/* Timeline line */}
      <div 
        className={cn(
          "absolute top-0 left-[11px] h-full w-[3px] bg-gradient-to-b from-primary/50 via-primary to-primary/20 group-last:hidden"
        )}
      />
      
      {/* Timeline dot */}
      <div 
        className={cn(
          "relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-background flex items-center justify-center",
          "border-2 border-primary shadow-[0_0_12px_rgba(var(--primary),0.4)]"
        )}
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      </div>
      
      {/* Content card */}
      <div 
        className={cn(
          "flex-1 glass-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30",
          "border border-transparent",
          "before:absolute before:top-3 before:left-[22px] before:w-4 before:h-2 before:bg-gradient-to-r before:from-primary/80 before:to-transparent"
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground/90">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <span className="mt-2 sm:mt-0 text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
            {date}
          </span>
        </div>
        <div className="text-sm text-foreground/80 prose-headings:text-foreground prose-headings:font-medium prose-ul:space-y-1">
          {content}
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: Array<TimelineItemProps>;
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="mt-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
