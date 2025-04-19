import { useState, useEffect } from "react";
import { Github, Linkedin, FileText, Code2, ExternalLink, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    // Start the sequence after a delay
    setTimeout(() => {
      setShowContent(true);
    }, 800);
  }, []);

  // Animation variants for icon buttons
  const iconButtonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.15, y: -8 },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col items-center justify-center py-20 px-4 pt-10 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side: Name and description */}
          <div className={`transition-all duration-1000 transform ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex flex-col space-y-2">
              <div className="font-mono text-sm md:text-base text-muted-foreground">
                <span className="text-primary">const</span> <span className="text-blue-400">developer</span> = {'{'}
              </div>
              
              <div className="ml-4 md:ml-6">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-primary">name:</span> <span className="text-gradient">'Mrinal Kapoor'</span><span className="text-primary">,</span>
                </div>
                
                <div className="mt-4 font-code text-base md:text-lg">
                  <span className="text-primary">title:</span> <span className="text-muted-foreground">'AI Engineer | Full-Stack Developer'</span><span className="text-primary">,</span>
                </div>
                
                <div className="mt-2 font-code text-base md:text-lg">
                  <span className="text-primary">focus:</span> <span className="text-muted-foreground">'Problem Solver & Innovator'</span>
                </div>
              </div>
              
              <div className="font-mono text-sm md:text-base text-muted-foreground">
                {'}'}
              </div>
            </div>
            
            {/* OS-style social buttons */}
            <div className="mt-10 flex items-center justify-center md:justify-start">
              <div className="flex gap-4 bg-[#0A0A0A]/60 backdrop-blur-sm px-5 py-3 rounded-2xl border border-[#222]/50">
                <motion.div
                  variants={iconButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  animate={hoveredButton === 'github' ? 'hover' : 'rest'}
                  className="relative"
                  onMouseEnter={() => setHoveredButton('github')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <a 
                    href="https://github.com/MrinalK14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0F0F0F] border border-[#222] shadow-xl p-3 rounded-xl flex items-center justify-center transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </a>
                  {hoveredButton === 'github' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-[#0F0F0F] border border-[#222] text-white py-1 px-2.5 rounded whitespace-nowrap flex items-center gap-1.5"
                    >
                      GitHub
                      <ExternalLink className="h-3 w-3" />
                    </motion.div>
                  )}
                  <motion.div 
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredButton === 'github' ? 1 : 0 }}
                  />
                </motion.div>

                <motion.div
                  variants={iconButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  animate={hoveredButton === 'linkedin' ? 'hover' : 'rest'}
                  className="relative"
                  onMouseEnter={() => setHoveredButton('linkedin')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <a 
                    href="https://linkedin.com/in/mrinal-kapoor-462794230" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0F0F0F] border border-[#222] shadow-xl p-3 rounded-xl flex items-center justify-center transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6 text-[#0A66C2]" />
                  </a>
                  {hoveredButton === 'linkedin' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-[#0F0F0F] border border-[#222] text-white py-1 px-2.5 rounded whitespace-nowrap flex items-center gap-1.5"
                    >
                      LinkedIn
                      <ExternalLink className="h-3 w-3" />
                    </motion.div>
                  )}
                  <motion.div 
                    className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredButton === 'linkedin' ? 1 : 0 }}
                  />
                </motion.div>

                <motion.div
                  variants={iconButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  animate={hoveredButton === 'resume' ? 'hover' : 'rest'}
                  className="relative"
                  onMouseEnter={() => setHoveredButton('resume')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <a 
                    href="https://drive.google.com/file/d/1EKknlh-ZtOyzevriM3NOoplCapwyyRwl/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0F0F0F] border border-[#222] shadow-xl p-3 rounded-xl flex items-center justify-center transition-all"
                    aria-label="View Resume"
                  >
                    <FileText className="h-6 w-6 text-blue-400" />
                  </a>
                  {hoveredButton === 'resume' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-[#0F0F0F] border border-[#222] text-white py-1 px-2.5 rounded whitespace-nowrap flex items-center gap-1.5"
                    >
                      Resume
                      <Download className="h-3 w-3" />
                    </motion.div>
                  )}
                  <motion.div 
                    className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredButton === 'resume' ? 1 : 0 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Right side: 3D Character Image */}
          <div className="w-full mx-auto md:mx-0 md:ml-auto pt-6 md:pt-0">
            <div className={`transition-all duration-1000 transform ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <div className="character-container w-full h-full flex justify-center items-center">
                <div className="relative">
                  <img 
                    src="/images/developer-character.jpeg" 
                    alt="3D Developer Character" 
                    className="h-auto w-auto max-h-[480px] object-contain rounded-lg transition-all duration-500 hover:scale-105"
                  />
                  
                  {/* Ready to code label */}
                  <div className="absolute top-5 right-5 transform rotate-12">
                    <div className="bg-primary text-white px-5 py-3 rounded-lg shadow-lg border-2 border-white flex items-center gap-2 animate-bounce">
                      <Code2 className="h-5 w-5" />
                      <span className="font-display font-bold tracking-wide text-base">READY TO CODE!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
