import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronRight, Calendar, Building, ExternalLink, ArrowRight, ChevronDown, X, Minus, MapPin } from "lucide-react";

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);
  const [showAllDetails, setShowAllDetails] = useState<Record<number, boolean>>({
    0: false,
    1: false
  });

  const toggleJobDetails = (index: number) => {
    if (expandedJob === index) {
      setExpandedJob(null);
    } else {
      setExpandedJob(index);
      // Reset show all details when switching jobs
      setShowAllDetails({...showAllDetails, [index]: false});
    }
  };

  const toggleShowAllDetails = (index: number) => {
    setShowAllDetails({...showAllDetails, [index]: !showAllDetails[index]});
  };
  
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "IntelliCredence Pvt Ltd",
      location: "Remote",
      date: "July 2024 - Present",
      logo: "I",
      color: "bg-blue-500",
      projects: [
        {
          name: "HRMS Platform Development",
          description: "Engineered a comprehensive HRMS CRM platform, streamlining recruitment workflows, candidate tracking, and internal messaging across all branches.",
          achievements: [
            "Enhanced operational efficiency by 60% through workflow optimization",
            "Integrated Graph QL APIs with React.js for interactive interface",
            "Optimized backend performance by 40% with Node.js services",
            "Reduced build and deployment time by 50% with CI/CD pipelines"
          ],
          tech: ["React.js", "Node.js", "MongoDB", "Azure"]
        },
        {
          name: "Offer Letter Automation Module",
          description: "Automated payroll processing and offer letter generation in the HRMS module.",
          achievements: [
            "Reduced manual effort by 60% through automated document generation",
            "Implemented template-based system for generating custom offer letters"
          ],
          tech: ["React.js"]
        },
        {
          name: "Event Management & Conference Platform",
          description: "Designed and developed a comprehensive event management platform, integrating sponsor, venue, speaker, and attendee management.",
          achievements: [
            "Enhanced event coordination and efficiency by 35%",
            "Implemented super-admin role for centralized multi-admin control",
            "Introduced conference entity for sponsor collaboration and management",
            "Established CI/CD pipeline with Azure App Service for automated deployments"
          ],
          tech: ["Next.js", "TypeScript", "CosmosDB", "Azure"]
        }
      ]
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "Hero MotoCorp",
      location: "On-site",
      date: "June 2022 - August 2022",
      logo: "H",
      color: "bg-red-500",
      projects: [
        {
          name: "Web Scraping Application",
          description: "Designed and implemented a high-performance web scraping application using Python, leveraging Beautiful Soup, Selenium, and Pandas.",
          achievements: [
            "Streamlined vendor, inventory, and product data processing by 80%",
            "Automated data extraction from various sources into Google Sheets"
          ],
          tech: ["Python", "BeautifulSoup", "Selenium", "Pandas"]
        },
        {
          name: "Document Automation System",
          description: "Developed a Python-based document automation system for optimizing document handling.",
          achievements: [
            "Reduced manual intervention by 70%",
            "Improved efficiency and accuracy in document processing"
          ],
          tech: ["Python"]
        },
        {
          name: "Research & Implementation of Automation Tools",
          description: "Conducted comprehensive research and testing of RPA tools, including UI Path and Automation Anywhere.",
          achievements: [
            "Delivered detailed reports on automation strategies and feasibility",
            "Drove data-backed decision making for implementation"
          ],
          tech: ["UI Path", "Automation Anywhere"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-primary px-3 py-1 glass-card inline-block rounded-full mb-4">
            Work Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Journey
          </h2>
        </div>

        {/* OS-style window container */}
        <div className="bg-[#0A0A0A] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
          {/* Window header */}
          <div className="bg-[#161616] border-b border-gray-800 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex space-x-2">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <span className="text-sm font-medium ml-2 text-gray-300 font-mono flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" />
                work-experience.sh
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 text-gray-400 hover:text-gray-300">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-300">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal-inspired header */}
          <div className="bg-[#1A1A1A] border-b border-gray-800 p-3 font-mono text-sm">
            <div className="flex items-center text-gray-400">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-blue-400">cat</span>
              <span className="ml-2">career_history.json</span>
            </div>
          </div>

          {/* Content area */}
          <div className="p-0 bg-[#121212]">
            <div className="divide-y divide-gray-800">
              {jobs.map((job, index) => (
                <div key={job.id} className="bg-[#141414]">
                  <div 
                    className={`p-4 cursor-pointer ${expandedJob === index ? 'bg-[#1A1A1A]' : 'hover:bg-[#181818]'} transition-colors`}
                    onClick={() => toggleJobDetails(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 ${job.color} rounded-md flex items-center justify-center text-white font-bold`}>
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{job.title}</h3>
                          <div className="flex items-center text-sm text-gray-400">
                            <Building className="h-3.5 w-3.5 mr-1.5" />
                            <span>{job.company}</span>
                            <span className="mx-2 text-gray-600">•</span>
                            <Calendar className="h-3.5 w-3.5 mr-1.5" />
                            <span>{job.date}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight 
                        className={`h-5 w-5 text-gray-500 transition-transform ${expandedJob === index ? 'rotate-90' : ''}`} 
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedJob === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 font-mono text-sm bg-[#1A1A1A]">
                          <div className="pl-4 border-l-2 border-gray-700 ml-5 mt-4">
                            {job.projects.map((project, projectIndex) => (
                              <div 
                                key={projectIndex} 
                                className={`mb-6 ${projectIndex === job.projects.length - 1 ? '' : ''}`}
                              >
                                <div className="flex items-start mb-2">
                                  <div className="h-5 w-5 rounded-full bg-[#232323] flex items-center justify-center mr-2 mt-0.5">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                                  </div>
                                  <h4 className="text-white font-semibold text-base">{project.name}</h4>
                                </div>
                                
                                <div className="ml-7">
                                  <p className="text-gray-400 mb-3">{project.description}</p>
                                  
                                  <div className="mb-3">
                                    <div className="flex items-center mb-2 text-xs text-gray-300">
                                      <ArrowRight className="h-3.5 w-3.5 mr-1.5 text-blue-400" />
                                      <span className="text-blue-400">Key achievements</span>
                                    </div>
                                    
                                    <div className="space-y-1.5">
                                      {project.achievements.slice(0, showAllDetails[index] ? undefined : 2).map((achievement, i) => (
                                        <div key={i} className="flex items-start pl-4 text-gray-300">
                                          <span className="mr-2">•</span>
                                          <span>{achievement}</span>
                                        </div>
                                      ))}
                                      
                                      {project.achievements.length > 2 && !showAllDetails[index] && (
                                        <button 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            toggleShowAllDetails(index);
                                          }}
                                          className="text-xs text-blue-400 hover:text-blue-300 flex items-center mt-1 ml-4"
                                        >
                                          <ChevronDown className="h-3 w-3 mr-1" />
                                          <span>Show all {project.achievements.length} achievements</span>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((tech, i) => (
                                      <span key={i} className="bg-[#262626] text-xs px-2 py-1 rounded text-gray-300">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {showAllDetails[index] && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleShowAllDetails(index);
                              }}
                              className="text-xs text-blue-400 hover:text-blue-300 flex items-center mt-3 ml-11"
                            >
                              <ChevronDown className="h-3 w-3 mr-1 rotate-180" />
                              <span>Show less</span>
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-[#161616] border-t border-gray-800 px-3 py-2 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-green-500 mr-1.5">✓</span>
              <span>2 companies</span>
              <span className="mx-2">|</span>
              <span>5+ projects</span>
            </div>
            <div className="font-mono">© {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
