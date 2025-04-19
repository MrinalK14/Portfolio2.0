import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export interface HoverEffectProps {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export function HoverEffect({ items, className }: HoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("relative", className)}>
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item, idx) => (
          <div
            key={item.title}
            className={cn(
              "relative group block p-2 w-full max-w-md transition-all duration-200",
              idx % 2 === 0 
                ? "transform -translate-y-4 md:-translate-y-8" 
                : "transform translate-y-4 md:translate-y-8"
            )}
            style={{ 
              zIndex: hoveredIndex === idx ? 10 : 1 
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-primary/10 dark:bg-primary/20 block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex items-start gap-4">
                {item.icon && (
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {item.icon}
                  </div>
                )}
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 h-full w-full glass-card backdrop-blur-sm border border-primary/10 transition-transform duration-300 group-hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className={cn("text-xl font-semibold mb-2", className)}>{children}</h3>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
} 