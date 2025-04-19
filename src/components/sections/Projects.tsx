import { useState } from "react";
import { 
  Cpu, 
  Users, 
  ShoppingCart, 
  Lock, 
  FileText, 
  Folder, 
  FolderOpen, 
  Code, 
  ExternalLink, 
  Github,
  Calendar,
  Tag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: JSX.Element;
  gradientColor: string;
  date: string;
  type: string;
  repoUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [gridView, setGridView] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'details'>('grid');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const projects: Project[] = [
    {
      id: "hrms",
      title: "HRMS System with ATS",
      description: "Designed and developed an end-to-end HRMS system to streamline recruitment and employee management.",
      techStack: ["React.js", "Node.js", "MongoDB", "ATS"],
      icon: <Users className="h-5 w-5" />,
      gradientColor: "bg-blue-500/10",
      date: "2023-05",
      type: "Web Application",
      repoUrl: "https://github.com/MrinalK14/hrms-system"
    },
    {
      id: "offer",
      title: "Offer Letter Updation System",
      description: "Automated offer letter generation for HR teams, reducing manual effort and improving accuracy.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
      icon: <FileText className="h-5 w-5" />,
      gradientColor: "bg-green-500/10",
      date: "2023-03",
      type: "Web Application",
      repoUrl: "https://github.com/MrinalK14/offer-letter-system"
    },
    {
      id: "auth",
      title: "Three-Step Authentication System",
      description: "Integrated biometric security with fingerprint, facial recognition, and password/PIN for advanced authentication.",
      techStack: ["Python", "OpenCV", "Machine Learning", "Flask"],
      icon: <Lock className="h-5 w-5" />,
      gradientColor: "bg-purple-500/10",
      date: "2022-11",
      type: "ML Application",
      repoUrl: "https://github.com/MrinalK14/three-step-auth"
    },
    {
      id: "maintenance",
      title: "Predictive Maintenance System",
      description: "Developed a system to forecast equipment failures, improving operational efficiency for manufacturing clients.",
      techStack: ["Python", "Machine Learning", "IoT", "Data Analytics"],
      icon: <Cpu className="h-5 w-5" />,
      gradientColor: "bg-amber-500/10",
      date: "2022-08",
      type: "ML Application",
      repoUrl: "https://github.com/MrinalK14/predictive-maintenance"
    },
    {
      id: "chatbot",
      title: "AI-Powered E-Commerce Chatbot",
      description: "Created an AI chatbot to enhance customer experience and automate support for online retail platforms.",
      techStack: ["React.js", "Node.js", "MongoDB", "NLP"],
      icon: <ShoppingCart className="h-5 w-5" />,
      gradientColor: "bg-pink-500/10",
      date: "2023-01",
      type: "Web Application",
      repoUrl: "https://github.com/MrinalK14/ecommerce-chatbot"
    },
  ];

  const projectColors: Record<string, string> = {
    "Web Application": "text-blue-400",
    "Security System": "text-purple-400",
    "ML Application": "text-amber-400",
    "AI Solution": "text-pink-400"
  };

  const sortedProjects = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredProjects = sortedProjects
    .filter(project => {
      // Filter by category if one is selected
      if (activeCategory && project.type !== activeCategory) {
        return false;
      }
      
      // Filter by search query if one exists
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.techStack.some(tech => tech.toLowerCase().includes(query))
        );
      }
      
      return true;
    });

  return (
    <div className="w-full h-full flex flex-col bg-[#0A0A0A] text-gray-200 overflow-hidden">
      {/* Finder header */}
      <div className="bg-[#161616] border-b border-gray-800 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Folder className="h-5 w-5 text-blue-400" />
          <span className="font-medium">Projects</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex border border-gray-700 rounded-md overflow-hidden">
            <button 
              className={`px-2 py-1 ${viewMode === 'grid' ? 'bg-gray-700' : 'bg-transparent'} hover:bg-gray-700/50 transition-colors`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <button 
              className={`px-2 py-1 ${viewMode === 'details' ? 'bg-gray-700' : 'bg-transparent'} hover:bg-gray-700/50 transition-colors`}
              onClick={() => setViewMode('details')}
              aria-label="Details view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="bg-[#1E1E1E] border border-gray-700 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-40"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-1 h-full overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 border-r border-gray-800 bg-[#0F0F0F] p-3 hidden md:block">
          <div className="mb-6">
            <h3 className="text-xs font-medium text-gray-400 uppercase mb-2 px-3">Favorites</h3>
            <button 
              className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 ${!activeCategory ? 'bg-[#1E1E1E]' : 'hover:bg-[#1E1E1E]'} text-sm transition-colors`}
              onClick={() => setActiveCategory(null)}
            >
              <FolderOpen className="h-4 w-4 text-blue-400" />
              <span>All Projects</span>
            </button>
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-400 uppercase mb-2 px-3">Categories</h3>
            <div className="space-y-1">
              {['Web Application', 'ML Application'].map(type => (
                <button 
                  key={type}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 ${activeCategory === type ? 'bg-[#1E1E1E]' : 'hover:bg-[#1E1E1E]'} text-sm transition-colors`}
                  onClick={() => setActiveCategory(type)}
                >
                  <span className={`h-3 w-3 rounded-full ${projectColors[type].replace('text', 'bg')}`}></span>
                  <span>{type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            {viewMode === 'grid' && (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {filteredProjects.map(project => (
                  <motion.div 
                    key={project.id}
                    whileHover={{ y: -5 }}
                    className={`${project.gradientColor} border border-gray-800 rounded-lg p-4 cursor-pointer`}
      onClick={() => setActiveProject(project)}
    >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-md bg-[#1E1E1E]">
          {project.icon}
        </div>
                        <div>
                          <h3 className="font-medium text-white">{project.title}</h3>
                          <span className={`text-xs ${projectColors[project.type]}`}>{project.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-0.5 text-xs bg-[#161616] rounded-full">{tech}</span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-0.5 text-xs bg-[#161616] rounded-full">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-400">Click for details</div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors"
                            onClick={e => e.stopPropagation()}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {viewMode === 'details' && (
              <motion.div 
                key="details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="border border-gray-800 rounded-lg overflow-hidden bg-[#0F0F0F] hover:bg-[#151515] transition-colors cursor-pointer"
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="p-5 flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-md ${project.gradientColor}`}>
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-white text-lg">{project.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs bg-[#1E1E1E] rounded-full flex items-center gap-1">
                              <Tag className="h-3 w-3" />
                {tech}
              </span>
            ))}
                        </div>
                      </div>
                      <div className="w-full md:w-48 p-5 border-t md:border-t-0 md:border-l border-gray-800 bg-[#0A0A0A] flex flex-row md:flex-col justify-between md:justify-start gap-4">
                        <div>
                          <h4 className="text-xs font-medium text-gray-400 uppercase mb-2">Links</h4>
                          <div className="space-y-2">
                            {project.liveUrl && (
                              <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                                onClick={e => e.stopPropagation()}
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span>Live Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                        <button className="mt-auto text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          View details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
        
      {/* Project details modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#161616] border border-gray-700 rounded-lg w-full max-w-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${activeProject.gradientColor}`}>
                  {activeProject.icon}
                  </div>
                  <h3 className="font-medium text-xl">{activeProject.title}</h3>
              </div>
              <button
                  className="p-1 rounded-full hover:bg-gray-700 transition-colors"
                onClick={() => setActiveProject(null)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${projectColors[activeProject.type]}`}>{activeProject.type}</span>
                </div>
                
                <h4 className="text-lg font-medium mb-2">Description</h4>
                <p className="text-gray-300 mb-6">{activeProject.description}</p>
                
                <h4 className="text-lg font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-sm bg-[#1E1E1E] rounded-full">{tech}</span>
                ))}
              </div>
                
                <div className="flex gap-3 mt-6">
                  {activeProject.liveUrl && (
                    <a 
                      href={activeProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
            </div>
          </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status bar */}
      <div className="bg-[#161616] border-t border-gray-800 p-1.5 text-xs text-gray-400 flex justify-between">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="rounded-full h-2 w-2 bg-green-500"></span>
            {projects.length} Projects
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>Last updated: {new Date(sortedProjects[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
