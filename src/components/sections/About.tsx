import { useState, useEffect } from "react";
import { 
  User, 
  MapPin, 
  GraduationCap, 
  FlaskConical, 
  Camera, 
  TerminalSquare, 
  ChevronRight,
  Menu
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("background");
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

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

  const aboutData = {
    background: {
      title: "Background",
      content: "Born and raised in Gurgaon, Haryana, I developed an early curiosity for technology, AI, and problem-solving. I completed my schooling at Blue Bells Model School, Gurgaon, excelling in academics and winning multiple awards.",
      icon: <MapPin className="h-5 w-5" />,
      color: "text-blue-400"
    },
    education: {
      title: "Education",
      content: "I earned my B.Tech in Computer Science Engineering with a specialization in AI & ML from Chandigarh University (2020-2024), building a strong foundation in AI, software development, and automation.",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "text-green-400"
    },
    research: {
      title: "Research",
      content: "My academic journey has been complemented by research in facial recognition and AI applications in security systems. I've published work at the International Conference on Smart Devices (ICSD) and continue to explore the ethical implications of AI in daily life.",
      icon: <FlaskConical className="h-5 w-5" />,
      color: "text-purple-400"
    },
    interests: {
      title: "Interests",
      content: "Beyond technology, I have a passion for photography, fitness, and public speaking. I actively contributed to my college's media team, developing visual storytelling skills that complement my technical abilities.",
      icon: <Camera className="h-5 w-5" />,
      color: "text-yellow-400"
    }
  };

  type AboutKey = keyof typeof aboutData;

  return (
    <div className="w-full h-full flex flex-col bg-[#0A0A0A] text-gray-200 font-mono">
      {/* Terminal header */}
      <div className="flex items-center mb-6 pb-2 border-b border-gray-800">
        <User className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-gray-400">about</span>
        <span className="text-gray-400 mx-1">:</span>
        <span className="text-blue-400">~/mrinal-kapoor</span>
        <span className="ml-2 text-green-400">v1.0.0</span>
      </div>

      {/* Mobile navigation toggle */}
      {isMobile && (
        <div className="mb-4">
          <button 
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="flex items-center justify-between w-full p-3 bg-[#111111] rounded-md border border-gray-800"
          >
            <div className="flex items-center">
              <span className={`mr-2 ${aboutData[activeTab as AboutKey].color}`}>
                {aboutData[activeTab as AboutKey].icon}
              </span>
              <span>{aboutData[activeTab as AboutKey].title}</span>
            </div>
            <Menu className="h-5 w-5 text-gray-400" />
          </button>
          
          {showMobileNav && (
            <div className="mt-2 bg-[#111111] rounded-md border border-gray-800 p-1">
              {Object.keys(aboutData).map((key) => {
                const { title, icon, color } = aboutData[key as AboutKey];
                return (
                  <button
                    key={key}
                    className={`w-full text-left px-3 py-2 rounded-sm flex items-center text-sm transition-colors ${
                      activeTab === key ? "bg-[#1E1E1E] text-white" : "text-gray-400 hover:bg-[#151515]"
                    }`}
                    onClick={() => {
                      setActiveTab(key);
                      setShowMobileNav(false);
                    }}
                  >
                    <span className={`mr-2 ${color}`}>{icon}</span>
                    <span>{title}</span>
                    {activeTab === key && (
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 flex-1`}>
        {/* Sidebar navigation - hidden on mobile */}
        {!isMobile && (
          <div className="w-full md:w-60 shrink-0 bg-[#111111] rounded-md border border-gray-800 overflow-hidden">
            <div className="px-3 py-2 border-b border-gray-800 font-semibold text-sm text-gray-400">
              <TerminalSquare className="h-4 w-4 inline-block mr-2" />
              about-me.sh
            </div>
            <div className="p-1">
              {Object.keys(aboutData).map((key) => {
                const { title, icon, color } = aboutData[key as AboutKey];
                return (
                  <button
                    key={key}
                    className={`w-full text-left px-3 py-2 rounded-sm flex items-center text-sm transition-colors ${
                      activeTab === key ? "bg-[#1E1E1E] text-white" : "text-gray-400 hover:bg-[#151515]"
                    }`}
                    onClick={() => setActiveTab(key)}
                  >
                    <span className={`mr-2 ${color}`}>{icon}</span>
                    <span>{title}</span>
                    {activeTab === key && (
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Content panel */}
        <div className="flex-1 bg-[#111111] rounded-md border border-gray-800 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-800 font-semibold text-sm text-gray-400 flex items-center">
            <span className={aboutData[activeTab as AboutKey].color}>
              {aboutData[activeTab as AboutKey].icon}
            </span>
            <span className="ml-2">{aboutData[activeTab as AboutKey].title}.md</span>
          </div>
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            <div className="flex items-center mb-3">
              <div className={`h-8 w-8 rounded-md flex items-center justify-center ${aboutData[activeTab as AboutKey].color} bg-opacity-10`}>
                {aboutData[activeTab as AboutKey].icon}
              </div>
              <h2 className="text-xl font-bold ml-3 font-display">{aboutData[activeTab as AboutKey].title}</h2>
            </div>
            
            <div className="terminal-output mt-4">
              <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                {activeTab === "background" && (
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-green-400 mr-2">$</span>
                      <span className="text-purple-400">cat</span>
                      <span className="ml-1">background.md</span>
                    </div>
                    <p>{aboutData.background.content}</p>
                    <div className="text-gray-500 mt-2">// Location: Gurgaon, Haryana</div>
                  </div>
                )}
                
                {activeTab === "education" && (
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-green-400 mr-2">$</span>
                      <span className="text-purple-400">cat</span>
                      <span className="ml-1">education.md</span>
                    </div>
                    <p>{aboutData.education.content}</p>
                    <div className="text-blue-400 mt-2">B.Tech in CSE (AI & ML) | 2020-2024</div>
                  </div>
                )}
                
                {activeTab === "research" && (
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-green-400 mr-2">$</span>
                      <span className="text-purple-400">cat</span>
                      <span className="ml-1">research.md</span>
                    </div>
                    <p>{aboutData.research.content}</p>
                    <div className="text-yellow-400 mt-2">Publication: International Conference on Smart Devices (ICSD)</div>
                  </div>
                )}
                
                {activeTab === "interests" && (
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-green-400 mr-2">$</span>
                      <span className="text-purple-400">cat</span>
                      <span className="ml-1">interests.md</span>
                    </div>
                    <p>{aboutData.interests.content}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Photography</span>
                      <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Fitness</span>
                      <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Public Speaking</span>
                      <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">Visual Storytelling</span>
                    </div>
                  </div>
                )}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
