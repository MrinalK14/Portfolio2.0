import { useState } from "react";
import { Award, FileCheck, Trophy, Camera, FileBadge, Bookmark, Medal, Clock, ChevronRight, X, Plus, DoorClosed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements'>('certifications');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const certifications = [
    {
      id: "mlops",
      title: "Python Essentials for MLOps",
      issuer: "Duke University",
      icon: <FileCheck className="h-5 w-5" />,
      year: 2024,
      color: "bg-blue-500/20",
      textColor: "text-blue-400",
      details: "Essential MLOps skills using Python, including automation, deployment, and monitoring of ML systems."
    },
    {
      id: "datascience",
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      icon: <FileBadge className="h-5 w-5" />,
      year: 2024,
      color: "bg-indigo-500/20",
      textColor: "text-indigo-400",
      details: "Leveraging Python for data analysis, machine learning models, and AI development workflows."
    },
    {
      id: "cybersecurity",
      title: "Palo Alto Networks Cybersecurity Foundation",
      issuer: "Coursera",
      icon: <DoorClosed className="h-5 w-5" />,
      year: 2023,
      color: "bg-red-500/20",
      textColor: "text-red-400",
      details: "Network security fundamentals, threat detection, and cybersecurity best practices."
    },
    {
      id: "aiml",
      title: "AI & Machine Learning Specialization",
      issuer: "Stanford University",
      icon: <Bookmark className="h-5 w-5" />,
      year: 2022,
      color: "bg-green-500/20",
      textColor: "text-green-400",
      details: "Advanced machine learning algorithms, neural networks, and practical AI applications."
    },
  ];

  const achievements = [
    {
      id: "research",
      title: "Published Research Paper on Home Security via Facial Recognition",
      description: "International Conference on Smart Devices (ICSD)",
      icon: <Award className="h-5 w-5" />,
      year: 2024,
      color: "bg-purple-500/20",
      textColor: "text-purple-400",
      details: "Researched and developed a novel approach to home security using facial recognition algorithms with improved accuracy and reduced false positives."
    },
    {
      id: "hackathon",
      title: "College Hackathon Winner",
      description: "First place in the annual AI innovation challenge",
      icon: <Trophy className="h-5 w-5" />,
      year: 2023,
      color: "bg-amber-500/20",
      textColor: "text-amber-400",
      details: "Led a team of four to develop an AI-powered solution for healthcare diagnostics, completing the project in just 48 hours."
    },
    {
      id: "media",
      title: "Media Team Representative",
      description: "Collaborated with the Dept. of Art and Cultural Affairs",
      icon: <Camera className="h-5 w-5" />,
      year: 2022,
      color: "bg-pink-500/20",
      textColor: "text-pink-400",
      details: "Served as photographer and videographer for major campus events and festivals, creating a comprehensive visual archive of university activities."
    },
  ];

  const handleToggleItem = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };
  
  return (
    <section id="certifications" className="min-h-screen py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-primary px-3 py-1 glass-card inline-block rounded-full mb-4">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & Achievements
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex border border-gray-800 rounded-t-lg overflow-hidden mb-0">
          <button
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'bg-[#161616] text-blue-400 border-b-2 border-blue-400'
                : 'bg-[#0F0F0F] hover:bg-[#151515] text-gray-400'
            }`}
            onClick={() => setActiveTab('certifications')}
          >
            <Medal className="h-4 w-4" />
            <span>Certifications</span>
            <span className="bg-[#1E1E1E] text-gray-400 rounded-full px-2 py-0.5 text-xs ml-1">
              {certifications.length}
            </span>
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium flex items-center gap-2 ${
              activeTab === 'achievements'
                ? 'bg-[#161616] text-purple-400 border-b-2 border-purple-400'
                : 'bg-[#0F0F0F] hover:bg-[#151515] text-gray-400'
            }`}
            onClick={() => setActiveTab('achievements')}
          >
            <Trophy className="h-4 w-4" />
            <span>Achievements</span>
            <span className="bg-[#1E1E1E] text-gray-400 rounded-full px-2 py-0.5 text-xs ml-1">
              {achievements.length}
            </span>
          </button>
        </div>

        {/* Content area */}
        <div className="bg-[#161616] border border-t-0 border-gray-800 rounded-b-lg p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'certifications' ? (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className={`${cert.color} border border-gray-800 rounded-lg overflow-hidden shadow-md`}
                    layout
                  >
                    <div 
                      className="p-4 cursor-pointer flex items-center justify-between"
                      onClick={() => handleToggleItem(cert.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-md bg-[#191919] ${cert.textColor}`}>
                          {cert.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{cert.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>{cert.issuer}</span>
                            <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`${cert.textColor}`}>
                        {expandedItem === cert.id ? (
                          <X className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedItem === cert.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-4 text-sm bg-[#0F0F0F] border-t border-gray-800"
                        >
                          <div className="pt-3">
                            <p className="text-gray-300">{cert.details}</p>
                            
                            <div className="flex justify-end mt-4">
                              <button className={`px-3 py-1.5 rounded-md bg-[#1A1A1A] ${cert.textColor} text-xs font-medium flex items-center gap-1.5`}>
                                <Plus className="h-3.5 w-3.5" />
                                Verify Certificate
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    className={`${achievement.color} border border-gray-800 rounded-lg overflow-hidden shadow-md`}
                    layout
                  >
                    <div 
                      className="p-4 cursor-pointer flex items-center justify-between"
                      onClick={() => handleToggleItem(achievement.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-md bg-[#191919] ${achievement.textColor}`}>
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{achievement.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="line-clamp-1">{achievement.description}</span>
                            <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                            <span className="flex items-center gap-1 whitespace-nowrap">
                              <Clock className="h-3.5 w-3.5" />
                              {achievement.year}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`${achievement.textColor}`}>
                        {expandedItem === achievement.id ? (
                          <X className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedItem === achievement.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-4 text-sm bg-[#0F0F0F] border-t border-gray-800"
                        >
                          <div className="pt-3">
                            <p className="text-gray-300">{achievement.details}</p>
                            
                            <div className="flex justify-end mt-4">
                              <button className={`px-3 py-1.5 rounded-md bg-[#1A1A1A] ${achievement.textColor} text-xs font-medium flex items-center gap-1.5`}>
                                <Plus className="h-3.5 w-3.5" />
                                View More Info
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
