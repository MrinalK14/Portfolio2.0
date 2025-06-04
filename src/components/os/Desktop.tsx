import { useState, useEffect } from "react";
import Dock from "./Dock";
import Window from "./Window";
import TopBar from "./TopBar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import { 
  User, 
  FolderKanban, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Mail, 
  Terminal 
} from "lucide-react";
import "./os.css";
import "./mobile.css";

type WindowData = {
  id: string;
  title: string;
  icon: JSX.Element;
  color: string;
  component: JSX.Element;
}

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [windowZIndexes, setWindowZIndexes] = useState<Record<string, number>>({});
  const [topZIndex, setTopZIndex] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // On mobile, prevent opening multiple windows at once to avoid overwhelming the interface
  useEffect(() => {
    if (isMobile && openWindows.length > 1) {
      // Keep only the active window open
      if (activeWindow) {
        setOpenWindows([activeWindow]);
      }
    }
  }, [isMobile, activeWindow]);

  const windows: Record<string, WindowData> = {
    about: {
      id: "about",
      title: "About Me",
      icon: <User className="h-4 w-4" />,
      color: "bg-[#161616]",
      component: <About />
    },
    skills: {
      id: "skills",
      title: "Skills & Technologies",
      icon: <Code2 className="h-4 w-4" />,
      color: "bg-[#161616]",
      component: <Skills />
    },
    experience: {
      id: "experience",
      title: "Work Experience",
      icon: <Briefcase className="h-4 w-4" />,
      color: "bg-[#161616]",
      component: <Experience />
    },
    projects: {
      id: "projects",
      title: "Projects",
      icon: <FolderKanban className="h-4 w-4" />,
      color: "bg-[#161616]",
      component: <Projects />
    },
    certifications: {
      id: "certifications",
      title: "Certifications",
      icon: <GraduationCap className="h-4 w-4" />,
      color: "bg-[#161616]",
      component: <Certifications />
    },
    terminal: {
      id: "terminal",
      title: "Terminal",
      icon: <Terminal className="h-4 w-4" />,
      color: "bg-[#161616]",
      component: (
        <div className="font-mono text-green-400 bg-black h-full p-4 rounded border border-gray-800">
          <div className="flex items-center mb-4 pb-2 border-b border-gray-800">
            <span className="text-gray-400 mr-2">~</span>
            <span className="text-blue-400">mrinal@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-purple-400 ml-1">$</span>
          </div>
          <div className="mb-2 flex">
            <span className="text-purple-400 mr-2">$</span>
            <span>whoami</span>
          </div>
          <div className="mb-4 text-gray-300">mrinal-kapoor</div>
          <div className="mb-2 flex">
            <span className="text-purple-400 mr-2">$</span>
            <span>ls -la</span>
          </div>
          <div className="mb-1 flex">
            <span className="text-blue-400 mr-2">drwxr-xr-x</span>
            <span className="text-gray-400 mr-2">2</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-gray-400 mr-2">4096</span>
            <span className="text-gray-400 mr-2">Apr 19 2024</span>
            <span>about.md</span>
          </div>
          <div className="mb-1 flex">
            <span className="text-blue-400 mr-2">drwxr-xr-x</span>
            <span className="text-gray-400 mr-2">2</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-gray-400 mr-2">4096</span>
            <span className="text-gray-400 mr-2">Apr 19 2024</span>
            <span>skills.md</span>
          </div>
          <div className="mb-1 flex">
            <span className="text-blue-400 mr-2">drwxr-xr-x</span>
            <span className="text-gray-400 mr-2">2</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-gray-400 mr-2">4096</span>
            <span className="text-gray-400 mr-2">Apr 19 2024</span>
            <span>experience.md</span>
          </div>
          <div className="mb-1 flex">
            <span className="text-blue-400 mr-2">drwxr-xr-x</span>
            <span className="text-gray-400 mr-2">2</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-gray-400 mr-2">4096</span>
            <span className="text-gray-400 mr-2">Apr 19 2024</span>
            <span>projects.md</span>
          </div>
          <div className="mb-1 flex">
            <span className="text-blue-400 mr-2">drwxr-xr-x</span>
            <span className="text-gray-400 mr-2">2</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-gray-400 mr-2">4096</span>
            <span className="text-gray-400 mr-2">Apr 19 2024</span>
            <span>certifications.md</span>
          </div>
          <div className="mb-4 flex">
            <span className="text-blue-400 mr-2">drwxr-xr-x</span>
            <span className="text-gray-400 mr-2">2</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-green-400 mr-2">mrinal</span>
            <span className="text-gray-400 mr-2">4096</span>
            <span className="text-gray-400 mr-2">Apr 19 2024</span>
            <span>contact.md</span>
          </div>
          <div className="mb-2 flex">
            <span className="text-purple-400 mr-2">$</span>
            <span>cat welcome.txt</span>
          </div>
          <div className="mb-1 text-yellow-300">Welcome to my portfolio! Feel free to explore and learn more about me.</div>
          <div className="mb-4 text-yellow-300">Click on the dock icons below to open different sections.</div>
          <div className="flex">
            <span className="text-purple-400 mr-2">$</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      )
    },
    contact: {
      id: "contact",
      title: "Contact Me",
      icon: <Mail className="h-4 w-4" />,
      color: "bg-[#161616]",
      component: <Contact />
    }
  };

  const handleAppClick = (appId: string) => {
    // If app is already open, focus it
    if (openWindows.includes(appId)) {
      bringWindowToFront(appId);
    } else {
      // On mobile, close other windows when opening a new one
      if (isMobile) {
        setOpenWindows([appId]);
      } else {
        // Desktop behavior - allow multiple windows
        setOpenWindows([...openWindows, appId]);
      }
      bringWindowToFront(appId);
    }
  };

  const bringWindowToFront = (windowId: string) => {
    setActiveWindow(windowId);
    const newZIndex = topZIndex + 1;
    setWindowZIndexes({ ...windowZIndexes, [windowId]: newZIndex });
    setTopZIndex(newZIndex);
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      {/* Top Bar */}
      <TopBar />
      
      {/* Desktop area */}
      <div className="absolute inset-0">
        {/* Hero (keeps the existing hero as desktop background) */}
        <Hero />
      </div>

      {/* Windows */}
      {openWindows.map(windowId => {
        const window = windows[windowId];
        return (
          <Window
            key={windowId}
            id={windowId}
            title={window.title}
            icon={window.icon}
            color={window.color}
            isOpen={true}
            zIndex={windowZIndexes[windowId] || 10}
            onClose={() => closeWindow(windowId)}
            onFocus={() => bringWindowToFront(windowId)}
          >
            {window.component}
          </Window>
        );
      })}

      {/* Dock */}
      <Dock onAppClick={handleAppClick} activeApp={activeWindow} />
    </div>
  );
};

export default Desktop; 