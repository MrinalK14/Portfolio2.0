import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, User, Code, Briefcase, FolderKanban, Award, Mail } from "lucide-react";

interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

interface FloatingDockProps {
  items: FloatingDockItem[];
  className?: string;
  mobileClassName?: string;
  onClick?: (item: FloatingDockItem) => void;
}

export const FloatingDock = ({
  items,
  className,
  mobileClassName,
  onClick,
}: FloatingDockProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center z-50 pointer-events-none px-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={cn(
          "mb-5 pointer-events-auto inline-flex",
          mobileClassName,
          className
        )}
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 px-3 py-2 rounded-2xl flex items-center gap-2.5 shadow-2xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 rounded-lg text-white text-xs font-medium shadow-lg backdrop-blur-sm border border-white/10"
                >
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45 border-r border-b border-white/10"></div>
                  {item.title}
                </motion.div>
              )}
              <motion.div
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                whileTap={{ scale: 0.92 }}
                className={`relative w-11 h-11 flex items-center justify-center rounded-full ${
                  hoveredIndex === idx ? "bg-white/10 shadow-lg" : ""
                } transition-all duration-200 cursor-pointer`}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  if (onClick) onClick(item);
                }}
              >
                <a
                  href={item.href}
                  className="w-6 h-6 flex items-center justify-center"
                  onClick={(e) => {
                    if (!item.href || item.onClick) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.icon}
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
