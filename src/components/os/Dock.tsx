import { useState } from "react";
import { 
  User, 
  FolderKanban, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Mail, 
  Terminal
} from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { motion } from "framer-motion";

interface DockProps {
  onAppClick: (appId: string) => void;
  activeApp: string | null;
}

const Dock = ({ onAppClick, activeApp }: DockProps) => {
  const dockItems = [
    { 
      title: "About", 
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <User className="h-5 w-5 text-neutral-300" />
          {activeApp === "about" && (
            <motion.div 
              layoutId="active-indicator"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full"
            />
          )}
        </div>
      ),
      onClick: () => onAppClick("about") 
    },
    { 
      title: "Skills", 
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <Code2 className="h-5 w-5 text-neutral-300" />
          {activeApp === "skills" && (
            <motion.div 
              layoutId="active-indicator"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-green-400 rounded-full"
            />
          )}
        </div>
      ),
      onClick: () => onAppClick("skills") 
    },
    { 
      title: "Experience", 
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <Briefcase className="h-5 w-5 text-neutral-300" />
          {activeApp === "experience" && (
            <motion.div 
              layoutId="active-indicator"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full"
            />
          )}
        </div>
      ),
      onClick: () => onAppClick("experience") 
    },
    { 
      title: "Projects", 
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <FolderKanban className="h-5 w-5 text-neutral-300" />
          {activeApp === "projects" && (
            <motion.div 
              layoutId="active-indicator"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full"
            />
          )}
        </div>
      ),
      onClick: () => onAppClick("projects") 
    },
    { 
      title: "Certifications", 
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <GraduationCap className="h-5 w-5 text-neutral-300" />
          {activeApp === "certifications" && (
            <motion.div 
              layoutId="active-indicator"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-red-400 rounded-full"
            />
          )}
        </div>
      ),
      onClick: () => onAppClick("certifications") 
    },
    { 
      title: "Contact", 
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <Mail className="h-5 w-5 text-neutral-300" />
          {activeApp === "contact" && (
            <motion.div 
              layoutId="active-indicator"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          )}
        </div>
      ),
      onClick: () => onAppClick("contact") 
    },
    { 
      title: "Terminal", 
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
          <Terminal className="h-5 w-5 text-neutral-300" />
          {activeApp === "terminal" && (
            <motion.div 
              layoutId="active-indicator"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          )}
        </div>
      ),
      onClick: () => onAppClick("terminal") 
    },
  ];

  return (
    <FloatingDock 
      items={dockItems}
      className="mb-5" 
      onClick={(item) => {
        if (item.onClick) item.onClick();
      }} 
    />
  );
};

export default Dock; 